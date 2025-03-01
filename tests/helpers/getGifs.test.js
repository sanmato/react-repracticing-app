import { fetchGifs } from "../../src/helpers/fetchGifs";

describe("Pruebas en fetchGifs", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await fetchGifs("Kimetsu no Yaiba");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
      })
    );
  });

  test("debe de traer 0 elementos", async () => {
    const gifs = await fetchGifs("");
    expect(gifs.length).toBe(0);
  });
});
