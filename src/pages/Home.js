import { useState } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [mainBg, setMainBg] = useState(true);
  const [backgroundOne, setBackgroundOne] = useState(false);
  const [backgroundTwo, setBackgroundTwo] = useState(false);
  const [backgroundThree, setBackgroundThree] = useState(false);
  const [backgroundFour, setBackgroundFour] = useState(false);

  const onSetMainBg = () => {
    setMainBg((prev) => !prev);
  };

  const onSetBackgroundOne = () => {
    setBackgroundOne((prev) => !prev);
  };

  const onSetBackgroundTwo = () => {
    setBackgroundTwo((prev) => !prev);
  };

  const onSetBackgroundThree = () => {
    setBackgroundThree((prev) => !prev);
  };

  const onSetBackgroundFour = () => {
    setBackgroundFour((prev) => !prev);
  };

  return (
    <div className="h-full w-full grid grid-cols-4">
      <Sidebar
        mainBg={mainBg}
        backgroundOne={backgroundOne}
        backgroundTwo={backgroundTwo}
        backgroundThree={backgroundThree}
        backgroundFour={backgroundFour}
        onSetMainBg={onSetMainBg}
        onSetBackgroundOne={onSetBackgroundOne}
        onSetBackgroundTwo={onSetBackgroundTwo}
        onSetBackgroundThree={onSetBackgroundThree}
        onSetBackgroundFour={onSetBackgroundFour}
      />
      <Main
        mainBg={mainBg}
        backgroundOne={backgroundOne}
        backgroundTwo={backgroundTwo}
        backgroundThree={backgroundThree}
        backgroundFour={backgroundFour}
      />
    </div>
  );
};

export default Home;
