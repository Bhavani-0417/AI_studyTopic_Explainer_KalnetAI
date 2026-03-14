"use client";

import { useState } from "react";
import TopicInput from "@/components/TopicInput";
import ExplanationCard from "@/components/ExplanationCard";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedTopic, setSubmittedTopic] = useState("");

  const handleExplain = async () => {
    setError("");
    setExplanation("");

    if (!topic.trim()) {
      setError("Please enter a topic to continue.");
      return;
    }

    setIsLoading(true);
    setSubmittedTopic(topic);

    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setExplanation(data.explanation);
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 
                     flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">📚 AI Study Explainer</h1>
          <p className="text-gray-500 mt-2">Enter any study topic and get a simple, student-friendly explanation.</p>
        </div>
        <TopicInput topic={topic} setTopic={setTopic} onSubmit={handleExplain} isLoading={isLoading} />
        <ExplanationCard topic={submittedTopic} explanation={explanation} error={error} isLoading={isLoading} />
      </div>
    </main>
  );
}