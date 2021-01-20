import { useEffect, useState } from "react";
import appStyles from "./App.module.css";
import ballStyles from "./ball.module.css";
import clsx from "clsx";
import BallImg from "./assets/ball.png";
import BlackBallImg from "./assets/blackBall.png";
import GlassesImg from "./assets/glasses.png";
import MachineLarge from "./assets/machineLarge.jpg";
import DoorLeft from "./assets/doorLeft.png";
import DoorRight from "./assets/doorRight.png";
import Loading from "./assets/loading.svg";
import GetTitle from "./assets/get_r.png";
import ResultImg from "./assets/results.png";
import Shining from "./assets/shining.png";

const showShadow = 1;
const showLighting = 1;
const showFallingBall = 1;
const NUM_OF_BALLS = 20;

function App() {
  const [stepAnimation, setStepAnimation] = useState(1);
  const [ballStatus, setBallStatus] = useState(1);

  // useEffect(() => {
  //   switch (stepAnimation) {
  //     case 0:
  //       setTimeout(() => {
  //         setStepAnimation(1);
  //       }, 2000);
  //       return;
  //     case 1:
  //       setTimeout(() => {
  //         setStepAnimation(2);
  //       }, 9000);
  //       return;
  //     case 2:
  //       setTimeout(() => {
  //         setStepAnimation(3);
  //       }, 6000);
  //       return;
  //     case 3:
  //       setTimeout(() => {
  //         setBallStatus(2);
  //       }, 4900);
  //       setTimeout(() => {
  //         setBallStatus(3);
  //       }, 4910);
  //       setTimeout(() => {
  //         setStepAnimation(4);
  //       }, 5500);
  //       return;
  //     default:
  //       return;
  //   }
  // }, [stepAnimation]);

  return (
    <div className={appStyles.App}>
      {stepAnimation === 0 && (
        <div className={appStyles.loading}>
          <img src={Loading} alt="" />
        </div>
      )}
      <div
        className={clsx(
          appStyles.wrapperShake,
          stepAnimation !== 1 && appStyles.hide
        )}
      >
        <div className={clsx(appStyles.containerShake, appStyles.shaking)}>
          {!!showLighting && <div className={appStyles.lightingOutShake} />}
          <img src={MachineLarge} alt="" className={appStyles.machineLarge} />
          <img src={GlassesImg} alt="" className={appStyles.glasses} />
          <div className={appStyles.doorBox}>
            <img src={DoorLeft} alt="" className={appStyles.doorLeft} />
            <img src={DoorRight} alt="" className={appStyles.doorRight} />
          </div>
          <div className={appStyles.boxLottie}>
            {Array.from({ length: NUM_OF_BALLS }, (_, i) => {
              return Math.random() > 0.9 ? (
                <div
                  key={i}
                  className={ballStyles.circleRoad}
                  style={{
                    zIndex: i + 20,
                    transform: `rotate(${Math.random() * 180}deg)`,
                    animationDirection: "normal",
                    animationDuration: `${Math.random() * 0.7 + 0.7}s`,
                  }}
                >
                  <img
                    src={Math.random() > 0.5 ? BallImg : BlackBallImg}
                    alt=""
                    className={ballStyles.ballRunOval}
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className={clsx(ballStyles.circleRoad)}
                  style={{
                    zIndex: i + 60,
                    animationDirection:
                      Math.random() > 0.8 ? "normal" : "reverse",
                    animationDuration: `${Math.random() * 0.6 + 0.35}s`,
                  }}
                >
                  <img
                    src={Math.random() > 0.5 ? BallImg : BlackBallImg}
                    alt=""
                    className={ballStyles.ballRunCircle}
                    style={{
                      top: `${Math.random() * 12 + 16.5}0%`,
                      left: `${Math.random() * 12 + 16.5}0%`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          appStyles.wrapperZoom,
          stepAnimation !== 2 && appStyles.hide
        )}
      >
        <div className={appStyles.background}>
          {!!showLighting && <div className={appStyles.lightingIn} />}
          {!!showLighting && <div className={appStyles.lightingOut} />}
          <div className={appStyles.box}>
            <img src={BallImg} alt="" className={ballStyles.rollingBall} />
            {!!showShadow && (
              <img
                src={BallImg}
                alt=""
                className={clsx(
                  ballStyles.rollingBall,
                  ballStyles.rollingBall1
                )}
              />
            )}
            {!!showShadow && (
              <img
                src={BallImg}
                alt=""
                className={clsx(
                  ballStyles.rollingBall,
                  ballStyles.rollingBall2
                )}
              />
            )}
            {!!showFallingBall && (
              <img src={BallImg} alt="" className={ballStyles.fallingBall} />
            )}
            {!!showShadow && (
              <img
                src={BallImg}
                alt=""
                className={clsx(
                  ballStyles.fallingBall,
                  ballStyles.fallingBall1
                )}
              />
            )}
            {!!showShadow && (
              <img
                src={BallImg}
                alt=""
                className={clsx(
                  ballStyles.fallingBall,
                  ballStyles.fallingBall2
                )}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          appStyles.backgroundOverview,
          stepAnimation !== 3 && appStyles.hide
        )}
      >
        {!!showLighting && <div className={appStyles.lightingIn} />}
        {!!showLighting && <div className={appStyles.gradientLighting} />}
        <div className={appStyles.floatBackground} />
        <img src={MachineLarge} alt="" className={appStyles.machineLarge} />
        <div
          className={clsx(
            appStyles.ballShowPriceContainer,
            ballStatus !== 1 && appStyles.invisible
          )}
        >
          <img src={BallImg} alt="" className={appStyles.ballShowPrice} />
        </div>
        <div
          className={clsx(
            appStyles.ballShowPriceOpenContainer,
            ballStatus !== 2 && appStyles.invisible
          )}
        >
          <div className={appStyles.ballShowPriceOpen} />
        </div>
        <div
          className={clsx(
            appStyles.ballShowPriceOpenLightingContainer,
            ballStatus !== 3 && appStyles.invisible
          )}
        >
          <div className={appStyles.ballShowPriceOpenLighting} />
        </div>
      </div>
      <div
        className={clsx(
          appStyles.wrapperResult,
          stepAnimation !== 4 && appStyles.hide
        )}
      >
        {!!showLighting && <div className={appStyles.lightingIn} />}
        <div className={appStyles.titleContainer}>
          <img src={GetTitle} alt="" className={appStyles.getTitle} />
        </div>
        <div className={appStyles.resultTickerContainer}>
          <img src={ResultImg} alt="" className={appStyles.imgResultTicker} />
        </div>
        <div className={appStyles.shiningContainer}>
          <img src={Shining} alt="" className={appStyles.shining} />
        </div>
      </div>
    </div>
  );
}

export default App;
