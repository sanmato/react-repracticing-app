import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
  test("debe de retornar el estado inicial", () => {
    const category = "Kimetsu no Yaiba";
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const category = "Kimetsu no Yaiba";
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
