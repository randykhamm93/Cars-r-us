import { setPaintColor } from "./TransientState.js"

const handlePaintChoice = (changeEvent) => {
  if (changeEvent.target.id === "paint") {
    setPaintColor(parseInt(changeEvent.target.value))
  }
}

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paintColors")
  const paintColors = await response.json()

  document.addEventListener("change", handlePaintChoice)
  let optionsHTML = paintColors.map(
    (paintColor) => {
    return `<option value="${paintColor.id}">${paintColor.name}</option>`
  })

  return `
    <div>
      <select id="paint">
        <option value="0">Select a paint color...</option>
        ${optionsHTML.join("")}
      </select>
    </div>`
}
