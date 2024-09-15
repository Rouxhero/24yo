// Mélanger les cartes à l'apparition
let code = [1,2,6];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cardContainer');
    const cards = Array.from(container.children);

    // Fonction pour mélanger le tableau des cartes
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(cards);

    // Vider le container et le remplir avec les cartes mélangées
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
});
selected = [];
// Fonction pour sélectionner une carte
function selectCard(card) {

    var card_code = parseInt(card.id);
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selected = selected.filter(function(value, index, arr){
            return value != card_code;
        });
    } else {
        card.classList.add('selected');
        selected.push(card_code);
        if (selected.length > 1) {
        let valid = selected.length == code.length;
        for (var i = 0; i < selected.length; i++) {
            if (code[i] != selected[i]) {
                selected = [];
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                valid = false;
            }
        }
        if (valid) {
            selected = [];
            document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
            document.getElementById('cardContainer').innerHTML = `
            <div id="win">
            
            
            <h1>Bravo !</h1>
            

            <p> Ce screen est la preuve que vous avez réussi à déchiffrer le code. </p>
            <p> Félicitations ! </p>

            <br>

            <p> Votre cadeau vous sera prochainement livré. </p>
            <i> Pars un élégant jeune homme </i>


            </div>
            `;
        }
    }
    }
}
