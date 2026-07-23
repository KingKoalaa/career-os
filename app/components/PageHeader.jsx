/**
 * PageHeader
 *
 * Presentation-only header for the Home page. Static content only —
 * no props, routing, breadcrumbs, search, or actions. This component
 * represents the header region of the page layout structure; it is
 * not yet a configurable API (see ADR-pending: generalize only once
 * a second concrete page requires different header content).
 */
function PageHeader() {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold text-slate-900">Home</h1>
      <p className="mt-2 text-sm text-slate-500">Welcome to Career OS.</p>
    </header>
  );
}

export default PageHeader;