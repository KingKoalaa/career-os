import {
    Home,
    Briefcase,
    BookOpen,
    Rocket,
    Workflow,
    FolderOpen,
    Settings,
} from 'lucide-react';

/**
 * Navigation Configuration
 *
 * Single source of truth for Career OS sidebar workspaces.
 * Adding a future workspace only requires appending an entry here —
 * Sidebar.jsx and NavigationItem.jsx require no changes (ADR-001,
 * Replaceability First: UI stays stable while underlying data changes).
 *
 * Order is significant and must be preserved (TASK-M1-002).
 */
export const navigationConfig = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'automation', label: 'Automation', icon: Workflow },
    { id: 'assets', label: 'Assets', icon: FolderOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
];