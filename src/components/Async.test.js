import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    // Mock the fetch function to return a resolved promise with the specified data
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "First Post" }],
    });
    render(<Async />);

    // Act
    // ...nothing

    // Assert
    // Find all list items and assert that the length is not zero
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
