import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover';
}

export const Card = ({ className, variant = 'default', children, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={variant === 'hover' ? { scale: 1.02 } : undefined}
      className={clsx(
        'rounded-lg bg-white p-6 shadow-md',
        {
          'transition-transform hover:shadow-lg': variant === 'hover',
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};