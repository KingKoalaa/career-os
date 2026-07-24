import { FileText, Briefcase, ClipboardList, Award } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

// Home workspace dashboard skeleton (TASK-M2-003).
//
// Static, presentation-only layout. No state, no data loading, no
// business logic — see TASK-M2-003 out-of-scope list. Content that
// exists only once is written directly into the JSX rather than
// mapped from an array, since a reusable data structure is not
// justified for content with no repetition (YAGNI, ADR-001). All
// markup lives here rather than in extracted components: only one
// dashboard exists today, so a reusable dashboard framework is not
// yet justified either. Future milestones can extract shared pieces
// once more than one workspace needs them.
export default function HomePage() {
  return (
    <PageLayout title="Home" subtitle="Welcome to Career OS.">
      <div className="flex flex-col gap-8">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <FileText className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Resume</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Briefcase className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Portfolio</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <ClipboardList className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Job Tracker</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Award className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-900">Certifications</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Today's Focus</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">No focus items yet.</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Recent Activity</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">No recent activity.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Upcoming Modules</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-slate-500">Career</li>
              <li className="text-sm text-slate-500">Knowledge</li>
              <li className="text-sm text-slate-500">Projects</li>
              <li className="text-sm text-slate-500">Automation</li>
              <li className="text-sm text-slate-500">Assets</li>
              <li className="text-sm text-slate-500">Settings</li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}