import React from 'react';

type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';
type Status = 'healthy' | 'degraded' | 'down' | 'active' | 'inactive';

interface BadgeProps {
    label: string;
    variant?: Severity | Status;
    outline?: boolean;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'info', outline = false, className = '' }) => {
    let colorVar = '--severity-info';

    switch (variant) {
        case 'critical': colorVar = '--severity-critical'; break;
        case 'high': colorVar = '--severity-high'; break;
        case 'medium': colorVar = '--severity-medium'; break;
        case 'low': colorVar = '--severity-low'; break;
        case 'healthy': colorVar = '--status-healthy'; break;
        case 'degraded': colorVar = '--status-degraded'; break;
        case 'down': colorVar = '--status-down'; break;
        case 'active': colorVar = '--status-healthy'; break;
        case 'inactive': colorVar = '--text-muted'; break;
    }

    // Premium look: Text color is the variable. Background is variable with 10-15% opacity. Flag border is slightly stronger.

    return (
        <span
            className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${className}`}
            style={{
                color: `var(${colorVar})`,
                backgroundColor: outline ? 'transparent' : `color-mix(in srgb, var(${colorVar}), transparent 90%)`,
                border: `1px solid color-mix(in srgb, var(${colorVar}), transparent ${outline ? '60%' : '85%'})`,
                boxShadow: outline ? 'none' : `0 0 10px -4px var(${colorVar})` // Subtle glow
            }}
        >
            {label}
        </span>
    );
};
