import { GifCard } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("Pruebas en GifCard Snapshot", () => {
  const title = "Prueba 1";
  const url = "https://localhost.com/prueba1";
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    render(<GifCard title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
});
