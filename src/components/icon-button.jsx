import { IconButtonProps } from '../prop-types.d';

export default function IconButton({ children, callback }) {
  return (
    <button
      type="button"
      className="rounded-md p-2 bg-gray-100 border-2 text-gray-600"
      onClick={callback}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = IconButtonProps;
