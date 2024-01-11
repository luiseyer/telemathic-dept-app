import { IconSearch } from '@tabler/icons-react';
import { InputProps } from '../prop-types.d';

export default function SearchInput({ name, placeholder }) {
  return (
    <>
      <p className="text-[#0000009a] p-2">
        <IconSearch size="1.5em" />
      </p>
      <input
        className="rounded-md p-2 font-[16px] text-[#0000009a] outline-none bg-inherit w-full"
        type="search"
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

SearchInput.propTypes = InputProps;
