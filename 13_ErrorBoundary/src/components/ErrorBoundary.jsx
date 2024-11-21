import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Permet de représenter l'état d'erreur
  }

  // Cette méthode est appelée lorsqu'une erreur est levée par un composant enfant
  static getDerivedStateFromError(error) {
    // Met à jour l'état pour que le prochain rendu affiche une
    // UI de secours.
    return { hasError: true };
  }

  // Pour dire ce que vous voulez faire en cas d'erreur
  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  // Affiche l'UI de secours
  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n’importe quelle UI de secours
      return this.props.fallback; // Si y'a une erreur je met ce que j'ai dans fallback
    }

    return this.props.children; // Sinon je renvoie ce que j'ai dans children
  }
}
