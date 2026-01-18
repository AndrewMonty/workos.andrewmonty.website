'use client';

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';

import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';

import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function ThemeToggle({ className }: { className?: string }) {
  const { appearance, updateAppearance } = useAppearance();
  const currentAppearance = appearance || 'system';

  return (
    <TooltipProvider>
      <div className={cn(className, 'inline-flex items-center gap-1 rounded-full border border-sidebar-border p-1')}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => updateAppearance('light')}
              className={`size-6 rounded-full ${currentAppearance === 'light' ? 'bg-sidebar-accent' : ''}`}
              aria-label="Light mode">
              <SunIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>light theme</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => updateAppearance('system')}
              className={`size-6 rounded-full ${currentAppearance === 'system' ? 'bg-sidebar-accent' : ''}`}
              aria-label="System mode">
              <MonitorIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>system theme</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => updateAppearance('dark')}
              className={`size-6 rounded-full ${currentAppearance === 'dark' ? 'bg-sidebar-accent' : ''}`}
              aria-label="Dark mode">
              <MoonIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>dark theme</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
