interface ExplanationCardProps {
  topic: string;
  explanation: string;
  error: string;
  isLoading: boolean;
}

export default function ExplanationCard({ topic, explanation, error, isLoading }: ExplanationCardProps) {
  if (isLoading) {
    return (
      <div className="w-full mt-6 p-6 bg-blue-50 border-2 border-blue-100 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-blue-600 font-medium">Generating explanation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-6 p-6 bg-red-50 border-2 border-red-100 rounded-xl">
        <p className="text-red-600 font-medium">⚠️ {error}</p>
      </div>
    );
  }

  if (explanation) {
    return (
      <div className="w-full mt-6 p-6 bg-green-50 border-2 border-green-100 rounded-xl">
        <div className="mb-3">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Topic</span>
          <h2 className="text-xl font-bold text-gray-800 mt-1">{topic}</h2>
        </div>
        <div>
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Explanation</span>
          <p className="text-gray-700 mt-1 leading-relaxed text-base">{explanation}</p>
        </div>
      </div>
    );
  }

  return null;
}