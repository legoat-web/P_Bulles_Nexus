// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 *
 * @param {string} value valeur à convertir en int
 * @returns
 */
export function convertCode(value) {
  return parseInt(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 */
/**
 *
 * @param {*} value1 Valeur de type différente ou pareile à value 2
 * @param {*} value2 Valeur de type différente ou pareile à value 1
 * @returns
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2 ? true : false; // == accepte même si les types sont différents, tant que ce qui est écrit dans value est la même chose
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 */
/**
 *
 * @param {*} value1 Valeur du même type que value 2
 * @param {*} value2 Valeur du même type que value 2
 * @returns
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2 ? true : false; // === accepte seulement si ce qui est écrit dans value est la même chose ET que les 2 valeurs sont du même type
}

/**
 * Indique si un code est pair.
 */
/**
 *
 * @param {*} code
 * @returns
 */
export function isEvenCode(code) {
  return code % 2 === 0 ? true : false;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
/**
 *
 * @param {*} value cette valeur doit être un nombre pour que la fonction marche.
 * @returns
 */
export function isInvalidCode(value) {
  return isNaN(value) ? true : false; // isNaN = is Not a Number => il vérifie si value n'est pas un nombre, il retourne true si value n'est pas un nombre, et false si value est un nombre
}
