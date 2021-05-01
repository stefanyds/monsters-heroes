import React from 'react';
import { render, screen } from "@testing-library/react"
import App from "./App";
import axios from 'axios';
import { monsters } from "./api/mock/constants"

jest.mock('axios');
beforeEach(() => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: monsters }))
  render(<App />);
});

describe("src > App.jsx", () => {
  it("should validate title", () => {
    const title = screen.getByText("Monsters Heroes");
    expect(title).toBeInTheDocument();
  })
  it("should validate search input", () => {
    const input = screen.getByPlaceholderText("busca de monstros");
    expect(input).toBeInTheDocument();
  })
})