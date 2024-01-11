// Emplace modifiers
export const trimText = (text, limit) => text.substr(0, limit);

// Markdown modifiers
export const inflateText = (text) => `*${text}*`;
export const italicText = (text) => `_${text}_`;
