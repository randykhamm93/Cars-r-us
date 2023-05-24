import { setInterior } from "./TransientState.js"


const handleInteriorChoice = (changeEvent) => {
  if (changeEvent.target.id === "interior") {
    setInterior(parseInt(changeEvent.target.value))
  }
}

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors")
  const interiors = await response.json()

  document.addEventListener("change", handleInteriorChoice)

  let optionsHTML = interiors.map(
    (interior) => {
    return `<option value="${interior.id}">${interior.name}</option>`
  })

  return `
    <div>
      <select id="interior">
        <option value="0">Select an interior...</option>
        ${optionsHTML.join("")}
      </select>
    </div>`
}
