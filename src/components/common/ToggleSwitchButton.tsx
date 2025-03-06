interface ToggleSwitchButtonProps {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
  firstOption: string;
  secondOption: string;
}

export default function ToggleSwitchButton({
  isToggled,
  setIsToggled,
  firstOption,
  secondOption
}: ToggleSwitchButtonProps) {
  return (
    <div className="toggle-container">
      <div className="toggle-switch">
        <button
          onClick={() => setIsToggled(true)}
          className={`toggle-button ${isToggled ? "active" : ""}`}
        >
          {firstOption}
        </button>
        <button
          onClick={() => setIsToggled(false)}
          className={`toggle-button ${!isToggled ? "active" : ""}`}
        >
          {secondOption}
        </button>
      </div>
    </div>
  );
}
