// Set up the transient state data structure and provide initial values
const transientState = {
  "paintColorId": 0,
  "interiorId": 0,
  "wheelId": 0,
  "technologyId": 0
}

// Functions to modify each property of transient state
export const setPaintColor = (chosenColor) => {
  transientState.paintColorId = chosenColor
  console.log(transientState)
}

export const setInterior = (chosenInterior) => {
  transientState.interiorId = chosenInterior
  console.log(transientState)
}

export const setWheel = (chosenWheel) => {
  transientState.wheelId = chosenWheel
  console.log(transientState)
}

export const setTechnology = (chosenTechnology) => {
  transientState.technologyId = chosenTechnology
  console.log(transientState)
}

// Function to convert transient state to permanent state
export const placeOrder = async () => {
  /*
      Add the required keys to the object below that are
      needed for a POST operation.
  */
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
  }

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions)

  const customEvent = new CustomEvent("newOrderPlaced")
  document.dispatchEvent(customEvent)
}
