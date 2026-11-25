import { FileText, FolderOpen } from 'lucide-react';
import { useRef } from 'react';
import { APPLE_EASE, gsap, prefersReducedMotion, useGSAP } from '@/animations/gsapConfig';
import { MacWindow } from '@/components/devices/MacWindow';
import type { ZipTreeNode } from '@/types';
import { cn } from '@/utils/cn';

interface AnimatedFileExplorerProps {
  nodes: readonly ZipTreeNode[];
  windowTitle: string;
  badge?: string;
}

function TreeRows({ nodes, depth = 0 }: { nodes: readonly ZipTreeNode[]; depth?: number }) {
  return (
    <ul className="space-y-1">
      {nodes.map((node) => (
        <li key={`${depth}-${node.name}`}>
          <div
            data-tree-row
            style={{ paddingLeft: `${depth * 18 + 8}px` }}
            className={cn(
              'flex items-center justify-between gap-3 rounded-[8px] py-1.5 pr-3 font-mono text-xs transition-colors hover:bg-[var(--bs-surface-subtle)]',
              node.kind === 'folder'
                ? 'font-semibold text-[var(--bs-text-primary)]'
                : 'text-[var(--bs-text-muted)]',
            )}
          >
            <span className="flex min-w-0 items-center gap-2 truncate">
              {node.kind === 'folder' ? (
                <FolderOpen
                  className="h-3.5 w-3.5 shrink-0 text-[var(--bs-accent-text)]"
                  aria-hidden="true"
                />
              ) : (
                <FileText className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
              )}
              <span className="truncate">{node.name}</span>
            </span>

            {node.badge && (
              <span className="shrink-0 rounded-full bg-[var(--bs-badge-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--bs-badge-text)]">
                {node.badge}
              </span>
            )}
          </div>

          {node.children && node.children.length > 0 && (
            <TreeRows nodes={node.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function AnimatedFileExplorer({
  nodes,
  windowTitle,
  badge = 'Finder',
}: AnimatedFileExplorerProps) {
  const treeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = treeRef.current;
      if (!container || prefersReducedMotion()) {
        return;
      }

      const rows = container.querySelectorAll('[data-tree-row]');
      if (rows.length === 0) {
        return;
      }

      gsap.fromTo(
        rows,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.32,
          stagger: 0.028,
          ease: APPLE_EASE,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: container,
            start: 'top 86%',
            once: true,
          },
        },
      );
    },
    { scope: treeRef, dependencies: [nodes] },
  );

  return (
    <MacWindow title={windowTitle} badge={badge}>
      <div ref={treeRef} className="bg-[var(--bs-surface)] p-4 sm:p-5">
        <TreeRows nodes={nodes} />
      </div>
    </MacWindow>
  );
}
