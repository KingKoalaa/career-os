/**
 * NavigationItem
 *
 * Presentational row for a single sidebar navigation entry. Renders
 * an icon and label with hover and a static, visual-only active state.
 * Does not handle routing, clicks, or active-route detection — see
 * TASK-M1-002 out-of-scope list.
 */
function NavigationItem({ icon: Icon, label, isActive = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 lg:justify-start ${
        isActive
          ? 'bg-blue-50 text-blue-700'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden truncate lg:inline">{label}</span>
    </div>
  );
}

export default NavigationItem;