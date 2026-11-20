// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 *
 * @param {number} wind vent ascencionnel
 * @returns {number} Retourne la vitesse de descente verticale + le vent
 */
export function verticalSpeed(wind) {
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 *
 * @param {number} altitude
 * @param {number} wind
 * @returns {number} Retourne l'altitude du drone une seconde plus tard (0 s'il atteint le sol (pas de nombre négatifs))
 */
export function nextAltitude(altitude, wind) {
  let droneMove = altitude + DESCENT_SPEED + wind;

  // Si le drone atteint par terre, il ne va pas sous terre, donc il va max à 0
  return (altitude = droneMove > 0 ? droneMove : 0);
}

/**
 * Génère une valeur aléatoire de vent.
 *
 * @returns {number} Nombre entre 0 et 3
 */
export function randomWind() {
  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 *
 * @param {number} startAltitude Altitude de départ qui change toutes les secondes
 * @returns {number} Nombre de secondes avant l'atwadawd
 */
export function landingDuration(startAltitude) {
  let second = 0;
  while (startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    second++;
  }
  return second;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
// ERREUR A CORRIGER
export function hasGracefullyLanded(startAltitude, battery) {
  let isLanding = landingDuration(startAltitude);
  while (battery > 0 && startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    battery--;
  }
  return isLanding <= battery ? true : false;
}
