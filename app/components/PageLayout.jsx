import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';

/**
 * PageLayout
 *
 * Composes the page structure shared across Career OS:
 *
 *   PageLayout
 *   ├── PageHeader
 *   └── PageContent
 *
 * Accepts `title` and `subtitle` (forwarded to PageHeader) and
 * `children` (forwarded to PageContent) so every workspace page can
 * reuse this same structure (TASK-M2-002). The structure itself is
 * unchanged from Milestone 1 — only enough of an API was added to
 * support multiple pages.
 */
function PageLayout({ title, subtitle, children }) {
  return (
    <main className="flex h-full flex-col p-8">
      <PageHeader title={title} subtitle={subtitle} />
      <PageContent>{children}</PageContent>
    </main>
  );
}

export default PageLayout;