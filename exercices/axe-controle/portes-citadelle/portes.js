// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 *
 * @param {Number} level
 * @returns {string} Opérateur ternaire qui indique si l'accès est autorisé ou refusé
 */
export function accessMessage(level) {
  return level > 5 ? "Accès autorisé" : "Accès refusé";
}

/**
 * Retourne l'état textuel d'une porte.
 *
 * @param {boolean} isOpen true si c'est ouvert, false si c'est fermé
 * @returns {string}
 */
export function doorStatus(isOpen) {
  return isOpen ? "Ouverte" : "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 *
 * @param {string} code
 */
export function zoneName(code) {
  switch (code) {
    case "N":
      return "Les fondations";
    case "E":
      return "Les Archives";
    case "SE":
      return "La Forge";
    case "SO":
      return "La Citadelle";
    case "O":
      return "La Faille";
    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 *
 * @param {Number} energy énergie dispo
 * @returns {string} retourne l'état de notre batterie
 */
export function alertLevel(energy) {
  if (energy > 80) return "OPTIMAL";
  else if (energy > 50) return "STABLE";
  else if (energy > 20) return "FAIBLE";
  else return "CRITIQUE";
}
