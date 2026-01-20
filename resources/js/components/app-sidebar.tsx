import { Link } from '@inertiajs/react';
import { LayoutGrid, FileText, Settings } from 'lucide-react';

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { dashboard, resume } from '@/routes';
import { edit } from '@/routes/profile';
import { type NavItem } from '@/types';

import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Resume',
        href: resume(),
        icon: FileText,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Settings',
        href: edit(),
        icon: Settings,
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className="transition-width flex h-9 grow items-center overflow-hidden group-data-[collapsible=icon]:hidden">
                    <Link href={dashboard()} prefetch className="text-muted-foreground hover:text-foreground">
                        <AppLogo />
                    </Link>
                </div>
                <SidebarTrigger className="shrink-0 group-data-[collapsible=icon]:size-9 text-muted-foreground" />
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto border-t border-border" />
            </SidebarFooter>
        </Sidebar>
    );
}
