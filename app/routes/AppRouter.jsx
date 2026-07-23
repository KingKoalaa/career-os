import { Route, Routes } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/Home';
import CareerPage from '../pages/Career';
import KnowledgePage from '../pages/Knowledge';
import ProjectsPage from '../pages/Projects';
import AutomationPage from '../pages/Automation';
import AssetsPage from '../pages/Assets';
import SettingsPage from '../pages/Settings';

// Central route table. New pages register a <Route> here rather than
// introducing an alternative routing mechanism.
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}