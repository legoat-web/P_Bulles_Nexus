// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function valueType(value) {
  return typeof value; // retourne le type de la valeur (exemple : si la valeur est "coucou", alors cela va nous retourner string)
}

/**
 * Indique si la valeur est undefined.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function isUndefined(value) {
  return value === undefined; // Si la valeur n'est pas définie, alors on retourne true, sinon c'est bon on retourne false
}

/**
 * Indique si la valeur est null.
 */

/**
 *
 * @param {*} value
 * @returns
 */
export function isNull(value) {
  return value === null; // Si la valeur est définie mais qu'elle ne vaut rien, alors on retourne true, sinon c'est bon on retourne false
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
/**
 *
 * @param {*} value
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined; // Si la valeur n'est pas vide ou pas définie, alros on retourne true.
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
/**
 *
 * @param {*} energy
 * @param {*} minimumEnergy
 * @returns
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return parseInt(energy) >= parseInt(minimumEnergy); // On convertit les 2 valeurs en int afin d'améliorer la comparaison
}

/**
 * Compare strictement le nom de la zone attendue.
 */
/**
 *
 * @param {*} zone
 * @param {*} expectedZone
 * @returns
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
