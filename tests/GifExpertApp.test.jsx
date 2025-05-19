import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { useState } from "react";

describe("GifExpertApp tests", () => {
  const initCategory = "Jujutsu Kaisen";
  const validCategory = "Demon Slayer";
  const nonValidCategory = "  a  ";

  test("init state", () => {
    render(<GifExpertApp />);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });

  test("add valid category", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: validCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });

  test("add an invalid category", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: nonValidCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });

  test("add repeated category", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: initCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });
});
