import readlineSync from 'readline-sync';

export const greet = () => {
  const unswer = readlineSync.question('May I have your name? \n');
  const name = unswer.length > 0 ? `${unswer[0].toUpperCase()}${unswer.slice(1)}` : 'John DO';
  return name;
};
