// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s
const CHANGE_KM_TO_METER = 3.6;
/**
 * Convertit une vitesse de km/h en m/s.
 *
 * @param {Number} speedKmh vitesse en kmh
 * @returns {Number} retourne la vistesse en m/s
 */
export function kmhToMs(speedKmh) {
  return speedKmh / CHANGE_KM_TO_METER;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 *
 * @param {Number} gustKmh vitesse de rafale
 * @param {Number} averageKmh vitesse de vent moyen
 * @returns {Number} retourne l'écart entre gustKmh et averageKmh
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 *
 * @param {Number} speed1
 * @param {Number} speed2
 * @param {Number} speed3
 * @returns {Number} retourne la moyenne de speed1, speed2 et speed3
 */
export function averageOfThree(speed1, speed2, speed3) {
  return averageOfThree(speed1, speed2, speed3);
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 *
 * @param {Number} speedKmh vitesse du vent en Kmh
 * @returns {boolean} retourne true si le vent est plus grand que 75Kmh
 */
export function isStormAlert(speedKmh) {
  return speedKmh > 75;
}

/**
 * Construit le bulletin météo d'une station.
 *
 * @param {string} station
 * @param {Number} speedKmh
 * @returns {string} retourne une phrase qui indique la station et à quelle vitesse elle va en Kmh et Ms
 */
export function windReport(station, speedKmh) {
  return `${station} : vent de ${speedKmh} km/h (${speedKmh / CHANGE_KM_TO_METER} m/s).`;
}
