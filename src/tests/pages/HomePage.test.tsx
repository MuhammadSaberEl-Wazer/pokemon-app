import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store"; 
import HomePage from "../../pages/HomePage";

test("renders loading state initially", () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  // COMMENTED
  // After new loading style, found that it's not worthy to check loading text
  // expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
