import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeStyles = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    };

    const variantStyles = {
        primary: {
            background: "var(--text-primary)",
            color: "var(--bg-primary)",
            border: "1px solid transparent"
        },
        secondary: {
            background: "var(--bg-card-hover)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-subtle)"
        },
        outline: {
            background: "transparent",
            color: "var(--text-primary)",
            border: "1px solid var(--border-medium)"
        },
        ghost: {
            background: "transparent",
            color: "var(--text-secondary)",
            border: "transparent"
        },
        danger: {
            background: "rgba(220, 38, 38, 0.2)",
            color: "#F87171",
            border: "1px solid rgba(220, 38, 38, 0.5)"
        }
    };

    const currentVariant = variantStyles[variant];

    return (
        <button
            className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            style={{
                ...currentVariant,
                gap: '0.5rem'
            }}
            {...props}
        >
            {icon}
            {children}
        </button>
    );
};
