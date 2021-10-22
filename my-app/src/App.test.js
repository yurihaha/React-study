import { render, screen } from "@testing-library/react";
import App from "./App";

Highcharts.chart("container", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
