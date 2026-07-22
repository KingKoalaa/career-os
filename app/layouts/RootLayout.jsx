import { Outlet } from 'react-router-dom';

// Shared shell for all routes. Kept intentionally minimal for the bootstrap
// milestone — future tasks will add navigation, header, and workspace chrome.
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Outlet />
    </div>
  );
}
