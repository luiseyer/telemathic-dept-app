import { LayoutTypeProps } from '../prop-types.d';

export default function VerticalNavigation({ children }) {
  return (
    <nav className="px-2 flex flex-col gap-4 text-white">
      {children}
    </nav>
  );
}

VerticalNavigation.propTypes = LayoutTypeProps;
