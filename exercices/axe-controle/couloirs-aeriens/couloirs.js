// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 *
 * @param {number} altitude
 * @returns {number} Retourne l'altidude si elle est autorisée (50/100/150)
 */
export function validateAltitude(altitude) {
  switch (altitude) {
    case 50:
    case 100:
    case 150:
      return altitude;
    default:
      throw new Error(`Altitude interdite : ${altitude} m`);
  }
}

/**
 * Compte les drones présents à une altitude.
 *
 * @param {Array<number>} altitudes
 * @param {number} altitude
 * @returns {number} retourne le nombre de drones à une altitude demandée
 */
export function countAtAltitude(altitudes, altitude) {
  let dronesInAltitude = 0;
  for (let alt of altitudes) {
    if (alt === altitude) {
      dronesInAltitude++;
    }
  }
  return dronesInAltitude;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 *
 * @param {Array<number>} altitudes
 * @param {number} altitude
 * @returns {number} Retourne le nombre de drones à cet endroit
 */
export function checkCorridor(altitudes, altitude) {
  // Si nous avons plus que le nombre maximum de drones à une altitude précise, on crée une autre erreur.
  if (countAtAltitude(altitudes, altitude) > MAX_DRONES_PER_CORRIDOR) {
    throw new Error(`Collision à ${altitude} m`);
  }
  return countAtAltitude(altitudes, altitude);
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 *
 * @param {Array<number>} altitudes
 * @returns {string} Retourne "Espace aérien sûr" si aucune erreur a été levé
 */
export function checkAirspace(altitudes) {
  for (let altitude of altitudes) {
    validateAltitude(altitude);
  }

  // Vérifie pour l'altitude 50, 100, 150
  for (let alt = 50; alt <= 150; alt += 50) {
    checkCorridor(altitudes, alt);
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 *
 * @param {Array<number>} altitudes
 * @returns {*} Retourne soit "Espace aérien sûr" OU une erreur "Alerte : l'erreur est ..."
 */
export function airspaceReport(altitudes) {
  try {
    return checkAirspace(altitudes);
  } catch (e) {
    if (e instanceof Error) {
      return `Alerte : ${e.message}`;
    }
  }
}
