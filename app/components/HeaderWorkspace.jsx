/**
 * HeaderWorkspace
 *
 * Presentational center section of the application header. Displays a
 * static placeholder workspace title ("Home"). This is not derived from
 * routing and holds no state — routing integration is out of scope for
 * TASK-M1-003 and will be introduced in a future milestone.
 */
function HeaderWorkspace() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <span className="text-sm font-medium text-slate-600">Home</span>
    </div>
  );
}

export default HeaderWorkspace;