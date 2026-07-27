import PageLayout from "../../components/PageLayout";

// Knowledge workspace landing page (TASK-M2-007).
// Presentation only — describes the workspace's purpose and planned
// scope. No data, no business logic, no interaction.
export default function KnowledgePage() {
  return (
    <PageLayout
      title="Knowledge"
      subtitle="Organize notes, research, documentation, and learning resources."
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Planned Features
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-500">
              <li>Notes</li>
              <li>Research Library</li>
              <li>Documentation</li>
              <li>Professional Stories</li>
              <li>Learning Resources</li>
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
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Current Workspace
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-500">
                Your knowledge base is empty.
              </p>
              <p className="text-sm text-slate-500">
                Future updates will allow you to build and organize your knowledge here.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Section Navigation
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Resume</li>
              <li>Applications</li>
              <li>Interviews</li>
              <li>Companies</li>
              <li>Career Planning</li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}