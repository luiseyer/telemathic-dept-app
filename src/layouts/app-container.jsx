import { LayoutTypeProps } from '../prop-types.d';

export default function AppContainer({ children }) {
  return (
    <div className="w-screen h-screen flex flex-row bg-gray-50">
      {children}
    </div>
  );
}

AppContainer.propTypes = LayoutTypeProps;
