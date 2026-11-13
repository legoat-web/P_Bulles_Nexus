// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 *
 * @param {Number} numberOfRounds
 * @returns {Number} retourne la somme totale de tous les rounds
 */
export function sumRounds(numberOfRounds) {
  let sum = 0;
  for (let i = 0; i < numberOfRounds; i++) {
    sum += i + 1;
  }
  return sum;
}

/**
 * Compte le nombre de caractères d'un code.
 *
 * @param {string} code
 * @returns {number}
 */
export function countSymbols(code) {
  let numberOfLetter = 0;
  for (let c of code) {
    numberOfLetter++;
  }
  return numberOfLetter;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 * @param {string} code
 * @returns {number}
 */
export function countX(code) {
  let numberOfX = 0;
  for (let x of code) {
    if (x === "X") {
      numberOfX++;
    }
  }
  return numberOfX;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 *
 * @param {Number} energy
 * @param {Number} consumption
 * @returns {Number}
 */
export function turnsBeforeEmpty(energy, consumption) {
  let nbOfRound = 0;
  while (energy >= consumption) {
    energy -= consumption;
    nbOfRound++;
  }
  return nbOfRound;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 *
 * @param {Number} limit
 * @returns {Number}
 */
export function firstRoundAbove(limit) {
  let sum = 0;
  let nbRound = 0;
  while (sum <= limit) {
    sum += 1 + nbRound;
    nbRound++;
  }
  return nbRound;
}
