// ////////////////////////
// GAME OBJECT
// ////////////////////////
const game = {
  selectedColor: 'white'
}

// ////////////////////////
// COLOR PALETTE
// ////////////////////////
const $palette = document.getElementById('palette')

$palette.addEventListener('click', function (c) {
  console.log('click event: ' + c.target.id)
  game.selectedColor = c.target.id
  console.log('game object: ' + game.selectedColor)
})

// ////////////////////////
// PUPPY
// ////////////////////////
const $puppy = document.querySelector('svg')

$puppy.addEventListener('click', function (c) {
  if (c.target.closest('circle')) {
    console.log('circle')
    c.target.closest('circle').style.fill = game.selectedColor
  } else if (c.target.closest('path')) {
    console.log('path')
    c.target.closest('path').style.fill = game.selectedColor
  }
})

// ///////////////////////
// CUSTOM CURSOR
// ///////////////////////
// var colorColor = 'black'

// // const $paintbrushSVG = 'images/brush-black-18dp.svg'
// const $paintbrush = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${colorColor}" stroke="black" stroke-width="2" stroke-miterlimit="5" width="32px" height="32px" pointer-events="fill"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/></svg>`

// // const $svgCursor = `url('${$paintbrushSVG}'), auto`
// const $svgCursor = `url('data:image/svg+xml;utf8,${$paintbrush}'), auto`

// document.body.style.cursor = $svgCursor
