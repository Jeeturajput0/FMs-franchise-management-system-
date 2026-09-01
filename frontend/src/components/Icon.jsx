import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function Icon({ name, size = 24, className = '', ...props }) {
  const IconComponent = LucideIcons[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} className={className} {...props} />;
}
