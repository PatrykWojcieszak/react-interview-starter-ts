import React from "react";

import { getByAltText, getByRole, render, screen } from "tests";

import Login from "./Login";

describe("Login", () => {
  test("Displays all information", async () => {
    const { getByText, getByLabelText } = render(<Login />);

    expect(screen.getByAltText("background")).toBeInTheDocument();
    expect(getByText("join.tsh.io")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
  });
});
