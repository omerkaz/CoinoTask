import { render, screen } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";

describe("DropdownMenu elements renders correctly", () => {
  test("snapshot test", () => {
    // arrange
    const options = [
      { value: 0, label: "test" },
      { value: 1, label: "test" },
      { value: 2, label: "test 3" },
    ];
    const callBackMock = jest.fn();
    const componentTree = render(
      <DropdownMenu
        onSelect={callBackMock}
        width={"150px" as React.CSSProperties}
        options={options}
      />
    );

    // assert
    expect(componentTree).toMatchSnapshot();
  });

  test("the correct number of options are being rendered in the dropdown menu.", () => {
    // Arrange
    const options = [
      { value: 0, label: "test 1" },
      { value: 1, label: "test 2" },
      { value: 2, label: "test 3" },
    ];
    const callBackMock = jest.fn();

    // Act
    render(
      <DropdownMenu
        onSelect={callBackMock}
        width={"150px" as React.CSSProperties}
        options={options}
      />
    );

    // Assert
    const optionsList = screen.getAllByRole("option");
    expect(optionsList.length).toBe(options.length);
  });

  test("dropdown menu options have the correct label", () => {
    // Arrange
    const options = [
      { value: 0, label: "test 1" },
      { value: 1, label: "test 2" },
      { value: 2, label: "test 3" },
    ];
    const callBackMock = jest.fn();

    // Act
    render(
      <DropdownMenu
        onSelect={callBackMock}
        width={"150px" as React.CSSProperties}
        options={options}
      />
    );

    // Assert
    const optionsList = screen.getAllByRole("option");
    optionsList.forEach((option, index) => {
      expect(option).toHaveTextContent(options[index].label);
    });
  });

  test("dropdown menu options have correct labels.", () => {
    // Arrange
    const options = [
      { value: 0, label: "test 1" },
      { value: 1, label: "test 2" },
      { value: 2, label: "test 3" },
    ];
    const callBackMock = jest.fn();

    // Act
    render(
      <DropdownMenu
        onSelect={callBackMock}
        width={"150px" as React.CSSProperties}
        options={options}
      />
    );

    // Assert
    const optionsList = screen.getAllByRole("option");
    optionsList.forEach((option, index) => {
      expect(option).toHaveTextContent(options[index].label);
    });
  });
});
