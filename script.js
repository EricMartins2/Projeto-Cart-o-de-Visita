function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Homem branco com óculos escuro, jaqueta cinza, camiseta preta por baixo, e sem barba!')
    } else {
       img.setAttribute('src', './assets/avatar.png')
       img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }
   
}
