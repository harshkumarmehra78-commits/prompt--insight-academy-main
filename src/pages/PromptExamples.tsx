import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";

export default function PromptExamples() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Prompt Examples</h1>
        <p>Learn by comparing weak prompts with improved versions across different use cases.</p>

        <h2>Bad vs. Improved Prompts</h2>

        <h3>❌ Bad Prompt</h3>
        <CodeBlock title="Vague Prompt">{`Tell me about AI.`}</CodeBlock>

        <h3>✅ Improved Prompt</h3>
        <CodeBlock title="Specific Prompt">{`Explain the three main types of artificial intelligence 
(narrow AI, general AI, and super AI) in simple terms. 
Keep the explanation under 200 words and include one 
real-world example for each type.`}</CodeBlock>

        <h2>Coding Prompts</h2>
        <h3>❌ Bad</h3>
        <CodeBlock title="Vague">{`Write a sorting function.`}</CodeBlock>
        <h3>✅ Improved</h3>
        <CodeBlock title="Specific">{`Write a TypeScript function called "mergeSort" that:
- Takes an array of numbers as input
- Implements the merge sort algorithm
- Returns the sorted array in ascending order
- Includes JSDoc comments
- Handles edge cases (empty array, single element)`}</CodeBlock>

        <h2>Learning Prompts</h2>
        <h3>❌ Bad</h3>
        <CodeBlock title="Vague">{`Teach me Python.`}</CodeBlock>
        <h3>✅ Improved</h3>
        <CodeBlock title="Specific">{`I'm a beginner programmer who knows basic HTML/CSS. 
Create a 5-step learning plan for Python that:
- Starts with variables and data types
- Includes one small project per step
- Each step should take about 1 week
- Focus on practical, real-world applications`}</CodeBlock>

        <h2>Content Generation Prompts</h2>
        <h3>❌ Bad</h3>
        <CodeBlock title="Vague">{`Write a blog post.`}</CodeBlock>
        <h3>✅ Improved</h3>
        <CodeBlock title="Specific">{`Write an 800-word blog post about "5 Habits of Highly 
Productive Remote Workers." 

Target audience: Mid-career professionals aged 28-40.
Tone: Conversational but authoritative.
Structure: Introduction, 5 numbered sections with 
subheadings, conclusion with a call-to-action.
Include one actionable tip per section.`}</CodeBlock>
      </div>
    </DocsLayout>
  );
}
