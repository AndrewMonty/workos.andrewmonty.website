import { Head, Link } from '@inertiajs/react';

import ReactionsCard from '@/components/reactions-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard, resume } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({
    totalPageViews,
    uniqueVisitors,
    reactionCounts,
}: {
    totalPageViews: number;
    uniqueVisitors: number;
    reactionCounts: Record<string, number>;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                 <section className="prose proze-zinc dark:prose-invert">
                <h1>Welcome</h1>
                    <p>
                        If I'm going to apply to WorkOS, I should at least try using it first! This site was built from the Laravel React starter kit, with WorkOS authentication.
                    </p>
                    <p>
                        View <a href="https://github.com/AndrewMonty/workos.andrewmonty.website">the source</a> for this site.
                    </p>
                    <p>
                        Check out my <Link href={resume().url} prefetch>resume</Link>.
                    </p>
                    <p>
                        Back to <a href="https://andrewmonty.website">my public site</a>.
                    </p>
                </section>

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card className="aspect-video">
                        <CardHeader>
                            <CardTitle>Page Views</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">{totalPageViews.toLocaleString()}</div>
                        </CardContent>
                    </Card>
                    <Card className="aspect-video">
                        <CardHeader>
                            <CardTitle>Unique Visitors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">{uniqueVisitors.toLocaleString()}</div>
                        </CardContent>
                    </Card>
                    <ReactionsCard reactionCounts={reactionCounts} />
                </div>

            </div>
        </AppLayout>
    );
}
