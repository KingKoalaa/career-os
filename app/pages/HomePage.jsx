import { Sparkles } from 'lucide-react';

// Placeholder landing page for the bootstrap milestone. Confirms Tailwind,
// React Router, and Lucide icons are wired together correctly. Replaced by
// the real dashboard in a future milestone.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <Sparkles className="h-10 w-10 text-gray-400" aria-hidden="true" />
      <h1 className="text-3xl font-semibold tracking-tight">Career OS</h1>
      <p className="max-w-md text-sm text-gray-500">
        Project foundation initialized. Feature development begins with Milestone 1.
      </p>
    </main>
  );
}
