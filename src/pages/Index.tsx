import { Link } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import { BookOpen, Lightbulb, Code, Sparkles, Shield, FolderOpen } from "lucide-react";

const topicCards = [
  { to: "/introduction", icon: BookOpen, title: "Introduction", desc: "Learn the fundamentals of prompt engineering and why it matters." },
  { to: "/prompt-structure", icon: Code, title: "Prompt Structure", desc: "Understand the building blocks of an effective prompt." },
  { to: "/prompt-techniques", icon: Lightbulb, title: "Techniques", desc: "Master zero-shot, few-shot, chain-of-thought, and more." },
  { to: "/prompt-examples", icon: Sparkles, title: "Examples", desc: "See real before-and-after prompt comparisons." },
  { to: "/best-practices", icon: Shield, title: "Best Practices", desc: "Guidelines for writing clear, effective prompts." },
  { to: "/resources", icon: FolderOpen, title: "Resources", desc: "Curated articles, tools, and learning platforms." },
];

export default function Home() {
  return (
    <DocsLayout>
      <div className="prose-docs">
        <h1>Welcome to the Prompt Engineering Learning Portal</h1>
        <p>
          Prompt engineering is the art and science of communicating effectively with AI language models like ChatGPT, Claude, and Gemini. A well-crafted prompt can be the difference between a vague, unhelpful response and a precise, insightful one.
        </p>

        <h2>Why Prompt Engineering Matters</h2>
        <ul>
          <li><strong>Better outputs</strong> — Clear prompts produce accurate, relevant responses</li>
          <li><strong>Cost efficiency</strong> — Fewer iterations save time and API costs</li>
          <li><strong>Unlocks capabilities</strong> — Advanced techniques reveal hidden model abilities</li>
          <li><strong>Professional skill</strong> — In-demand across industries using AI</li>
        </ul>

        <h2>Applications</h2>
        <p>Prompt engineering is used in content creation, software development, education, data analysis, customer support automation, creative writing, and research.</p>

        <h2>Explore Topics</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {topicCards.map((c) => (
          <Link key={c.to} to={c.to} className="topic-card group">
            <c.icon className="text-primary mb-3" size={24} />
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-6 bg-accent rounded-lg border">
        <h3 className="font-semibold text-accent-foreground mb-2">🎮 Try the Prompt Playground</h3>
        <p className="text-sm text-accent-foreground/80 mb-3">Experiment with prompts and see simulated AI responses in real-time.</p>
        <Link to="/playground" className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
          Open Playground →
        </Link>
      </div>
    </DocsLayout>
  );
}
