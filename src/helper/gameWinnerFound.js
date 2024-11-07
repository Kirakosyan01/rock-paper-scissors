export const gameWinnerFound = (userChoice, botChoice) => {
  if (userChoice === botChoice) {
    return 0;
  }
  if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "scissors" && botChoice === "paper") ||
    (userChoice === "paper" && botChoice === "rock")
  ) {
    return 1;
  } else {
    return -1
  }
};
