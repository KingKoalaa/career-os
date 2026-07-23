/**
 * PageHeader
 *
 * Presentation-only header for a workspace page. Renders the given
 * `title` and `subtitle` — no routing, breadcrumbs, search, or
 * actions. Parameterized in TASK-M2-002 so it can serve every
 * workspace page rather than only Home.
 */
function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </header>
  );
}

export default PageHeader;