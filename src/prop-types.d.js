import PropTypes from 'prop-types';

export const InputProps = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export const badgeProps = {
  state: PropTypes.number,
  text: PropTypes.string,
};

export const LayoutTypeProps = {
  children: PropTypes.node,
};

export const AvatarPropTypes = {
  state: PropTypes.number,
  imgsrc: PropTypes.string,
};

export const IconButtonProps = {
  children: PropTypes.node,
  callback: PropTypes.func,
};
