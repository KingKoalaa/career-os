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
 * Arranges PageHeader and PageContent only — no props, no children,
 * no slots. The structure is reusable; the implementation is
 * intentionally static for Milestone 1.
 */
function PageLayout() {
  return (
    <main className="flex h-full flex-col p-8">
      <PageHeader />
      <PageContent />
    </main>
  );
}

export default PageLayout;