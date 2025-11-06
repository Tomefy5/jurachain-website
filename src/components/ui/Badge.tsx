import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, children, ...props }, ref) => (
        <span
            ref={ref}
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${className || ''}`}
            style={{
                backgroundColor: 'rgba(0, 102, 204, 0.1)',
                color: '#0066CC',
            }}
            {...props}
        >
            {children}
        </span>
    )
)

Badge.displayName = 'Badge'
