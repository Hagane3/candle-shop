import { render, fireEvent, getByRole } from "@testing-library/react";
import QuantityBox from "../../../components/UI/QuantityBox/QuantityBox";

describe("QuantityBox", () => {
  it("should render the component with the initial quantity", () => {
    const setQuantityHandler = jest.fn();
    const { getByText } = render(
      <QuantityBox setQuantityHandler={setQuantityHandler} quantity={2} />
    );
    const quantityElement = getByText("Quantity");
    const quantityValueElement = getByText("2");
    expect(quantityElement).toBeInTheDocument();
    expect(quantityValueElement).toBeInTheDocument();
  });
});
