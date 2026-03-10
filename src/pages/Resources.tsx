import DocsLayout from "@/components/DocsLayout";
import { ExternalLink } from "lucide-react";

const sections = [
  {
    title: "Articles & Guides",
    items: [
      { name: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", desc: "Official guide from OpenAI on best practices." },
      { name: "Anthropic Prompt Engineering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering", desc: "Claude-specific prompting techniques and tips." },
      { name: "Learn Prompting", url: "https://learnprompting.org", desc: "Free, open-source course on prompt engineering." },
      { name: "Prompt Engineering Guide by DAIR.AI", url: "https://www.promptingguide.ai", desc: "Comprehensive research-backed prompting guide." },
    ],
  },
  {
    title: "AI Learning Platforms",
    items: [
      { name: "DeepLearning.AI", url: "https://www.deeplearning.ai", desc: "Courses on AI and prompt engineering by Andrew Ng." },
      { name: "Coursera — AI for Everyone", url: "https://www.coursera.org", desc: "Introductory AI courses accessible to beginners." },
      { name: "Hugging Face", url: "https://huggingface.co/learn", desc: "Open-source AI models, datasets, and tutorials." },
    ],
  },
  {
    title: "Documentation & References",
    items: [
      { name: "OpenAI API Documentation", url: "https://platform.openai.com/docs", desc: "Complete API reference for GPT models." },
      { name: "Google AI — Gemini Docs", url: "https://ai.google.dev", desc: "Documentation for Google's Gemini models." },
      { name: "LangChain Documentation", url: "https://docs.langchain.com", desc: "Framework for building LLM-powered applications." },
    ],
  },
  {
    title: "Useful Tools",
    items: [
      { name: "ChatGPT", url: "https://chat.openai.com", desc: "OpenAI's conversational AI for prompt experimentation." },
      { name: "Claude", url: "https://claude.ai", desc: "Anthropic's AI assistant with strong reasoning." },
      { name: "PromptPerfect", url: "https://promptperfect.jina.ai", desc: "Tool for automatically optimizing prompts." },
      { name: "Dust.tt", url: "https://dust.tt", desc: "Platform for designing and deploying LLM workflows." },
    ],
  },
];

export default function Resources() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Resources</h1>
        <p>Curated collection of articles, platforms, documentation, and tools to deepen your prompt engineering skills.</p>

        {sections.map((s) => (
          <div key={s.title}>
            <h2>{s.title}</h2>
            <div className="space-y-3 not-prose">
              {s.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topic-card flex items-start gap-3 !p-4"
                >
                  <ExternalLink size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
