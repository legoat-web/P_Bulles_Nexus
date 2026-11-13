// @ts-check

/**
 * Convertit une valeur en nombre.
 *
 * @param {string} value valeur à convertir en int
 * @returns {number} retourne la valeur convertie en int
 */
export function convertCode(value) {
  return parseInt(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 *
 * @param {*} value1 Valeur de type différente ou pareile à value 2
 * @param {*} value2 Valeur de type différente ou pareile à value 1
 * @returns {boolean} retourne true si la même chose est écrite dans value 1 et value 2, quel que soit le type de value 1 et value 2
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 * @param {*} value1 Valeur du même type que value 2
 * @param {*} value2 Valeur du même type que value 2
 * @returns {boolean} retourne true si le type et ce qui est écrit dans value1 et value2 sont pareils
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 *
 * @param {*} code
 * @returns {boolean} retourne true si le code est pair
 */
export function isEvenCode(code) {
  return code % 2 === 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 *
 * @param {*} value cette valeur doit être un nombre pour que la fonction marche.
 * @returns {boolean} retourne true si value n'est pas un nombre
 */
export function isInvalidCode(value) {
  return isNaN(value); // isNaN = is Not a Number => il vérifie si value n'est pas un nombre
}
