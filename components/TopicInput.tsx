interface TopicInputProps {
  topic: string;
  setTopic: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function TopicInput({ topic, setTopic, onSubmit, isLoading }: TopicInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="Enter a study topic... (e.g. Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className="w-full px-5 py-4 text-base rounded-xl border-2 border-gray-200 
                   focus:border-blue-500 focus:outline-none transition-colors
                   disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full py-4 bg-blue-600 hover:bg-blue-700
                   text-white font-semibold text-base rounded-xl transition-colors
                   disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating explanation..." : "Explain Topic"}
      </button>
    </div>
  );
}