import { navigationConfig } from '../config/navigation';
import NavigationItem from './NavigationItem';

/**
 * Sidebar
 *
 * Presentational container for the application sidebar. Renders the
 * permanent Career OS workspace navigation from navigationConfig via
 * NavigationItem. Contains no routing, click handling, or active-route
 * detection — see TASK-M1-002 out-of-scope list.
 *
 * Responsive behaviour (layout only, no interaction/toggle logic yet):
 * - Desktop (lg and up): permanent sidebar at full width, icon + label.
 * - Tablet (md to lg): collapses to a narrow icon-only rail.
 * - Mobile (below md): hidden entirely.
 */
function Sidebar() {
  return (
    <aside className="hidden shrink-0 border-r border-slate-200 bg-slate-50 md:flex md:w-16 lg:w-64">
      <nav className="flex w-full flex-col gap-1 px-2 py-6 lg:px-4">
        {navigationConfig.map((item, index) => (
          <NavigationItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={index === 0}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;