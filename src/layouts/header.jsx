import { LayoutTypeProps } from '../prop-types.d';

export default function Header({ children }) {
  return (
    <header className="p-4 flex gap-3">
      {children}
    </header>
  );
}

Header.propTypes = LayoutTypeProps;
