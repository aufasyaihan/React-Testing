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

  test("good to see you is rendered", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
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

  test("good to see you is not rendered if the button was clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement); // Simulate a click event on the button

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull(); // Assert that the element is not in the document
  });
});
