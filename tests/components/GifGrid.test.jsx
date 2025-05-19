import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("GifGrid component tests", () => {
  const category = "Jujutsu Kaisen";
  const loadingMessage = "Loading...";
  test("should show initial status", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(loadingMessage));
    expect(screen.getByText(category));
  });
  test("should show items when useFetchGifs images are ready", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://url00.jpg",
      },
      {
        id: "DEF",
        title: "Goku",
        url: "https://url01.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
