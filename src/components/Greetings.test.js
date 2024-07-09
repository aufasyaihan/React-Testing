import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Hello Word is rendered", () => {
  // Arrange
  render(<Greetings />);

  // Act
  // ...nothing

  // Assert
  const helloWorldElemet = screen.getByText("Hello, World!", { exact: false }); // Get the element containing the text "Hello, World!" that is not case sensitive
  expect(helloWorldElemet).toBeInTheDocument(); // Assert that the element is in the document
});
