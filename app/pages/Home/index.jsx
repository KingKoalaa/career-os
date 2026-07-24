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
          Static placeholder values for the presentation layer.
          These values will be replaced by real application data during the
          future data/business logic milestone.
        */}
        {/* Top Row: Resume Progress, Active Applications, Portfolio Status */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Resume Progress</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <dl className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Resume Version</dt>
                  <dd className="text-sm font-medium text-slate-900">3.0</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Last Updated</dt>
                  <dd className="text-sm font-medium text-slate-900">Updated Today</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Completion</dt>
                  <dd className="text-sm font-medium text-slate-900">95%</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Status</dt>
                  <dd className="text-sm font-medium text-slate-900">Ready for Applications</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Active Applications</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-slate-900">0</span>
                  <span className="text-xs text-slate-500">Applications Submitted</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-slate-900">0</span>
                  <span className="text-xs text-slate-500">Interviews</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-slate-900">0</span>
                  <span className="text-xs text-slate-500">Follow Ups</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Portfolio Status</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <dl className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Website</dt>
                  <dd className="text-sm font-medium text-slate-900">Published</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">GitHub</dt>
                  <dd className="text-sm font-medium text-slate-900">Active</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-slate-500">Case Studies</dt>
                  <dd className="text-sm font-medium text-slate-900">2 Projects</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Middle Row: Certification Progress, Weekly Goals */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Certification Progress</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="mb-2 text-xs font-medium text-slate-500">Completed</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm text-slate-900">Make Advanced</li>
                    <li className="text-sm text-slate-900">Claude AI</li>
                    <li className="text-sm text-slate-900">Prompt Engineering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-medium text-slate-500">In Progress</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm text-slate-900">n8n</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Weekly Goals</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-slate-500">□ Tailor Resume</li>
                <li className="text-sm text-slate-500">□ Apply to 10 Jobs</li>
                <li className="text-sm text-slate-500">□ Update Portfolio</li>
                <li className="text-sm text-slate-500">□ Publish Automation Project</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Row: Recent Activity */}
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Recent Activity</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <dl className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-slate-500">Today</dt>
                <dd className="text-sm font-medium text-slate-900">Updated Home Dashboard</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-slate-500">Yesterday</dt>
                <dd className="text-sm font-medium text-slate-900">Completed Workspace Routing</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-slate-500">Earlier</dt>
                <dd className="text-sm font-medium text-slate-900">Repository Bootstrap</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}