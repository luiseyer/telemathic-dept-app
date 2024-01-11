import { InputProps } from '../prop-types.d';

export default function SearchInput({ name, placeholder }) {
  return (
    <form>
      <input type="search" name={name} placeholder={placeholder} />
      <button type="submit">
        go
      </button>
    </form>
  );
}

SearchInput.propTypes = InputProps;
