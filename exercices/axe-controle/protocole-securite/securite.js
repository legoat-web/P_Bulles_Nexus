// @ts-check

/**
 * Valide une quantité d'énergie.
 *
 * @param {number} energy
 * @returns {number} => retourne un nombre si énergie est plus grand ou égal à 0, sinon on envoie une erreur
 */
export function validateEnergy(energy) {
  if (energy < 0) throw new Error("Énergie invalide");
  return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 *
 * @param {number} energy peut être autre chose qu'un int
 * @returns {string} Dit si l'énergie est valide ou non
 */
export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 *
 * @param {string} code
 * @returns {string} L'erreur et les codes de portes sont des string
 */
export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
      return "ALPHA";

    case "BETA":
      return "BETA";

    case "OMEGA":
      return "OMEGA";

    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 *
 * @param {string} code
 * @returns {string} Si le code est accepté ou refusé
 */
export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 *
 * @param {string} text
 * @returns {Number} Nombre de tentative valides
 */
export function countValidAttempts(text) {
  let counter = 0;
  for (let x of text) {
    if (x === "A" || x === "B") counter++;
  }
  return counter;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou le nombre de tentatives totales.
 *
 * @param {*} sequence
 * @returns {Number}
 */
export function attemptsBeforeLock(sequence) {
  let xNumber = 0;
  for (let i = 0; i <= sequence.length; i++) {
    if (sequence[i] === "X") xNumber++;
    if (xNumber >= 3) return i + 1;
  }
  return sequence.length;
}
