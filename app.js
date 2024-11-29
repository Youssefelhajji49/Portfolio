
document.addEventListener("DOMContentLoaded", function() {
    // Initialiser les paramètres du dégradé
    let angle = 90;
    let gradientColors = [
        "#f4f4f9", "#e1e1f5", "#d4e3fc", "#b5c3ea"
    ];
    
    // Fonction qui met à jour le fond avec un dégradé animé
    function animateBackground() {
        angle += 0.5; // Déplacer lentement l'angle du dégradé
        if (angle > 360) {
            angle = 0; // Réinitialiser l'angle pour un effet circulaire
        }

        // Appliquer un nouveau dégradé avec un angle dynamique
        document.body.style.background = `linear-gradient(${angle}deg, ${gradientColors.join(', ')})`;
    }

    // Lancer l'animation toutes les 50ms (20 FPS)
    setInterval(animateBackground, 50);
});
function showPhoneNumber() {
    const phoneNumber = document.getElementById("phone-number");
    // Affiche ou masque le numéro
    if (phoneNumber.classList.contains("hidden")) {
        phoneNumber.classList.remove("hidden");
    } else {
        phoneNumber.classList.add("hidden");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne le bouton du menu burger et le menu
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('header nav');

    // Ajoute un événement au clic pour ouvrir/fermer le menu burger
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});






