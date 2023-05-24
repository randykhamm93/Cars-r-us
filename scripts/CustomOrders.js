export const CustomOrdersList = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=wheel&_expand=technology")
  const orders = await fetchResponse.json()

  //Add this line to check the value of orders
  let ordersHTML = orders.map(
    (order) => {
      const orderPrice = 
       order.paintColor.price +
       order.interior.price + 
       order.wheel.price + 
       order.technology.price 

      
      
      const formattedPrice = orderPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })

      return `<section class="order">
              <div class="custom-orders">${order.paintColor.name} car with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total cost of ${formattedPrice}</div>
              </section>`
    }
  )
  return ordersHTML.join("")
}
