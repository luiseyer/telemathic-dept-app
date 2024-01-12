import { AvatarPropTypes } from '../prop-types.d';

export default function Avatar({ imgsrc, state }) {
  return (
    <picture className="relative w-11 h-11 block">
      <img
        className="w-full h-full rounded-full border border-gray-300 p-[1px]"
        src={imgsrc}
        alt="user"
      />
      {state === 1
        && <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full" />}
    </picture>
  );
}

Avatar.propTypes = AvatarPropTypes;
