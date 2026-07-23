import PageLayout from '../../components/PageLayout';

// Home workspace. Uses the shared PageLayout framework (TASK-M2-002)
// instead of the earlier bootstrap-only markup, so Home now follows
// the same structure as every other workspace page.
export default function HomePage() {
  return (
    <PageLayout title="Home" subtitle="Welcome to Career OS.">
      Home workspace is under construction.
    </PageLayout>
  );
}