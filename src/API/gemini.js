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
                  text: `Give me ${numbers} of the most commonly asked and important technical interview questions for the topic: "${topic}".

These questions should be relevant to top companies like TCS, Wipro, Amazon, SAP Labs, Accenture, Infosys, Cognizant, etc. Include recent questions asked on platforms like GeeksforGeeks, LeetCode, and LinkedIn.

Each answer should be concise and informative, around 5 to 6 lines long. Focus on quality, clarity, and usefulness for real interviews , and you can collect the questions also from GFG , linkedin ,Leetcode ,quera ,and other social media where the people post about interview question they have faced .

Format the response like:

Question 1: ...
Answer: ...

Question 2: ...
Answer: ...

Do NOT include any extra commentary or introduction.`
                },
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
