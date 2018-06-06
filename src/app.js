if (module.hot) {
  module.hot.accept()
}

import './app.scss'

const button = document.createElement("button")
button.textContent = 'Use other module'
document.body.appendChild(button)


button.onclick = () => {
  import(/* webpackChunkName: "mbis" */ "./moduleBis").then(mbis => {
    mbis.init()
  })
}