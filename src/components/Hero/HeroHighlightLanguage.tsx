import React from 'react';

type HeroHighlightLanguageProps = {
    children: React.ReactNode,
};

const HeroHighlightLanguage: React.FC<HeroHighlightLanguageProps> = ( { children } ) => {
  return (
    <span className='text-primary-app opacity-80'>
      {children}
    </span>
  );
};

export default HeroHighlightLanguage;