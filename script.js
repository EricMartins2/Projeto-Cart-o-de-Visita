function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar2-light.png')
        img.setAttribute('alt', 'Jovem com camiseta preta, fundo escuro e leve iluminação verde!')
    } else {
       img.setAttribute('src', './assets/avatar1.png')
       img.setAttribute('alt', 'Jovem de camisa preta, com um fundo cinza em tons de amarelo.')
    }
   
}
