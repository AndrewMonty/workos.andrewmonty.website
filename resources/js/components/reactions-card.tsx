import axios from 'axios';
import { useState } from 'react';

import { store } from '@/actions/App/Http/Controllers/ReactionController';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const emojis = ['👍', '❤️', '🎉', '🔥'];

export default function ReactionsCard({ reactionCounts }: { reactionCounts: Record<string, number> }) {
    const [counts, setCounts] = useState(reactionCounts);

    const handleReaction = async (emoji: string) => {
        setCounts((prev) => ({
            ...prev,
            [emoji]: (prev[emoji] || 0) + 1,
        }));

        await axios.post(store().url, { emoji });
    };

    return (
        <Card className="aspect-video">
            <CardHeader>
                <CardTitle>Reactions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-4 gap-2">
                    {emojis.map((emoji) => (
                        <div key={emoji} className="flex flex-col items-center">
                            <Button variant="ghost" onClick={() => handleReaction(emoji)} className="size-12 flex items-center justify-center">
                                <span className="text-2xl">{emoji}</span>
                            </Button>
                            <div className="mt-1 text-sm">{counts[emoji] || 0}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
