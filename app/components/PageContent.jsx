/**
 * PageContent
 *
 * Presentation-only content region for a workspace page. Renders
 * whatever `children` the page provides — no alignment logic beyond
 * the shared layout. Parameterized in TASK-M2-002 so it can serve
 * every workspace page rather than only Home.
 */
function PageContent({ children }) {
  return <section className="flex-1 text-slate-500">{children}</section>;
}

export default PageContent;