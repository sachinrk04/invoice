import React from "react";
import InvoicePage from "./components/InvoicePage";

function App() {
  const savedInvoice = window.localStorage.getItem("invoiceData");
  let data = null;

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice);
    }
  } catch (e) {
    console.log("catch----->", e);
  }

  const onInvoiceUpdated = (invoice) => {
    window.localStorage.setItem("invoiceData", JSON.stringify(invoice));
  };

  return (
    <div className="app">
      <h1 className="center fs-30">Invoice</h1>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  );
}

export default App;
