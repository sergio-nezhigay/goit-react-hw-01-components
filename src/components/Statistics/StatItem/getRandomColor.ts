interface IgetRandomColor {
  backgroundColor: string;
  color: string;
}

const getRandomColor = (): IgetRandomColor => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 30) + 35;
  const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const textColor = lightness > 50 ? '#000000' : '#ffffff';
  return { backgroundColor, color: textColor };
};

export default getRandomColor;
