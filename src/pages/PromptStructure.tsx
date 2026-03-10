import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function PromptStructure() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Prompt Structure</h1>
        <p>
          A well-structured prompt consists of four key components. Understanding these components helps you consistently write effective prompts.
        </p>

        <h2>1. Instruction</h2>
        <p>The core task or action you want the AI to perform. This should be clear and direct.</p>
        <CodeBlock title="Instruction Example">
{`Summarize the following article in 3 bullet points.`}
        </CodeBlock>

        <h2>2. Context</h2>
        <p>Background information that helps the AI understand the situation and produce relevant output.</p>
        <CodeBlock title="Context Example">
{`You are a senior software engineer reviewing code for a junior developer. 
The codebase uses React with TypeScript.`}
        </CodeBlock>

        <h2>3. Input Data</h2>
        <p>The specific data or content the AI should process or reference.</p>
        <CodeBlock title="Input Data Example">
{`Article: "Artificial intelligence has transformed the healthcare industry 
by enabling early disease detection, personalized treatment plans, 
and automated administrative tasks..."`}
        </CodeBlock>

        <h2>4. Output Format</h2>
        <p>Specify how you want the response structured — bullet points, JSON, table, paragraph, etc.</p>
        <CodeBlock title="Output Format Example">
{`Respond in the following JSON format:
{
  "summary": "...",
  "key_points": ["...", "..."],
  "sentiment": "positive/negative/neutral"
}`}
        </CodeBlock>

        <h2>Complete Structured Prompt</h2>
        <CodeBlock title="Full Example">
{`Role: You are a data analyst specializing in market research.

Task: Analyze the following sales data and identify the top 3 trends.

Data:
- Q1: $1.2M (up 15%)
- Q2: $1.5M (up 25%)
- Q3: $1.1M (down 27%)
- Q4: $1.8M (up 64%)

Format: Provide your analysis as:
1. A brief summary (2-3 sentences)
2. Three key trends as bullet points
3. One recommendation`}
        </CodeBlock>
      </div>
    </DocsLayout>
  );
}
