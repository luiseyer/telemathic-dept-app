import { IconButtonProps } from '../prop-types.d';

export default function IconButton({ children }) {
  return (
    <button
      type="button"
      className="rounded-md p-2 bg-gray-100 border-2 text-gray-600"
    >
      { children }
    </button>
  );
}

IconButton.propTypes = IconButtonProps;
