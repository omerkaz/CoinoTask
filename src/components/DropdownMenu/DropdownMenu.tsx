import React, { useState } from "react";
import { DropdownProps, Option } from "@src/types/index";
import styles from "./DropdownMenu.module.scss";
function DropdownMenu({ options, onSelect, width }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <select
      className={styles.select}
      style={{ width: `${width}` }}
      value={selectedOption?.value ?? ""}
      onChange={(e) => {
        const selected = options.find(
          // option.value should always be string because e.target.value is of type string
          (option) => option.value.toString() === e.target.value
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
