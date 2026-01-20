import { Head, Link, usePage } from '@inertiajs/react';

import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { dashboard, login } from '@/routes';
import { type SharedData } from '@/types';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-background">
                <AppLogo />
                {auth.user ? (
                    <Button asChild variant="outline" size="lg">
                        <Link href={dashboard()}>Dashboard</Link>
                    </Button>
                ) : (
                    <Button asChild variant="outline" size="lg">
                        <Link href={login()}>Log in</Link>
                    </Button>
                )}
                <div className="flex flex-col items-center gap-2">
                    <div>
                        Don't want to login? Checkout
                    </div>
                    <a href="https://andrewmonty.website" className="px-4 py-1 rounded-full border border-muted hover:underline">
                        andrewmonty.website
                    </a>
                </div>
            </div>
        </>
    );
}
