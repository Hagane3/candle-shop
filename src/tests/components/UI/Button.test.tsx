import Button from "../../../components/UI/Button/Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button component", () => {
  test("renders a button with the correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button width={100}>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeInTheDocument();
  });
  test("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button width={100} showAllProducts={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("submits the form when submit prop is true", () => {
    const { getByRole } = render(
      <Button width={100} submit>
        Submit
      </Button>
    );
    expect(getByRole("button")).toHaveAttribute("type", "submit");
  });
});
