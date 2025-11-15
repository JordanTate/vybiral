export function handleScrollClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) {
  e.preventDefault();
  const section = document.querySelector(`#${target}`);
  if (section) {
    // GSAP ScrollSmoother causes issues with native scrollIntoView
    const smoother = (window as any).ScrollSmoother?.get();

    if (smoother) {
      smoother.scrollTo(section, true, 'top top');
    } else {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
