import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "@src/components/Carousel/Carousel";
describe("Carousel elements renders correctly", () => {
  test("snapshot test", () => {
    // arrange
    jest.useFakeTimers();
    const images = [
      { id: 0, src: "image1.png" },
      { id: 1, src: "image2.png" },
    ];
    const componentTree = render(<Carousel images={images} />);
    expect(componentTree).toMatchSnapshot();
  });

  test("test image", () => {
    // arrange
    const images = [
      { id: 0, src: "image1.png" },
      { id: 1, src: "image2.png" },
    ];
    render(<Carousel images={images} />);
    const carouselImage = screen.getByTestId("carouselImage");
    expect(carouselImage).toBeInTheDocument();
  });
  test("should show the next image when the right button is clicked", () => {
    // arrange
    jest.useFakeTimers();
    const images = [
      { id: 0, src: "image1.png" },
      { id: 1, src: "image2.png" },
    ];
    render(<Carousel images={images} />);
    const rightButton = screen.getByTestId("carouselButtonRight");
    const image = screen.getByTestId("carouselImage");

    // act
    userEvent.click(rightButton);

    // assert
    expect(image).toHaveAttribute("src", "image2.png");
  });

  test("should show the previous image when the left button is clicked", () => {
    // arrange
    jest.useFakeTimers();
    const images = [
      { id: 0, src: "image1.png" },
      { id: 1, src: "image2.png" },
    ];
    render(<Carousel images={images} />);
    const leftButton = screen.getByTestId("carouselButtonLeft");
    const image = screen.getByTestId("carouselImage");

    // act
    userEvent.click(leftButton);

    // assert
    expect(image).toHaveAttribute("src", "image2.png");
  });
});
