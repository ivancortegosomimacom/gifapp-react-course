const { render, screen, fireEvent } = require("@testing-library/react");
import { AddCategory } from "../../src/components/AddCategory";

describe("Add Category tests", () => {
  const category = "Jujutsu Kaisen";
  const errorCategory = "a";

  test("should change value inside textbox", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: category } });

    expect(input.value).toBe(category);
  });

  test("should call onNewCategory if input contains a value", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(input.value).toBeFalsy();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(category);
  });

  test("should not call function when category does not match requirements", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: errorCategory } });
    fireEvent.submit(form);

    expect(input.value).toBeTruthy();
    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
