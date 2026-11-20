// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue (true si connu, false si pas connue).
 *
 * @param {string} university Nom de l'université
 * @returns {boolean}
 */
export function isKnownUniversity(university) {
  for (let i = 0; i < UNIVERSITIES.length; i++) {
    if (university === UNIVERSITIES[i]) return true;
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 *
 * @param {string} title Nom du diplôme
 * @returns {Number} Diplôme en numérique
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
    case "Master":
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 *
 * @param {string} university
 * @returns {boolean} true si université fait partie de MASTER REQUIRED
 */
export function requiresMaster(university) {
  return MASTER_REQUIRED.includes(university); // même chose que .contains en C#
}

/**
 * Indique si un visiteur est considéré comme fiable.
 *
 *
 * @param {string} university
 * @param {string} title bachelor/master/autre
 * @returns {boolean}
 */
export function isTrusted(university, title) {
  let recognizeUniversity = isKnownUniversity(university); // l'université est reconnue
  let uniRequiresMaster =
    !requiresMaster(university) || titleLevel(title) === 2; // soit l'uni n'as pas besoin de master, soit elle en a besoin
  let haveMinimumBachelor = titleLevel(title) >= 1; // nécessite bachelor au minimum
  return recognizeUniversity && haveMinimumBachelor && uniRequiresMaster;
}
/**
 * Construit le message d'accueil selon l'université et le titre.
 *
 * @param {string} university
 * @param {string} title
 * @returns {string}
 */
export function welcomeMessage(university, title) {
  if (!isKnownUniversity(university)) {
    // si l'université n'est pas reconnue, on retourne "Université inconnu"
    return "Université inconnue";
  } else if (titleLevel(title) === 0) {
    // si il n'a pas de titres (bachelor, master) alors on retourne "titre inconnu"
    return "Titre inconnu";
  } else if (requiresMaster(university) && titleLevel(title) !== 2) {
    // si l'université demande un master obligatoirement et qu'on en a pas, on retourne "Master requis"
    return "Master requis";
  } else {
    return "Bienvenue dans la Citadelle";
  }
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 *
 * @param {Array<string>} universities université du visiteur
 * @param {Array<string>} titles titre du visiteur (bachelor / master)
 * @returns {boolean} retourne true si tous les utilisateurs sont fiables
 */
export function allTrusted(universities, titles) {
  for (let i = 0; i < universities.length; i++) {
    /**
     * On vérifie pour chaque université et titre des visiteurs dans les tableaux s'ils sont dignes de confiance.
     * Si il y a un seul visiteur qui n'est pas digne de confiance, on retourne faux.
     */
    if (!isTrusted(universities[i], titles[i])) {
      return false;
    }
  }
  return true;
}
