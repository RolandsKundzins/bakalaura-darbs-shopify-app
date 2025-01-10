import { reactExtension, BlockStack, Text, Select, Spinner, useApi } from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";

// Saraksts ar pakomātu atrašanās vietām
const parcelMachines = [
  { value: "machine_1", label: "Parcel Machine 1 - Main Street 123" },
  { value: "machine_2", label: "Parcel Machine 2 - Elm Street 456" },
  { value: "machine_3", label: "Parcel Machine 3 - Oak Avenue 789" },
];

// Lokācija, kurā novietot paplašinājumu - šajā gadījuma tas ir "pec-apmaksas lapā"
export default reactExtension("purchase.thank-you.block.render", () => (
  <Extension />
));

function Extension() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [loading, setLoading] = useState(false);

  const shopify_data = useApi();

  // Apstrādā izvēlētā pakomāta izmaiņas
  const handleSelectionChange = async (value) => {
    setSelectedMachine(value);
    setLoading(true); // gaida atbildi no servera


    const order_id = shopify_data.orderConfirmation.current.order.id // pasūtījuma identifikators
    console.log(`Order id: ${order_id}`);
    console.log("Selected Parcel Machine:", value);

    try {
      // Nosūta POST pieprasījumu uz failu "/app/routes/api.pacomat.jsx"
      const SERVER_URL = "https://finds-briefs-tap-focused.trycloudflare.com"
      await fetch(`${SERVER_URL}/api/packomat`, { //Shopify neatļauj vides mainīgos (angliski: environment variables) priekš Checkout UI Extensions
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          selected_packomat: value,
          order_id: order_id,
        }), // nosūta pakomāta un pasūtījuma identifikatora vērtību
      });
    } catch (error) {
      console.error("Error sending packomat data:", error);
    } finally {
      setLoading(false); // atbilde no servera saņemta
    }
  };

  return (
    <BlockStack
      border="base" // robeža
      borderWidth="medium" // robežas biezums
      cornerRadius="base" // robežas malu radiuss
      padding="tight" // iekšējo elementu atkāpes no robežas malām
    >
      <Text>Select a parcel machine for your order:</Text>
      <Select
        label="Parcel Machines"
        options={parcelMachines}
        value={selectedMachine}
        onChange={handleSelectionChange}
      />
      {loading ? (
        <Spinner /> // lādēšanās indikators
      ) : (
        selectedMachine && (
          <Text>
            Thank you! We will start working right away
          </Text>
        )
      )}
    </BlockStack>
  );
}
