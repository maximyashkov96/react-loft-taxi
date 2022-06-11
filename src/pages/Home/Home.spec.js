import React from "react";
import { Home } from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      render(<Home />);
      expect(screen.getByLabelText("Email*:")).toHaveAttribute("name", "email");
      expect(screen.getByLabelText("Password:")).toHaveAttribute("name", "password");
    });

  })
  describe("when logged in", () => {
    it("renders profile link", () => {
      render(<Home isLoggedIn />);
      expect(screen.getByText("Go to Profile")).toBeInTheDocument()
    });
  });
});