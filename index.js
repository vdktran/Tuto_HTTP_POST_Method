// Index.js est relié à index.html au travers d'une balise <script> à l'intérieur d'index.html

// Ici, on utilise $ pour accéder à jQuery
// .post est une méthode de requête http
// au même titre que la méthode .get , .post va permettre d'aller chercher des données à l'adresse indiquée en 1er argument
// ici, 'http://localhost:3000/'
// Ces données sont ensuite utilisées par la fonction callback qui les prend en argument
// ici , res  de function(res){} correspond aux données récoltées
// Pour vérifier que ce soit bien les données que le veut, on les affiche dans la console à l'aide d'un console.log

$.post('http://localhost:3000/', function(res) {
  console.log("avec la méthode post",res);
});
