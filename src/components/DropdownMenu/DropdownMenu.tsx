import React, { useState } from "react";
export type Option = {
  value: string | number;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onSelect?: (option: Option) => void;
};

function DropdownMenu({ options, onSelect }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <select
      value={selectedOption?.value ?? ""}
      onChange={(e) => {
        const selected = options.find(
          (option) => option.value === e.target.value
        );
        if (selected) {
          handleSelect(selected);
        }
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default DropdownMenu;
