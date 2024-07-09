import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Hello Word is rendered", () => {
  // Arrange
  render(<Greetings />);

  // Act
  // ...nothing

  // Assert
  const helloWorldElemet = screen.getByText("Hello, World!");
  expect(helloWorldElemet).toBeInTheDocument();
});
