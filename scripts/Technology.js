import { setTechnology } from "./TransientState.js"

const handleTechnologyChoice = (changeEvent) => {
  if (changeEvent.target.id === "technology") {
    setTechnology(parseInt(changeEvent.target.value))
  }
}

export const TechOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies")
  const technologies = await response.json()

  document.addEventListener("change", handleTechnologyChoice)
  let optionsHTML = technologies.map(
    (technology) => {
    return `<option value="${technology.id}">${technology.name}</option>`
  })

  return `
    <div>
      <select id="technology">
        <option value="0">Select a technology package...</option>
        ${optionsHTML.join("")}
      </select>
    </div>`
}
