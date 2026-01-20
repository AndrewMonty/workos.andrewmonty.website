import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { resume } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Resume',
        href: resume().url,
    },
];

export default function Resume() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Resume" />
            <div className="p-6 mx-auto prose prose-zinc dark:prose-invert">
                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2026 <span className="text-muted-foreground">=&gt;</span> WorkOS Maybe?
                </h3>

                <p>
                    First discovered WorkOS with the new Laravel starter kits, and was intrigued. Even more intrigued to learn it's the people behind Radix UI!
                    I've always worked on quite small teams, but would relish the opportunity to work with and learn from a large team of like-minded professionals.
                </p>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2024 <span className="text-muted-foreground">=&gt;</span> Amplinks
                </h3>
                <p>
                    Improving and adding new features to a SaaS app for managing service business (HVAC, Plumbing, Etc.). Working on everything from
                    new marketing pages to CI/CD pipelines.
                </p>
                <ul>
                    <li>Fixed data integrity/security issues</li>
                    <li>Custom logo design and branding</li>
                    <li>Redesigned website and application UI</li>
                    <li>Increased page load speeds dramatically</li>
                    <li>Improved accessibility</li>
                </ul>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2020 <span className="text-muted-foreground">=&gt;</span> JLE Industries
                </h3>
                <p>
                    Converted a legacy PHP app to a modern Laravel stack. Built new features to support operating a growing fleet of flatbed trucks.
                </p>
                <ul>
                    <li>Created timeline view to make sense of a mess of data from decades old systems</li>
                    <li>Built mobile-optimized features for drivers to view assigned jobs, request new loads, and communicate with dispatch</li>
                    <li>Overhauled public website with a fresh design and built-in publishing system.</li>
                </ul>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2010 <span className="text-muted-foreground">=&gt;</span> NorAm International
                </h3>
                <p>
                    Started in the warehouse inspecting, grading, and packaging used textbooks, DVDs, video games, and consumer electronics for
                    resale. Helped set-up operations and train new hires at new facilities in Germany and France.
                </p>
                <p>
                    Learned a lot of SQL, and cut my teeth on PHP and Laravel to contribute to a small team building and maintaining in-house web
                    apps. Built some really cool things from inventory management tools to order ingestion APIs. Favorite project was working on a
                    rudimentary SSO system for users to log in to multiple separate Laravel apps with one login, using JWT as an identity token.
                </p>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2009 <span className="text-muted-foreground">=&gt;</span> Manchester Community College
                </h3>
                <p>
                    Completed Web Design Certificate. Learned basics of HTML, JavaScript
                    <small className="text-muted-foreground">&hellip; and Macromedia Flash</small>
                </p>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2009 <span className="text-muted-foreground">=&gt;</span> Manchester Community College
                </h3>
                <p>
                    Completed Associates Degree in Graphic Design. Studied color theory, typography, print and package design. Learned how to use
                    Adobe Creative Suite tools.
                </p>

                <h3 className="sticky top-0 mb-0 bg-background py-2.5 font-mono text-base">
                    2008 <span className="text-muted-foreground">=&gt;</span> J.P. Sercel Associates
                </h3>
                <p>Completed an internship where I Designed product catalog, banners, and other promotional material for trade-shows.</p>
            </div>
        </AppLayout>
    );
}
