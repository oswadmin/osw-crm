import React, { ReactNode } from 'react';

interface PageSectionProps {
  sectionID?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string; // Add backgroundImage prop
  parallax?: boolean; // Add parallax prop
}

export function PageSection({
  sectionID = '',
  title,
  subtitle = ' ',
  children,
  className = '',
  backgroundImage,
  parallax = false,
}: PageSectionProps) {

  const sectionStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundAttachment: parallax ? 'fixed' : 'scroll', // Apply fixed for parallax
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',

  };

  //console.log("backgroundImage:", backgroundImage)

  return (
    <section
      className={`pt-12 pb-12 ${className}`}
      id={sectionID}
      style={sectionStyle}
    >
      <div className="container mx-auto px-1 ">
        <div className="text-center mb-1">
          {title && <h2 className="desktop:text-5xl text-4xl font-bold text-blue pb-2">{title}</h2>}
          {subtitle && <h4 className="phone:text-lg text-gray-600 pb-10">{subtitle}</h4>}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </section>
  );
}
