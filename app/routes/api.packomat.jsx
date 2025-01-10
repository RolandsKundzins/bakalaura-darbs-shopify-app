// app/routes/api/packomat.js

import { json } from "@remix-run/node";


export const action = async ({ request }) => {
  try {
    const {selected_packomat, order_id} = await request.json();

    // You can process the selected packomat here, for demonstration we'll log it
    console.log(`Received Packomat '${selected_packomat}' for order id '${order_id}'`);

    return json({ message: "Packomat received successfully!" });
  } catch (error) {
    console.error("Error processing request", error);
    return json({ error: "Failed to process packomat" }, { status: 500 });
  }
};
