import DocsLayout from "@/components/DocsLayout";
import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";

const simulatedResponses: Record<string, string> = {
  default: `I'd be happy to help! Based on your prompt, here's my response:

This is a simulated AI response. In a real implementation, this would connect to an AI API like OpenAI's GPT or Anthropic's Claude.

**Tips for better responses:**
- Be more specific about what you want
- Provide context and constraints
- Specify the desired output format
- Include examples if possible`,
  code: `Here's a sample implementation:

\`\`\`python
def hello_world():
    print("Hello, World!")
    
hello_world()
\`\`\`

This function defines a simple greeting and calls it immediately.`,
  explain: `Great question! Let me break it down:

1. **Core concept**: The fundamental idea revolves around...
2. **How it works**: The mechanism involves...
3. **Why it matters**: Understanding this is important because...

Would you like me to elaborate on any of these points?`,
  list: `Here's a structured list based on your request:

1. **First item** — Description and details
2. **Second item** — Description and details  
3. **Third item** — Description and details
4. **Fourth item** — Description and details
5. **Fifth item** — Description and details

Each item has been carefully selected based on relevance and importance.`,
};

function getSimulatedResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("code") || lower.includes("function") || lower.includes("write a") || lower.includes("program")) {
    return simulatedResponses.code;
  }
  if (lower.includes("explain") || lower.includes("what is") || lower.includes("how does") || lower.includes("why")) {
    return simulatedResponses.explain;
  }
  if (lower.includes("list") || lower.includes("top") || lower.includes("best") || lower.includes("examples")) {
    return simulatedResponses.list;
  }
  return simulatedResponses.default;
}

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    setTimeout(() => {
      setResponse(getSimulatedResponse(prompt));
      setLoading(false);
    }, 1200);
  };

  const reset = () => {
    setPrompt("");
    setResponse("");
  };

  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Prompt Playground</h1>
        <p>Experiment with prompts and see simulated AI responses. Try different techniques and observe how prompt structure affects the output.</p>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Your Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here... Try: 'Explain how machine learning works' or 'List the top 5 programming languages'"
            className="w-full h-36 p-4 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Sparkles size={16} />
            {loading ? "Generating..." : "Generate Response"}
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>

        {(response || loading) && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">AI Response</label>
            <div className="p-4 rounded-lg border bg-card min-h-[120px]">
              {loading ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:0.4s]" />
                  <span className="text-sm ml-1">Generating response...</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-sm text-foreground/90 font-sans leading-relaxed">{response}</pre>
              )}
            </div>
          </div>
        )}
      </div>
    </DocsLayout>
  );
}
