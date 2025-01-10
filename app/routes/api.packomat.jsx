// app/routes/api/packomat.js

import { json } from "@remix-run/node";


export const action = async ({ request }) => {
  try {
    const data = await request.json();
    const selectedPackomat = data.selectedPackomat;

    // You can process the selected packomat here, for demonstration we'll log it
    console.log("Received Packomat:", selectedPackomat);

    return json({ message: "Packomat received successfully!" });
  } catch (error) {
    console.error("Error processing request", error);
    return json({ error: "Failed to process packomat" }, { status: 500 });
  }
};
