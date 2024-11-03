function search(){
    let word = document.getElementById("text").value;
    let resultat = document.getElementById("resultat");
 
    if(word.length != 0){
       // Construire correctement l'URL
       let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
 
       // Effectuer une requête fetch vers l'API
       fetch(url)
       .then(response => response.json())
       .then(data => {
          try {
             // Parcourir les résultats
             for(let words of data){
                let definition = words.meanings[0].definitions[0].definition;
                // Ajouter le résultat dans la div 'resultat'
                resultat.innerHTML = "<p class='res'><span>Définition :</span><br>" + definition + "</p>";
             }
          } catch (err) {
             // Si l'API ne retourne pas de définition
             resultat.innerHTML = "<p class='res'>Aucune définition trouvée.</p>";
          }
       })
       .catch(error => {
          // En cas d'erreur de la requête API (par exemple, mot non trouvé)
          resultat.innerHTML = "<p class='res'>Erreur lors de la recherche. Veuillez réessayer.</p>";
       });
 
    } else {
       // Si le champ de recherche est vide
       resultat.innerHTML = "<p class='res'>Veuillez remplir ce champ !</p>";
    }
 }
 
 // Ajouter un écouteur d'événements pour détecter les changements dans le champ
document.getElementById("text").addEventListener("input", function() {
   let word = this.value;
   let resultat = document.getElementById("resultat");

   // Efface le résultat si le champ est vide
   if (word.length === 0) {
       resultat.innerHTML = "";
   }
});