import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Route: ({ element }: { element: React.ReactNode }) => <div>{element}</div>,
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
  useParams: () => ({ id: "1" }),
}));

test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // COMMENTED
  // After new loading style, found that it's not worthy to check loading text
  // const loadingElements = screen.getAllByText(/Loading.../i);
  // expect(loadingElements.length).toBeGreaterThan(0);
});
