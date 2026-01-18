import { Breadcrumbs } from '@/components/breadcrumbs';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

import { NavUser } from './nav-user';
import { ThemeToggle } from './theme-toggle';
import { SidebarTrigger, useSidebar } from './ui/sidebar';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const { isMobile } = useSidebar();

    return (
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-sidebar-border px-6 transition-[width,height] ease-linear md:px-4">
            <div className="flex grow items-center gap-2">
                <SidebarTrigger className={isMobile ? 'shrink-0' : 'hidden'} />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <ThemeToggle />
            <NavUser />
        </header>
    );
}
