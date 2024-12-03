import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success';
  glowOnHover?: boolean;
}

export const GlowingCard = ({ 
  className, 
  variant = 'primary', 
  glowOnHover = true,
  children,
  ...props 
}: GlowingCardProps) => {
  const glowColors = {
    primary: 'before:bg-blue-500/20 hover:before:bg-blue-500/40',
    secondary: 'before:bg-purple-500/20 hover:before:bg-purple-500/40',
    success: 'before:bg-green-500/20 hover:before:bg-green-500/40',
  };

  return (
    <motion.div
      whileHover={glowOnHover ? { scale: 1.02 } : undefined}
      className={clsx(
        'relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-xl',
        'before:absolute before:inset-0 before:-z-10 before:transform before:transition',
        'border border-white/20',
        glowOnHover && glowColors[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};