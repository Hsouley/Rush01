function treeConstructor(strArr) {
  // Création d'un objet pour stocker chaque nœud parent et ses enfants
  const parentChildPairs = {};

  // Boucle à travers chaque paire de parent-enfant dans strArr
  for (let i = 0; i < strArr.length; i++) {
    // Convertir la paire de parent-enfant en un tableau d'entiers
    const pair = strArr[i].slice(1, -1).split(",").map(Number);

    // Vérifier si le parent a déjà un enfant
    if (parentChildPairs[pair[1]] !== undefined) {
      // Si le parent a déjà un enfant, renvoyer false
      return false;
    }

    // Ajouter l'enfant au parent dans l'objet parentChildPairs
    parentChildPairs[pair[1]] = pair[0];
  }

  // Vérifier s'il y a exactement un nœud racine
  let roots = 0;
  for (const parent in parentChildPairs) {
    if (!Object.values(parentChildPairs).includes(Number(parent))) {
      roots++;
      if (roots > 1) {
        return false;
      }
    }
  }

  // Si toutes les vérifications ont réussi, renvoyer true
  return true;
}

console.log(treeConstructor("(1,2)","(2,4)","(7,2)"));
console.log(treeConstructor("1,2"));
console.log(treeConstructor(1,2,3,4,5,7));