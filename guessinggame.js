const timer = () => {
  setTimeout(number_game, 1000);
}; 

const number_game = () => {
  const number = parseInt(Math.round(Math.random() * 100));
  let xoxo = 0;
  let input;

  do {
    input = prompt('Please enter a number:');
    if (input === number) {
      alert(`Correct Number guess ${number}`);
      console.log(`Correct Number is guess ${number}`);
      break;
    }
    if (input > number) {
      alert(`Guess Number is too big that u've enter a this ${input}`);
      console.log(
        `Guess Number is too big that u've enter a this ${input} when actual number is ${number}`
      );
    } else {
      alert(`Guess Number is too short that u've enter a this ${input}`);
      console.log(
        `Guess Number is too short that u've enter a this ${input} when actual number is ${number}`
      );
    }
    xoxo++;
  } while (xoxo === 3);
};

timer();
