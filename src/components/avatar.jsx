import { AvatarPropTypes } from '../prop-types.d';

export default function Avatar({ imgsrc, state }) {
  console.log(state);
  return (
    <picture className="w-11 h-11">
      <img
        className="w-full h-full rounded-full border border-gray-300 p-[1px]"
        src={imgsrc}
        alt="user"
      />
    </picture>
  );
}

Avatar.propTypes = AvatarPropTypes;
