import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el título correctamente", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("debe de mostrar una categoría por defecto", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Kimetsu no Yaiba")).toBeTruthy();
  });
});
