import { getByText, render, screen } from '@testing-library/react';
import App from './App';


describe("Initial page", () => {
  test('Terdapat tulisan Gadjian User pada app', () => {
    const {getByText} = render(<App />);
    const text = getByText("Gadjian User");
    expect(text).toBeInTheDocument();
  });

  test("Terdapat tulisan Personal List pada app", () => {
    const {getByTestId} = render(<App />)
    const title = getByTestId("personal-list")

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/personal list/i)
  })

})

describe("Menampilkan data dari API", () => {
  test("Terdapat nama Roy Roy pada document", () => {

    const {findByText, debug, container} = render(<App />)

    findByText("Roy Roy").then((element) => {
      expect(element).toBeInTheDocument()

      const divEl = container.querySelectorAll(".data-user")
      expect(divEl).toHaveLength(28)
      done()
    })
  })
})