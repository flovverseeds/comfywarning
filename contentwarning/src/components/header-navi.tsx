'use client'
import React, { useEffect, useState } from 'react';
import { getDictionary } from 'p/get-dictionary';
interface HeaderProps {
  navi: [string,string];
  language: string;
}

const HeaderNAvi = ({ navi, language }: HeaderProps) => {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentLocale, setCurrentLocale] = useState<string>('en');
  const [naviText, setNaviText] = useState<string>(navi[0]);
  
  useEffect(() => {
    const url = window.location.href;
    setCurrentUrl(url);
    setCurrentLocale(getCurrentLocale());
    setNaviText(getNaviText(url));
  }, []);

  function getCurrentLocale(): string {
    const path = window.location.pathname;
    const localeMatch = path.match(/^\/(en|ja)(\/|$)/);
    return localeMatch ? localeMatch[1] : 'en'; // Default to 'en' if no match is found
  }

  function getLocalizedLink(path: string, newLocale: string): string {
    const pathWithoutLocale = path.replace(/^\/(en|ja)(\/|$)/, '/'); // Remove current locale from path
    return `/${newLocale}${pathWithoutLocale}`; // Add the new locale
  }
  
  function getNaviText(url: string): string {
    const path = new URL(url).pathname;
    if (path === '/en' || path === '/ja') {
      return navi[1];
    } else if (path === '/en/monster' || path === '/ja/monster') {
      return navi[0];
    }
    return navi[0];
  }

  function naviLink(): string {
    const path = window.location.pathname;
    if (path === '/en' || path === '/ja') {
      return `/${currentLocale}/monster`; // Go to the /monster page
    } else if (path.includes('/monster')) {
      return path.replace('/monster', ''); // Remove /monster from the path
    }
    return path; // Default to current path
  }

  function languageLink(): string {
    if (currentLocale === 'en') {
      return getLocalizedLink(window.location.pathname, 'ja');
    } else if (currentLocale === 'ja') {
      return getLocalizedLink(window.location.pathname, 'en');
    } else {
      return getLocalizedLink(window.location.pathname, 'en');
    }
  }

  if (!currentUrl) {
    return null; // Return null or a loading indicator while the client-side state is being set
  }

  return (
    <section>
      <div className="relative h-[100px] md:h-[200px] w-full flex justify-between">
        {/* Left Navigation Button */}
        <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
          {/* Clickable Area for Left Navigation */}
          <a
            href={naviLink()}
            className="absolute inset-0 cursor-pointer bg-minty hover:bg-noir text-noir hover:text-minty"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            }}>
            <p className="absolute text-center top-1/4 right-1/3 left-1 nostalgic-text text-nowrap rotate-[315deg] z-10 text-[16px] md:text-[30px] font-extrabold pointer-events-none">
              {naviText}
          </p>
          </a>
        </div>
        {/* Right Navigation Button */}
        <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
          {/* Clickable Area for Right Navigation */}
          <a
            href={languageLink()}
            className="absolute inset-0 cursor-pointer bg-minty hover:bg-noir text-noir hover:text-minty"
            style={{
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }}>
            <p className="absolute text-center top-1/4 left-1/3 right-1 nostalgic-text text-nowrap rotate-[45deg] z-10 text-[16px] md:text-[30px] font-extrabold pointer-events-none">
              {language}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeaderNAvi;
