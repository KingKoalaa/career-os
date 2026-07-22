import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WorkspaceContainer from "../components/WorkspaceContainer";

/**
 * AppLayout
 *
 * Establishes the structural frame of Career OS: a fixed header
 * above a row containing the sidebar and the active workspace.
 *
 * This component is purely structural. It composes presentational
 * containers only — it does not own routing, navigation state, or
 * workspace data. `children` (the routed page, passed down from
 * RootLayout) is forwarded to WorkspaceContainer so existing routing
 * continues to render inside the frame established here, per ADR-001
 * (Replaceability First) and the Claude Engineering Guide's folder
 * responsibilities for app/.
 */
function AppLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <WorkspaceContainer>{children}</WorkspaceContainer>
      </div>
    </div>
  );
}

export default AppLayout;
