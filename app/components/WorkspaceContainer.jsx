/**
 * WorkspaceContainer
 *
 * Presentational container for the active workspace content.
 * Contains no repository loading, search, or feature logic — those
 * are introduced in later milestones (see TASK-M1-001 out-of-scope list).
 *
 * Renders `children` when provided (e.g. the routed page passed down
 * from RootLayout via AppRouter's <Outlet />), so the existing routing
 * architecture continues to work once this container is wired into the
 * application. Falls back to the static placeholder when used on its
 * own (e.g. in isolation or a future component test).
 */
function WorkspaceContainer({ children }) {
  return (
    <main className="flex-1 overflow-auto bg-white px-8 py-6">
      {children ?? <p className="text-sm text-slate-500">Workspace Placeholder</p>}
    </main>
  );
}

export default WorkspaceContainer;
