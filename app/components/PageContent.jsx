/**
 * PageContent
 *
 * Presentation-only content region for the Home page. Static content
 * only — no props, no children, no alignment logic. Represents the
 * reusable content region structurally; future pages will replace
 * this implementation rather than configure it.
 */
function PageContent() {
  return (
    <section className="flex-1 text-slate-500">Home workspace is under construction.</section>
  );
}

export default PageContent;