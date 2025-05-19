import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs custom hook tests", () => {
  const category = "Jujutsu Kaisen";
  test("should return initial status", () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });
  test("should return an images array and isLoading false", async() => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy();
  });
});
