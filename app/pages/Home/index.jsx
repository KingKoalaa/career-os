import { FileText, Briefcase, ClipboardList, Award } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

// Home workspace dashboard (TASK-M2-003, refined in TASK-M2-004,
// widgets added in TASK-M2-005).
//
// Static, presentation-only layout. No state, no data loading, no
// business logic — see TASK-M2-005 out-of-scope list. Content that
// exists only once is written directly into the JSX rather than
// mapped from an array, since a reusable data structure is not
// justified for content with no repetition (YAGNI, ADR-001). All
// markup lives here rather than in extracted components: only one
// dashboard exists today, so a reusable dashboard framework is not
// yet justified either. Future milestones can extract shared pieces
// once more than one workspace needs them.
//
// TASK-M2-005 replaces the placeholder "Today's Focus", "Recent
// Activity", and "Upcoming Modules" sections from TASK-M2-003 with
// six realistic dashboard widgets (Resume Progress, Active
// Applications, Portfolio Status, Certification Progress, Weekly
// Goals, Recent Activity) arranged in the hierarchy the task
// specifies. Quick Actions is preserved unchanged. Every widget
// reuses the existing card pattern (rounded-xl border border-slate-200
// bg-white p-6) and the 8px spacing scale already in use
// (gap-4/16, gap-6/24, gap-12/48) per ADR-002 — no new visual
// language is introduced. Per the task's design constraints, no
// charts, progress circles, badges, or animations are used anywhere
// below: progress and status are communicated with plain typography
// (label/value rows, stat numbers, and lists) only.
//
// TASK-M2-004 constrains the content column to a readable max width
// so the dashboard stays balanced on wide desktop viewports instead
// of stretching full-bleed (ADR-002 "Desktop: balanced dashboard,
// clean whitespace"). The original TASK-M2-003 Quick Action card
// pattern (horizontal icon+label cards) is preserved unchanged.
export default function HomePage() {
  return (
    <PageLayout title="Home" subtitle="Welcome to Career OS.">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6">
              <FileText className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Resume</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6">
              <Briefcase className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Portfolio</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6">
              <ClipboardList className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Job Tracker</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6">
              <Award className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Certifications</span>
            </div>
          </div>
        </section>

        {/*