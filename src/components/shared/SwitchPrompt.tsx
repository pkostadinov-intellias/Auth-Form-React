import React from "react";

interface SwitchPromptProps {
  condition: boolean;
  onSwitch: () => void;
  trueText: string;
  falseText: string;
  buttonLabel: string;
  className?: string;
}

const SwitchPrompt: React.FC<SwitchPromptProps> = ({
  condition,
  onSwitch,
  trueText,
  falseText,
  buttonLabel,
  className = ""
}) => {
  return (
    <p className={`switch-prompt ${className}`}>
      {condition ? trueText : falseText}{" "}
      <button onClick={onSwitch} className="switch-button">
        {buttonLabel}
      </button>
    </p>
  );
};

export default SwitchPrompt;
