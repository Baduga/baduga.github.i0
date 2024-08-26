const cards = document.querySelectorAll('.card');

//const body = document.querySelector('.')
for(const card of cards){
    card.addEventListener('click',()=>{
        clearActiveClasses()
        card.classList.add('active')
        if (card.classList.contains('js')) {
            document.body.style.background = 'linear-gradient(90deg, rgb(161, 122, 56), rgb(39, 33, 28))';
        }
        if (card.classList.contains('sass')) {
            document.body.style.background = 'linear-gradient(90deg, rgb(143, 55, 154), rgb(36, 29, 59))';
        }
        if (card.classList.contains('html')) {
            document.body.style.background = 'linear-gradient(90deg, rgb(208, 120, 48), rgb(39, 39, 28))';
        }
        if (card.classList.contains('php')) {
            document.body.style.background = 'linear-gradient(90deg, rgb(78, 72, 187), rgb(28, 37, 39))';
        }
    })
}
function clearActiveClasses(){
    for(const card of cards){
        card.classList.remove('active')
    }
}
