function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag
  const img = document.querySelector('#profile img')
  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      'alt', 
      'Foto de Waldyr com uniforme da Lufa Lufa e fundo amarelo.'
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      'alt', 
      'Foto de Waldyr com uniforme da Lufa Lufa e fundo preto.'
    )
  }

  const rocket = document.querySelector('#social-links img')
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    rocket.setAttribute('src', './assets/rocketseat.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    rocket.setAttribute('src', './assets/rocketseatWhite.png')
  }

}