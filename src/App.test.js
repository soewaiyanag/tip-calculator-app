import App from "App";
import { render } from "@testing-library/react";
import store from "app/store";
import { Provider } from "react-redux";

describe("App component", () => {
  test("renders App with no errors", () => {
    // const app = (

    // );
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByRole("application")).toBeInTheDocument();
  });
});
