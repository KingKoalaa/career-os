/**
 * HeaderActions
 *
 * Presentational right-aligned section of the application header.
 * Reserves layout space for future functionality (search, notifications,
 * profile menu, etc.). Displays a static "Coming Soon" placeholder with
 * no click handlers, state, or business logic — see TASK-M1-003
 * out-of-scope list.
 */
function HeaderActions() {
  return (
    <div className="flex flex-1 items-center justify-end">
      <span className="text-sm text-slate-400">Coming Soon</span>
    </div>
  );
}

export default HeaderActions;