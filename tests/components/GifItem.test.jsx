import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("GifItem tests", () => {
  const title = "Jujutsu Kaisen";
  const url = "https://url.test.jpg/";
  const titleError = 123;
  const urlError = 321;
  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show image with URL and ALT sent", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("should show title inside component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByAltText(title)).toBeTruthy();
  });
});
