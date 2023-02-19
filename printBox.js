function printBox(width, height) {
  // Vérification des paramètres d'entrée
  if (typeof width !== 'number' || typeof height !== 'number' || width < 1 || height < 1) {
    console.log('Les paramètres d\'entrée doivent être deux entiers positifs');
    return;
  }

  // Construction de la première et dernière ligne de la boîte
  const horizontalBorder = '*'.repeat(width);
  
  const spaces = ' '.repeat(width - 2);
  const interiorLine ="*"+spaces+"*"; //`${verticalBorder}${spaces}${verticalBorder}`;
  
  // Impression de la boîte
  console.log(horizontalBorder);
  for (let i = 0; i < height - 2; i++) {
    console.log(interiorLine);
  }
  console.log(horizontalBorder);
}

printBox(6,5);