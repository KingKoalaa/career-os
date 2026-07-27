import PageLayout from "../../components/PageLayout";

// Assets workspace landing page (TASK-M2-007).
// Presentation only — describes the workspace's purpose and planned
// scope. No data, no business logic, no interaction.
export default function AssetsPage() {
  return (
    <PageLayout
      title="Assets"
      subtitle="Store and manage reusable career assets, documents, and templates."
    >
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Planned Features
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-500">
              <li>Documents</li>
              <li>Templates</li>
              <li>Media Library</li>
              <li>Portfolio Assets</li>
              <li>Export Formats</li>
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
                Your asset library is currently empty.
              </p>
              <p className="text-sm text-slate-500">
                Future updates will allow you to store and manage your career assets here.
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
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Workspace Overview
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-slate-900">0</span>
                <span className="text-xs text-slate-500">Documents</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-slate-900">0</span>
                <span className="text-xs text-slate-500">Templates</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-slate-900">0</span>
                <span className="text-xs text-slate-500">Media Files</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Information
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900">
                Workspace Status
              </p>
              <p className="text-sm text-slate-500">
                This workspace is currently operating in presentation mode.
                Interactive functionality, data management, and automation
                features will be introduced during future milestones.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}