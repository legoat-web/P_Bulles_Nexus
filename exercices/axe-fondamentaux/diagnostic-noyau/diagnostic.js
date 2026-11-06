// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 * @param {*} value valeur que l'utilisateur a entré
 * @returns Retourne le type de la valeur
 */
export function valueType(value) {
  return typeof value; // retourne le type de la valeur (exemple : si la valeur est "coucou", alors cela va nous retourner string)
}

/**
 * Indique si la valeur est undefined.
 * @param {*} value valeur que l'utilisateur a entré
 * @returns {boolean} on retourne true si la valeur n'est pas définie
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Indique si la valeur est null.
 * @param {*} value valeur que l'utilisateur a entré
 * @returns {boolean} on retourne true si la valeur est définie mais qu'elle ne vaut rien (est null)
 */
export function isNull(value) {
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 * @param {*} value Valeur que l'utilisateur a entré
 * @returns {boolean} On retourne true si la valeur n'est pas vide ou n'est pas définie
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 * @param {*} energy energie actuelle
 * @param {*} minimumEnergy énergie minimum (nécessaire pour la comparaison dans "hasEnoughtEnergy")
 * @returns {boolean} retourne true si l'énergie actuelle est plus grande que le nombre minimum d'énergie
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return parseInt(energy) >= parseInt(minimumEnergy); // On convertit les 2 valeurs en int afin de rendre une comparaison en chiffre et pas en texte.
}

/**
 * Compare strictement le nom de la zone attendue.
 * @param {*} zone
 * @param {*} expectedZone
 * @returns {boolean} retourne true si le nom de la zone est le même que celui de la zone attendue
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
