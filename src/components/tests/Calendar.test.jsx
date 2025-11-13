
import { render, screen } from "@testing-library/react";
import Calendar from "../Calendar";

test("renders October 2022 with 3rd highlighted", () => {
  render(<Calendar date={new Date(2022, 9, 3)} />);

  // header
  expect(screen.getByText("October 2022")).toBeInTheDocument();

  // week days
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((d) =>
    expect(screen.getByText(d)).toBeInTheDocument()
  );

  // highlighted day
  const highlighted = document.querySelector(".highlight");
  expect(highlighted).toHaveTextContent("3");
});

test("renders March 2020 with 23rd highlighted", () => {
  render(<Calendar date={new Date(2020, 2, 23)} />);

  expect(screen.getByText("March 2020")).toBeInTheDocument();

  const highlighted = document.querySelector(".highlight");
  expect(highlighted).toHaveTextContent("23");
});