// src/api/gemini.js

export const fetchGeminiResponse = async (topic, apiKey , numbers = 27) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
             parts: [
  {
    text: `Give me exactly ${numbers} of the most commonly asked and important technical interview questions for the topic: "${topic}".

These questions should be relevant to companies like TCS, Wipro, Amazon, SAP Labs, Accenture, Infosys, Cognizant, etc., and should be based on actual questions reported on platforms like GeeksforGeeks, LeetCode, LinkedIn, Quora, and other social media where candidates share their real interview experiences.

For **each** question, you **must** provide a complete and clear answer in 5 to 6 lines. Every question should be followed by its answer. Do not include any questions without an answer.

Format your response strictly as:

Question 1: [Insert question here]  
Answer: [Insert concise and informative answer here]

Question 2: ...  
Answer: ...

Do NOT add any extra explanation, introduction, conclusion, or commentary — only the question and answer pairs as specified. Make sure all ${numbers} Q&A pairs are present and well-formatted.`
  }
],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // 🧠 Convert the raw Gemini text into structured array of questions/answers
    const qaArray = rawText
      .split(/\n{2,}/) // Split by 2 or more newlines
      .map((block) => {
        const [qLine, aLine] = block.split(/\n/);
        return {
          question: qLine?.replace(/^Question \d+:\s*/, "").trim(),
          answer: aLine?.replace(/^Answer:\s*/, "").trim(),
        };
      })
      .filter((item) => item.question && item.answer);

    return qaArray;
  } catch (err) {
    console.error("❌ Gemini API fetch failed:", err.message);
    return null;
  }
};
