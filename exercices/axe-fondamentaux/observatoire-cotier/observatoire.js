// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 *
 * @param {*} value valeur de n'importe quel type
 * @returns {*} retourne le type de valeur de value
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 *
 * @param {*} count
 * @returns {boolean}
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 *
 * @param {*} count
 * @returns {boolean}
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 *
 * @param {*} count
 * @returns {boolean}
 */
export function hasBirdCount(count) {
  return count !== undefined && count !== null;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 *
 * @param {*} northCount n d'oiseaux au nord
 * @param {*} southCount n d'oiseaux au sud
 * @returns {Number} retourne le total d'oiseaux
 */
export function totalBirds(northCount, southCount) {
  if (northCount === null || northCount === undefined) northCount = 0;
  if (southCount === null || southCount === undefined) southCount = 0;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 *
 * @param {*} height
 * @returns {boolean} retourne true si height est un nombre
 */
export function isValidWaveHeight(height) {
  return typeof height == "number" && !isNaN(height);
}
