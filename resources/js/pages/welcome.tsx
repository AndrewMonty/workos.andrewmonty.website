import { Head, Link, usePage } from '@inertiajs/react';

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
            <div className="flex min-h-screen flex-col items-center justify-center bg-background">
                {auth.user ? (
                    <Button asChild variant="outline" size="lg">
                        <Link href={dashboard()}>Dashboard</Link>
                    </Button>
                ) : (
                    <Button asChild variant="outline" size="lg">
                        <Link href={login()}>Log in</Link>
                    </Button>
                )}
            </div>
        </>
    );
}
