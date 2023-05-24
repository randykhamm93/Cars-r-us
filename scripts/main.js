import { InteriorOptions } from "./Interior.Js"
import { PaintOptions } from "./PaintColor.js"
import { TechOptions } from "./Technology.js"
import { WheelOptions } from "./Wheels.js"
import { PlaceCustomOrder } from "./Orders.js"
import { CustomOrdersList } from "./CustomOrders.js"

const container = document.querySelector("#container")

const render = async () => {
  const paintOptionsHTML = await PaintOptions()
  const interiorOptionsHTML = await InteriorOptions()
  const wheelOptionsHTML = await WheelOptions()
  const technologyOptionsHTML = await TechOptions()
  const placeOrderHTML = PlaceCustomOrder()
  const customOrderHTML = await CustomOrdersList()

  const composedHTML = `
  <h1>Cars 'R Us: Personal Car Builder</h1>

  <article class="choices">
    <section class="choices__paints box">
      <h2 class="box-heading">Paint</h2>
      ${paintOptionsHTML}
    </section>

    <section class="choices__interiors box">
      <h2 class="box-heading">Interior</h2>
      ${interiorOptionsHTML}
    </section>

    <section class="choices__wheels box">
      <h2 class="box-heading">Wheels</h2>
      ${wheelOptionsHTML}
    </section>

    <section class="choices__technologies box">
      <h2 class="box-heading">Technology</h2>
      ${technologyOptionsHTML}
    </section>
  </article>

  <article class="order">
    ${placeOrderHTML}
  </article>

  <article class="customOrders box">
    <h2 class="box-heading">Custom Car Orders</h2>
    ${customOrderHTML}
  </article>
  `

  container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", customEvent => {
  console.log("State of data has changed. Regenerating HTML...")
  render()
})

render()
