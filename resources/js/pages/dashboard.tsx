import { Head } from '@inertiajs/react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactionsCard from '@/components/reactions-card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
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
    reactionCounts
}: {
    totalPageViews: number;
    uniqueVisitors: number;
    reactionCounts: Record<string, number>;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <h1 className="text-2xl leading-loose font-medium">Thanks for taking the time to review my application</h1>
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
