export async function generateExplanation(topic: string): Promise<string> {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/auto",
      messages: [
        {
          role: "user",
          content: `Explain the topic "${topic}" in simple, clear terms for a student. Use short sentences, avoid jargon, keep it under 150 words. Start directly with the explanation.`
        }
      ]
    })
  });

  const data = await response.json();
  
  // This will show us exactly what OpenRouter is returning
  console.log("OpenRouter response:", JSON.stringify(data, null, 2));

  if (!data.choices || !data.choices[0]) {
    throw new Error(data.error?.message || JSON.stringify(data));
  }

  return data.choices[0].message.content;
}