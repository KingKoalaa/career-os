import PageLayout from "../../components/PageLayout";

// Projects workspace landing page (TASK-M2-007).
// Presentation only — describes the workspace's purpose and planned
// scope. No data, no business logic, no interaction.
export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      subtitle="Showcase your project portfolio and manage project case studies."
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Planned Features
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-500">
              <li>Portfolio Projects</li>
              <li>Case Studies</li>
              <li>Project Details</li>
              <li>Technologies & Stack</li>
              <li>Project Timeline</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Development Status
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-900">Current Phase</dt>
                <dd className="mt-1 text-slate-500">Workspace Foundation</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">Status</dt>
                <dd className="mt-1 text-slate-500">Under Development</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">Next Milestone</dt>
                <dd className="mt-1 text-slate-500">Data Layer Integration</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}