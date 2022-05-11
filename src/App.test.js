import App from "App";
import { render, screen } from "@testing-library/react";
import store from "app/store";
import { Provider } from "react-redux";

describe("App component", () => {
  test("renders App with no errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const app = screen.getByRole("application");
    expect(app).toBeInTheDocument();
  });
});
