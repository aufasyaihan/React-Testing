import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greetings", () => {
  test("Hello Word is rendered", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElemet = screen.getByText("Hello, World!", {
      exact: false,
    }); // Get the element containing the text "Hello, World!" that is not case sensitive
    expect(helloWorldElemet).toBeInTheDocument(); // Assert that the element is in the document
  });

  test("Not Changed! is rendered", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText("Not Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Changed! is rendered after button click", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement); // Simulate a click event on the button

    // Assert
    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  });
});
