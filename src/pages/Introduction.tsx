import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function Introduction() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Introduction to Prompt Engineering</h1>
        <p>
          Prompt engineering is the practice of designing and refining inputs (prompts) given to AI language models to elicit the most accurate, relevant, and useful responses. It is a critical skill for anyone working with generative AI.
        </p>

        <h2 id="what-is-a-prompt">What is a Prompt?</h2>
        <p>
          A <strong>prompt</strong> is any text input you provide to an AI model. It can be a question, an instruction, a conversation starter, or a complex multi-part request. The quality and structure of your prompt directly determines the quality of the AI's output.
        </p>

        <CodeBlock title="Simple Prompt Example">
{`User: What are the three laws of thermodynamics?

AI: The three laws of thermodynamics are:
1. Energy cannot be created or destroyed (conservation of energy)
2. Entropy of an isolated system always increases
3. Entropy approaches a constant as temperature approaches absolute zero`}
        </CodeBlock>

        <h2>How AI Models Interpret Prompts</h2>
        <p>
          Large Language Models (LLMs) like ChatGPT process prompts by predicting the most likely next tokens based on patterns learned during training. This means:
        </p>
        <ul>
          <li>Models respond based on <strong>statistical patterns</strong>, not true understanding</li>
          <li>The <strong>phrasing</strong> of your prompt significantly influences the response</li>
          <li>Providing <strong>context and constraints</strong> guides the model toward better outputs</li>
          <li>Ambiguous prompts lead to ambiguous responses</li>
        </ul>

        <h2>The Prompt → Response Flow</h2>
        <div className="flow-diagram my-8">
          <div className="flow-step">User Prompt</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">AI Model</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Generated Response</div>
        </div>

        <h2>Why Prompt Quality Matters</h2>
        <ul>
          <li><strong>Vague prompts</strong> → Generic, unfocused responses</li>
          <li><strong>Specific prompts</strong> → Precise, actionable responses</li>
          <li><strong>Structured prompts</strong> → Well-organized, complete responses</li>
        </ul>

        <h2 id="real-world-applications">Real-world Applications</h2>
        <ul>
          <li><strong>Software Development</strong> — Code generation, debugging, documentation</li>
          <li><strong>Content Creation</strong> — Blog posts, marketing copy, social media</li>
          <li><strong>Education</strong> — Tutoring, quiz generation, lesson planning</li>
          <li><strong>Data Analysis</strong> — Summarization, pattern extraction, reporting</li>
          <li><strong>Customer Support</strong> — Chatbot design, response templates</li>
          <li><strong>Research</strong> — Literature review, hypothesis generation</li>
        </ul>
      </div>
    </DocsLayout>
  );
}
