// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy energie maximale
 * @param {number} currentEnergy énergie actuelle
 * @returns
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}
/**
 * Calcule le pourcentage d'énergie disponible.
 */
/**
 *
 * @param {number} maxEnergy énergie maximale
 * @param {number} currentEnergy énergie actuelle
 * @returns
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 */
/**
 *
 * @param {number} currentEnergy énergie actuelle
 * @param {number} recharge permet d'augmenter l'énergie
 * @returns
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
/**
 *
 * @param {number} currentEnergy énergie actuelle
 * @returns
 */
export function isGeneratorReady(currentEnergy) {
  return currentEnergy >= 500 ? true : false;
}

/**
 * Construit le message d'état du générateur.
 */
/**
 *
 * @param {string} name nom du drone
 * @param {number} currentEnergy énergie actuelle
 * @returns
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie`;
}
