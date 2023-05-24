import { setWheel } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
  if (changeEvent.target.id === "wheel") {
    setWheel(parseInt(changeEvent.target.value))
  }
}

export const WheelOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels")
  const wheels = await response.json()

  document.addEventListener("change", handleWheelChoice)

  let optionsHTML = wheels.map(
    (wheel) => {
    return `<option value="${wheel.id}">${wheel.name}</option>`
  })

  return `
    <div id="wheel-menu">
      <select class="dropdown">
        <option value="0">Select a set of wheels...</option>
        ${optionsHTML.join("")}
      </select>
    </div>`
}
