import React, { useEffect, useRef } from "react";
import styles from "./mainPage.module.css";
import RPS from "../../animation/animation.json";
import Lottie from "lottie-react";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actionEnterHandChoice, selectUser } from "../../store/user/action";
import { actionEnterBotChoice, selectBot } from "../../store/bot/action";
import { actionEnterGameCount, selectGame } from "../../store/game/action";
import { botRandomFunction } from "../../helper/botRandomFunction";
import { gameWinnerFound } from "../../helper/gameWinnerFound";

export default function MainPage() {
  const lottieRef = useRef();
  const botLottieRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const bot = useSelector(selectBot);
  const game = useSelector(selectGame);

  const handleUserHandChoice = (e) => {
    const userChoice = e.target.value;
    const botChoice = botRandomFunction();
    const handWinner = gameWinnerFound(userChoice, botChoice);
    dispatch(actionEnterHandChoice(userChoice));
    dispatch(actionEnterBotChoice(botChoice));
    console.log(userChoice, botChoice, handWinner);

    if (handWinner === 0) {
      dispatch(
        actionEnterGameCount({
          userWin: 0,
          botWin: 0,
        })
      );
    } else if (handWinner === 1) {
      dispatch(
        actionEnterGameCount({
          userWin: 1,
          botWin: 0,
        })
      );
    } else if (handWinner === -1) {
      dispatch(
        actionEnterGameCount({
          userWin: 0,
          botWin: 1,
        })
      );
    }
  };

  useEffect(() => {
    if (user.currentChoice === "rock") {
      lottieRef.current.goToAndPlay(0, true);
      setTimeout(() => lottieRef.current.pause(), 500);
    } else if (user.currentChoice === "paper") {
      lottieRef.current.goToAndPlay(40, true);
      setTimeout(() => lottieRef.current.pause(), 500);
    } else if (user.currentChoice === "scissors") {
      lottieRef.current.goToAndPlay(20, true);
      setTimeout(() => lottieRef.current.pause(), 500);
    }

    if (bot.currentChoice === "rock") {
      botLottieRef.current.goToAndPlay(0, true);
      setTimeout(() => botLottieRef.current.pause(), 500);
    } else if (bot.currentChoice === "paper") {
      botLottieRef.current.goToAndPlay(40, true);
      setTimeout(() => botLottieRef.current.pause(), 500);
    } else if (bot.currentChoice === "scissors") {
      botLottieRef.current.goToAndPlay(20, true);
      setTimeout(() => botLottieRef.current.pause(), 500);
    }
  }, [user, bot]);
  return (
    <div className={styles.container}>
      <div className={styles.userChoiceButtons}>
        <button
          className={styles.RockButton}
          value="rock"
          onClick={handleUserHandChoice}
        >
          <FaHandRock className={styles.handChoice} />
          Rock
        </button>
        <button
          className={styles.PaperButton}
          value="paper"
          onClick={handleUserHandChoice}
        >
          <FaHandPaper className={styles.handChoice} />
          Paper
        </button>
        <button
          className={styles.ScissorsButton}
          value="scissors"
          onClick={handleUserHandChoice}
        >
          <FaHandScissors className={styles.handChoice} />
          Scissors
        </button>
      </div>
      <h3>Games count : {game.AllGamesCount}</h3>
      <div className={styles.userAndBotAnimations}>
        <div className={styles.userChoiceAnimation}>
          <p>You : {game.userWinsCount}</p>
          <Lottie animationData={RPS} lottieRef={lottieRef} />
        </div>
        <div className={styles.animationDotted}>:</div>
        <div className={styles.userChoiceAnimation}>
          <p>Bot : {game.botWinsCount}</p>
          <Lottie animationData={RPS} lottieRef={botLottieRef} />
        </div>
      </div>
    </div>
  );
}
