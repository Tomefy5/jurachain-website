import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    icon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className, children, icon, ...props }, ref) => {
        // Styles de base
        const baseStyles: React.CSSProperties = {
            fontWeight: '700',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative',
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
        }

        // Styles par variant
        const variantStyles: Record<string, React.CSSProperties> = {
            primary: {
                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(0, 102, 204, 0.3)',
            },
            secondary: {
                background: 'linear-gradient(135deg, #F0F4FF 0%, #F8FAFF 100%)',
                color: '#0066CC',
                boxShadow: '0 2px 8px rgba(0, 102, 204, 0.1)',
                border: '1px solid rgba(0, 102, 204, 0.2)',
            },
            outline: {
                backgroundColor: 'transparent',
                color: '#0066CC',
                border: '2px solid rgba(0, 102, 204, 0.5)',
                boxShadow: '0 0 0 rgba(0, 102, 204, 0)',
            },
            ghost: {
                backgroundColor: 'transparent',
                color: '#0066CC',
                border: 'none',
            },
        }

        // Styles par size - AVEC PADDING
        const sizeStyles: Record<string, React.CSSProperties> = {
            sm: {
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                minHeight: '32px',
            },
            md: {
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                minHeight: '40px',
            },
            lg: {
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                minHeight: '48px',
            },
        }

        const currentVariant = variantStyles[variant] || variantStyles.primary
        const currentSize = sizeStyles[size] || sizeStyles.md

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
            const btn = e.currentTarget

            if (variant === 'primary') {
                btn.style.boxShadow = '0 12px 35px rgba(0, 102, 204, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                btn.style.transform = 'translateY(-2px)'
                btn.style.background = 'linear-gradient(135deg, #004999 0%, #003366 100%)'
            } else if (variant === 'secondary') {
                btn.style.backgroundColor = '#E8ECF8'
                btn.style.transform = 'translateY(-2px)'
                btn.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.15)'
            } else if (variant === 'outline') {
                btn.style.backgroundColor = 'rgba(0, 102, 204, 0.05)'
                btn.style.borderColor = '#0066CC'
                btn.style.transform = 'translateY(-2px)'
                btn.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.15)'
            } else if (variant === 'ghost') {
                btn.style.backgroundColor = 'rgba(0, 102, 204, 0.08)'
                btn.style.transform = 'translateY(-2px)'
            }
        }

        const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
            const btn = e.currentTarget

            if (variant === 'primary') {
                btn.style.background = 'linear-gradient(135deg, #0066CC 0%, #004999 100%)'
                btn.style.boxShadow = '0 4px 15px rgba(0, 102, 204, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                btn.style.transform = 'translateY(0)'
            } else if (variant === 'secondary') {
                btn.style.backgroundColor = '#F0F4FF'
                btn.style.transform = 'translateY(0)'
                btn.style.boxShadow = '0 2px 8px rgba(0, 102, 204, 0.1)'
            } else if (variant === 'outline') {
                btn.style.backgroundColor = 'transparent'
                btn.style.borderColor = 'rgba(0, 102, 204, 0.5)'
                btn.style.transform = 'translateY(0)'
                btn.style.boxShadow = '0 0 0 rgba(0, 102, 204, 0)'
            } else if (variant === 'ghost') {
                btn.style.backgroundColor = 'transparent'
                btn.style.transform = 'translateY(0)'
            }
        }

        const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
            const btn = e.currentTarget
            btn.style.transform = 'translateY(0) scale(0.98)'
        }

        const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
            const btn = e.currentTarget
            btn.style.transform = 'translateY(-2px) scale(1)'
        }

        return (
            <button
                ref={ref}
                style={{
                    ...baseStyles,
                    ...currentVariant,
                    ...currentSize,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={className}
                {...props}
            >
                {/* Shine Effect Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'left 0.5s ease',
                        pointerEvents: 'none',
                    }}
                    onMouseEnter={(e) => {
                        if (e.currentTarget.parentElement) {
                            (e.currentTarget as HTMLElement).style.left = '100%'
                        }
                    }}
                />

                {/* Content */}
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {icon && <span>{icon}</span>}
                    {children}
                </span>
            </button>
        )
    }
)

Button.displayName = 'Button'
