import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

const techniques = [
  {
    title: "Zero-Shot Prompting",
    desc: "Ask the model to perform a task without providing any examples. Relies on the model's pre-trained knowledge.",
    example: `Classify the following text as positive, negative, or neutral:
"The product quality is excellent but the shipping was very slow."`,
  },
  {
    title: "Few-Shot Prompting",
    desc: "Provide a few examples before asking the model to perform the task. This guides the model's output format and style.",
    example: `Classify the sentiment:

Text: "I love this product!" → Positive
Text: "Terrible experience." → Negative
Text: "It was okay, nothing special." → Neutral

Text: "The food was amazing but the service was slow." → `,
  },
  {
    title: "Chain-of-Thought Prompting",
    desc: "Ask the model to reason step by step before arriving at an answer. Improves accuracy for complex reasoning tasks.",
    example: `Q: A store has 45 apples. They sell 12 in the morning and receive 
a shipment of 30 in the afternoon. How many apples do they have?

Think step by step:
1. Start with 45 apples
2. Subtract 12 sold: 45 - 12 = 33
3. Add 30 received: 33 + 30 = 63

Answer: 63 apples`,
  },
  {
    title: "Role-Based Prompting",
    desc: "Assign a specific role or persona to the AI to influence its response style, expertise level, and perspective.",
    example: `You are a senior cybersecurity consultant with 15 years of experience.

A client asks: "Is it safe to use public Wi-Fi for online banking?"

Provide a professional assessment with specific recommendations.`,
  },
  {
    title: "Instruction Prompting",
    desc: "Give explicit, detailed instructions about what the model should and shouldn't do.",
    example: `Write a product description for a wireless Bluetooth speaker.

Requirements:
- Keep it under 100 words
- Highlight 3 key features
- Use an enthusiastic but professional tone
- Do NOT mention competitors
- End with a call to action`,
  },
];

export default function PromptTechniques() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Prompt Techniques</h1>
        <p>
          Different prompting techniques unlock different capabilities of AI models. Choosing the right technique depends on your task complexity and desired output.
        </p>

        {techniques.map((t, i) => (
          <div key={i}>
            <h2>{t.title}</h2>
            <p>{t.desc}</p>
            <CodeBlock title={`${t.title} Example`}>{t.example}</CodeBlock>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
