const coupowns = document.getElementById('coupowns')
const coupownsVideo = document.getElementById('coupowns-video')

let showCoupownsVideo = () => {
  coupowns.addEventListener('click', () => {
    coupownsVideo.classList.add('visible')
    coupownsVideo.addEventListener('click', () => {
      coupownsVideo.remove()
    })
    document.body.append(coupownsVideo)
  })
}

export { showCoupownsVideo }