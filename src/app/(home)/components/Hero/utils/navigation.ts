export function handleScrollClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) {
  e.preventDefault();
  const section = document.querySelector(`#${target}`);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
