import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

const practices = [
  {
    title: "Be Specific",
    desc: "Vague instructions produce vague results. State exactly what you want, including scope, length, and format.",
    bad: `Explain machine learning.`,
    good: `Explain supervised machine learning in 3 paragraphs, suitable for a college freshman with no prior ML knowledge. Include one analogy.`,
  },
  {
    title: "Provide Context",
    desc: "Give the model background information about your situation, audience, or constraints.",
    bad: `Write an email about the meeting.`,
    good: `Write a professional email to my team (5 software engineers) rescheduling tomorrow's sprint planning meeting from 10 AM to 2 PM due to a client call conflict. Keep it brief and friendly.`,
  },
  {
    title: "Define Output Format",
    desc: "Tell the model how to structure its response — bullet points, JSON, table, numbered list, etc.",
    bad: `Give me some API endpoints.`,
    good: `List 5 REST API endpoints for a to-do app in this format:
METHOD /path - Description
Example: GET /todos - Retrieve all to-do items`,
  },
  {
    title: "Avoid Ambiguous Instructions",
    desc: "Remove words that can be interpreted multiple ways. Be precise about quantities, scope, and expectations.",
    bad: `Make it better.`,
    good: `Improve the readability of this paragraph by: using shorter sentences (max 20 words each), replacing jargon with plain English, and adding transition words between ideas.`,
  },
  {
    title: "Use Iterative Prompting",
    desc: "Start broad, then refine. Each follow-up prompt narrows the output closer to your goal.",
    bad: `(Trying to get everything perfect in one prompt)`,
    good: `Step 1: "Outline a blog post about remote work productivity."
Step 2: "Expand section 2 into 3 detailed paragraphs."
Step 3: "Make the tone more conversational and add an example."`,
  },
];

export default function BestPractices() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Best Practices</h1>
        <p>Follow these guidelines to consistently write effective prompts that produce high-quality AI responses.</p>

        {practices.map((p, i) => (
          <div key={i}>
            <h2>{i + 1}. {p.title}</h2>
            <p>{p.desc}</p>
            <h3>❌ Before</h3>
            <CodeBlock>{p.bad}</CodeBlock>
            <h3>✅ After</h3>
            <CodeBlock>{p.good}</CodeBlock>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
