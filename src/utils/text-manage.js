// Emplace modifiers

/**
 * Cuts the text if it exceeds the specified lenght, otherwise, returns the same text
 * @param {string} text - the text to be cutted
 * @param {number} limit - character limit
 * @return {string}
 */
export const trimText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit);
  }

  return text;
};

// Markdown modifiers

/**
 * Makes the text bold as specification of markdown docs
 * @param {string} text - text to be bold
 * @returns {string}
 */
export const inflateText = (text) => `*${text}*`;

/**
 * Makes the text italic as specification of markdown docs
 * @param {string} text - text to be italic
 * @returns {string}
 */
export const italicText = (text) => `_${text}_`;
