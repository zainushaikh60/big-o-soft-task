const OptionWrapper = ({
  checked,
  title,
  onSetMainBg,
  onSetBackgroundOne,
  onSetBackgroundTwo,
  onSetBackgroundThree,
  onSetBackgroundFour,
}) => {
  let onChange;

  if (onSetMainBg) onChange = onSetMainBg;
  if (onSetBackgroundOne) onChange = onSetBackgroundOne;
  if (onSetBackgroundTwo) onChange = onSetBackgroundTwo;
  if (onSetBackgroundThree) onChange = onSetBackgroundThree;
  if (onSetBackgroundFour) onChange = onSetBackgroundFour;

  return (
    <div className="flex items-center space-x-2 text-white">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{title}</span>
    </div>
  );
};

export default OptionWrapper;
