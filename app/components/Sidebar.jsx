/**
 * Sidebar
 *
 * Presentational container for the application sidebar.
 * Contains no navigation items or business logic — those are
 * introduced in later milestones (see TASK-M1-001 out-of-scope list).
 *
 * Responsive behaviour (layout only, no interaction/toggle logic yet):
 * - Desktop (lg and up): permanent sidebar at full width.
 * - Tablet (md to lg): collapses to a narrow rail.
 * - Mobile (below md): hidden entirely.
 */
function Sidebar() {
  return (
    <aside className="hidden shrink-0 border-r border-slate-200 bg-slate-50 md:flex md:w-16 lg:w-64">
      <div className="flex w-full items-center justify-center px-4 py-6 lg:justify-start">
        <span className="hidden text-sm font-medium text-slate-600 lg:inline">
          Sidebar Placeholder
        </span>
        <span className="text-sm font-medium text-slate-600 lg:hidden">
          —
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
