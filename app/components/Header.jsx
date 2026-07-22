import HeaderActions from "./HeaderActions";
import HeaderBrand from "./HeaderBrand";
import HeaderWorkspace from "./HeaderWorkspace";

/**
 * Header
 *
 * Presentational container for the application header. Establishes the
 * permanent three-section structural framework (brand / workspace /
 * actions) that future Career OS functionality will build on top of.
 * Composes HeaderBrand, HeaderWorkspace, and HeaderActions — it owns no
 * business logic, routing, or interactive behaviour itself (see
 * TASK-M1-003 out-of-scope list).
 *
 * The left and right sections share equal flex space so the center
 * workspace section stays visually centered regardless of brand or
 * actions content width.
 */
function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center border-b border-slate-200 bg-white px-6">
      <HeaderBrand />
      <HeaderWorkspace />
      <HeaderActions />
    </header>
  );
}

export default Header;