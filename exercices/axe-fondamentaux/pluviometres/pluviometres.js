// @ts-check

/**
 * Convertit un relevé en nombre.
 *
 * @param {string} value valeur qu'on va convertir en nombre
 * @returns {Number} retourne la valeur convertie en nombre
 */
export function readRainfall(value) {
  return +value;
  // nouvelle manière découverte pour convertir un string en nombre.
  // si le string est "3.99", il va le convertir en float.
  // si le string est "5", il va le convertir en int (que le nombre soit positif ou négatif)
  // Si le string est "abc" il va retourne NaN (Not a Number)
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 *
 * @param {string} morning relevé de pluie le matin
 * @param {string} evening relevé de pluie le soir
 * @returns {Number} Conversion de deux nombre pour éviter d'avoir une addition de string qui nous donnerai un faux résultat
 */
export function totalRainfall(morning, evening) {
  return +morning + +evening; // Nouvelle conversion découverte (+variable)
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 *
 * @param {Number} hour
 * @returns {boolean} Retourne true si hour est un multiple de 3
 */
export function isScheduledHour(hour) {
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 *
 * @param {*} value Valeur à convertir
 * @returns {boolean} Retourne true si la conversion conversion de value est impossible (isNaN)
 */
export function isFaultyReading(value) {
  return isNaN(+value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 *
 * @param {*} manual
 * @param {*} automatic
 * @returns {boolean} retourne true si manual et automatic sont du même type et qu'ils ont les mêmes valeurs et sont du même type.
 */
export function isConfirmedReading(manual, automatic) {
  return +manual === +automatic; // Convertis manual et automatic
}
