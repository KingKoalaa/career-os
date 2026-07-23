import { Link, useLocation } from 'react-router-dom';
import { navigationConfig } from '../config/navigation';
import NavigationItem from './NavigationItem';

/**
 * Sidebar
 *
 * Container for the application sidebar. Renders the permanent Career OS
 * workspace navigation from navigationConfig via NavigationItem.
 *
 * Only items with a `path` in navigationConfig are routable (TASK-M2-001).
 * Unrouted items render as inert, non-interactive entries until their own
 * workspace task lands.
 *
 * Responsive behaviour (layout only):
 * - Desktop (lg and up): permanent sidebar at full width, icon + label.
 * - Tablet (md to lg): collapses to a narrow icon-only rail.
 * - Mobile (below md): hidden entirely.
 */
function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden shrink-0 border-r border-slate-200 bg-slate-50 md:flex md:w-16 lg:w-64">
      <nav className="flex w-full flex-col gap-1 px-2 py-6 lg:px-4">
        {navigationConfig.map((item) => {
          const isActive = item.path && location.pathname === item.path;

          const navItem = (
            <NavigationItem
              icon={item.icon}
              label={item.label}
              isActive={isActive}
            />
          );

          return item.path ? (
            <Link key={item.id} to={item.path}>
              {navItem}
            </Link>
          ) : (
            <div key={item.id} aria-disabled="true">
              {navItem}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;