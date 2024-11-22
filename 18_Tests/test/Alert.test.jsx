import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "../src/components/Alert";
import userEvent from "@testing-library/user-event";

describe("<Alert>", () => {
  it("Should render correctly", () => {
    const { container } = render(<Alert type="danger">Erreur</Alert>);
    expect(container.firstChild).toMatchSnapshot(`
      <div class="alert alert-danger" role="alert">
        Erreur
        <button>Fermer</button>
      </div>
    `);
  });
  it("Should close the alert on click", async () => {
    const { container } = render(<Alert type="danger">Erreur</Alert>);
    screen.debug();
    const buttons = screen.getAllByText("Fermer"); // Retourne un tableau des boutons
    await userEvent.click(buttons[0]); // Cible le premier bouton
    expect(container.firstChild).toMatchSnapshot("null");
  });
});
