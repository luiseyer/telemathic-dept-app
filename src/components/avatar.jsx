import { AvatarPropTypes } from '../prop-types.d';

export default function Avatar({ imgsrc, state }) {
  console.log(state);
  return (
    <>
      <picture className="w-10 h-10">
        <img
          className="w-full h-full rounded-full border border-gray-300 p-[1px]"
          src={imgsrc}
          alt="user"
        />
      </picture>
      <span className="w-4 h-4 bg-green-500 rounded-full mx-[-20px] mt-[22px] border" />
    </>
  );
}

Avatar.propTypes = AvatarPropTypes;
