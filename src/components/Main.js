import MainBG from "../assets/main-bg.jpeg";
import Layer from "./Layer";

const Main = ({
  mainBg,
  backgroundOne,
  backgroundTwo,
  backgroundThree,
  backgroundFour,
}) => {
  const styles = {
    backgroundImage: `url(${MainBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <main
      className={`h-full col-span-3 flex items-center justify-center relative`}
      style={mainBg ? styles : {}}
    >
      {backgroundOne && <Layer src="/backgrounds/bg-1.png" alt="heat-red" />}
      {backgroundTwo && <Layer src="/backgrounds/bg-2.png" alt="heat-yellow" />}
      {backgroundThree && (
        <Layer src="/backgrounds/bg-3.png" alt="heat-green" />
      )}
      {backgroundFour && (
        <Layer src="/backgrounds/bg-4.png" alt="heat-red-alt" />
      )}
    </main>
  );
};

export default Main;
