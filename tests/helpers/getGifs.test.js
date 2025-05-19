import getGifs from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  const searchQuery = 'Jujutsu Kaisen';
  test("should return gif array", async () => {
    const gifs = await getGifs(searchQuery);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
