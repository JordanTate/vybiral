import { useRef } from 'react';

export function useNav() {
  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      label: 'Get in Touch',
      href: '/contact',
      icon: 'contact',
    },
  ];

  const navRef = useRef<HTMLElement>(null);
  const navBackgroundRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = event.currentTarget;
    const navBackground = navBackgroundRef.current;

    if (!navRef.current || !navBackground) return;
    if (window.innerWidth >= 768) {
      const rect = target.getBoundingClientRect();
      navBackground.style.transform = `translateX(${
        rect.left -
        target.offsetParent!.getBoundingClientRect().left +
        window.scrollX
      }px)`;
      navBackground.style.opacity = '1';
      navBackground.style.width = `${rect.width}px`;
      navBackground.style.height = `${rect.height}px`;
    }
  }

  function handleMouseLeave() {
    const navBackground = navBackgroundRef.current;
    if (!navBackground) return;
    navBackground.style.opacity = '0';
  }

  return {
    navItems,
    navRef,
    navBackgroundRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
