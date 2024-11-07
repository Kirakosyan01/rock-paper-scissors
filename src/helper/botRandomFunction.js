export const botRandomFunction = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) {
            return "rock";
        } else if(randomNumber === 2) {
        return "paper";
    } else if(randomNumber === 3) {
        return "scissors";
    }

    // let rockCount = 0;
    // let paperCount = 0;
    // let scissorsCount = 0;
    // for (let i = 0; i <= 1000; i++) {
    //   const randomNumber = Math.floor(Math.random() * 3 + 1);
    //   if (randomNumber === 1) {
    //     rockCount += 1;
    //   } else if (randomNumber === 2) {
    //     paperCount += 1;
    //   } else if (randomNumber === 3) {
    //     scissorsCount += 1;
    //   }
    // }
    
    // if (rockCount >= paperCount && rockCount >= scissorsCount) {
    //   return "rock";
    // } else if (paperCount >= rockCount && paperCount >= scissorsCount) {
    //   return "paper";
    // } else {
    //   return "scissors";
    // }
    
}