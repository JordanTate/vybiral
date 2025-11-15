import gsap from 'gsap/dist/gsap';

export function handleScrollClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) {
  e.preventDefault();
  const section = document.querySelector(`#${target}`);
  if (section && typeof window !== 'undefined') {
    // GSAP ScrollSmoother causes issues with native scrollIntoView
    gsap.to(window, {
      scrollTo: { y: section, offsetY: 70 },
      duration: 0.5,
      ease: 'power2.out',
    });
  }
}
