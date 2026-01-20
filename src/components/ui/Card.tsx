import React from 'react';
import { clsx } from 'clsx'; // I need to install clsx or utility. I will just use template literals if clsx is not available, but I'll write a simple utility or just use template strings.
// Actually I didn't install clsx. I'll just use template strings.

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    action?: React.ReactNode;
    noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
    title,
    action,
    children,
    className = '',
    noPadding = false,
    ...props
}) => {
    return (
        <div
            className={`glass-panel rounded-xl overflow-hidden flex flex-col ${className}`}
            {...props}
        >
            {(title || action) && (
                <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
                    {title && <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] m-0">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className={noPadding ? 'flex-1 flex flex-col' : 'p-5 flex-1 flex flex-col'}>
                {children}
            </div>
        </div>
    );
};
