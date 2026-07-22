/**
 * Header
 *
 * Presentational container for the application header.
 * Contains no business logic, navigation, or actions — those are
 * introduced in later milestones (see TASK-M1-001 out-of-scope list).
 */
function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center border-b border-slate-200 bg-white px-6">
      <span className="text-base font-semibold text-slate-900">
        Career OS
      </span>
    </header>
  );
}

export default Header;
