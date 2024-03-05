export const textColorMap = {
  red: 'text-red-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  white: 'text-white',
  yellow: 'text-yellow-300',
};

export const backgroundColorMap = {
  red: 'bg-red-400',
  green: 'bg-green-400',
  blue: 'bg-blue-400',
  white: 'bg-white',
  yellow: 'bg-yellow-300',
};

export const emojiMap = {
  thumbsup: '👍',
  party: '🎉',
  handsup: '🙌🏻',
};

export const colorEnum = ['red', 'green', 'blue', 'white', 'yellow'] as const;
export const emojiEnum = ['thumbsup', 'party', 'handsup'] as const;

export type KudoStyle = {
  backgroundColor: keyof typeof backgroundColorMap;
  textColor: keyof typeof textColorMap;
  emoji: keyof typeof emojiMap;
};
