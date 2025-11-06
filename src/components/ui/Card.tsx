import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    hover?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, children, ...props }, ref) => {
        const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
            if (hover) {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.borderColor = '#0066CC'
                e.currentTarget.style.transform = 'scale(1.05)'
            }
        }

        const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            if (hover) {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#E8E9ED'
                e.currentTarget.style.transform = 'scale(1)'
            }
        }

        return (
            <div
                ref={ref}
                className={`bg-white rounded-xl p-6 transition-all duration-300 cursor-default ${className || ''}`}
                style={{
                    border: '1px solid #E8E9ED',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                role="article"
                {...props}
            >
                {children}
            </div>
        )
    }
)

Card.displayName = 'Card'
