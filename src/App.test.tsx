import { render, screen } from "@testing-library/react";
import App from "./App";

test("Tip calculator", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tip calculator/i);
  expect(linkElement).toBeInTheDocument();
});
