import config from './config';

export function init() {
  const root = document.createElement("div")
  root.innerHTML = `<p>Viens du module ${config.clef}</p>`
  document.body.appendChild(root)
}