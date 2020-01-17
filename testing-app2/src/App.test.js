import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("displays balls", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/balls/i);
});

test("displays strikes", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/strikes/i);
});

test("displays hit", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

test("displays fouls", () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});

test("it renders without crashing", () => {
  render(<App />);
});