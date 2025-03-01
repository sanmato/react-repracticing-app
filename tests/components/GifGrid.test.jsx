import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  test("debe mostrar el Cargando inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    const category = "Kimetsu no Yaiba";
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const category = "Kimetsu no Yaiba";
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost.com/abc",
        title: "ABC",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
