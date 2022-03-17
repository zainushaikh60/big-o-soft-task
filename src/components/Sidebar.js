import OptionWrapper from "../wrappers/OptionWrapper";

const Sidebar = ({
  mainBg,
  backgroundOne,
  backgroundTwo,
  backgroundThree,
  backgroundFour,
  onSetMainBg,
  onSetBackgroundOne,
  onSetBackgroundTwo,
  onSetBackgroundThree,
  onSetBackgroundFour,
}) => {
  return (
    <div className="h-full col-span-1 bg-gray-800 flex flex-col p-4 space-y-4">
      <OptionWrapper
        checked={backgroundOne}
        title="Background-1"
        onSetBackgroundOne={onSetBackgroundOne}
      />
      <OptionWrapper
        checked={backgroundTwo}
        title="Background-2"
        onSetBackgroundTwo={onSetBackgroundTwo}
      />
      <OptionWrapper
        checked={backgroundThree}
        title="Background-3"
        onSetBackgroundThree={onSetBackgroundThree}
      />
      <OptionWrapper
        checked={backgroundFour}
        title="Background-4"
        onSetBackgroundThree={onSetBackgroundFour}
      />
      <OptionWrapper
        checked={mainBg}
        title="Main Background"
        onSetMainBg={onSetMainBg}
      />
    </div>
  );
};

export default Sidebar;
