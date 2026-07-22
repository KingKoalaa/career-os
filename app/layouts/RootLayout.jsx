import { Outlet } from 'react-router-dom';
import AppLayout from './AppLayout';

// Shared shell for all routes. Renders the application frame introduced in
// TASK-M1-001 (header, sidebar, workspace); the routed page renders inside
// the workspace area via Outlet. Routing itself is unchanged — this file
// still only supplies the <Route element={...}> shell consumed by AppRouter.
export default function RootLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
