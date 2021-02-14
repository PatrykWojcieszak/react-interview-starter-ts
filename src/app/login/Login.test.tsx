import React from "react";

import { render } from "tests";

import Login from "./Login";

describe("Login", () => {
  test("Displays all information", async () => {
    const {
      getByText,
      getByLabelText,
      getByAltText,
      getByPlaceholderText,
      getByRole,
    } = render(<Login />);

    expect(getByAltText("background")).toBeInTheDocument();
    expect(getByText("join.tsh.io")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
  });
});
