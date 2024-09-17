/* eslint-disable react/prop-types */
import { CSVLink } from "react-csv";
import { productTitle } from "../constants/content";
function ExportCSV({ courier, data, name }) {
  if (courier === "leopards") {
    // console.log(data);

    const cols = {
      shipperName: "Baffa",
      shipperPhone: "03177827043",
      shipperAddress: "Muhallah KhwajaKheli Bala, Baffa",
      shipperEmail: "info@baffa.pk",
      "Origin City Name": "Mansehra",
      consigneeName: "consigneeName",
      consigneeEmail: "consigneeEmail",
      consigneePhone: "consigneePhone",
      consigneeAddress: "consigneeAddress",
      "Destination City Name": "Destination CityName",
      bookedPacketCollectAmount: "bookedPacketCollectAmount",
      bookedpacketorderid: "bookedpacketorderid",
      ProductDescription: "Handle With Care",
      bookedPacketWeight: "1300",
      shipment_type: "detain",
      numberOfPieces: "1",
      return_city: "Mansehra",
      return_address: "Khwaja Kheli Bala, Baffa",
    };

    let csvData = data?.map((item) => {
      return [
        cols.shipperName,
        cols.shipperPhone,
        cols.shipperAddress,
        cols.shipperEmail,
        cols["Origin City Name"],
        item.name,
        item.email,
        item.phone,
        item.address,
        item.city,
        item.price,
        item.order_id,
        cols.ProductDescription,
        cols.bookedPacketWeight,
        cols.shipment_type,
        cols.numberOfPieces,
        cols.return_city,
        cols.return_address,
      ];
    });

    csvData = [Object.keys(cols), ...csvData];

    return (
      <>
        <CSVLink
          data={csvData}
          className="bg-yellow-500 text-slate-700 py-2 px-5 rounded-md mb-2 hover:bg-opacity-80 transition duration-300"
        >
          Download Leopards Sheet
        </CSVLink>
      </>
    );
  }
  if (courier === "mnp") {
    // console.log(data);

    const cols = {
      ConsigneeName: "ConsigneeName",
      ConsigneeAddress: "consigneeAddress",
      ConsigneeMobileNumber: "consigneePhone",
      ConsigneeEmail: "consigneeEmail",
      DestinationCity: "Destination CityName",
      Pieces: "1",

      Weight: "1",
      CODAmount: "bookedPacketCollectAmount",
      CustomerReferenceNumber: "bookedpacketorderid",
      SpecialHandling: "No",
      ServiceType: "Overnight",
      ProductDetails: productTitle,
      Remarks: "Handle With Care",
    };

    let csvData = data?.map((item) => {
      return [
        item.name,
        item.address,
        item.phone,
        item.email,
        item.city,
        cols.Pieces,
        cols.Weight,
        item.price,
        item.order_id,
        cols.SpecialHandling,
        cols.ServiceType,
        cols.ProductDetails,
        cols.Remarks,
      ];
    });

    csvData = [Object.keys(cols), ...csvData];

    return (
      <>
        <CSVLink
          data={csvData}
          className="bg-[#E25A0C] text-slate-200 py-2 px-5 rounded-md mb-2 hover:bg-opacity-80 transition duration-300"
        >
          Download {name} Sheet
        </CSVLink>
      </>
    );
  }
}

export default ExportCSV;

// shipperName	shipperPhone	shipperAddress	shipperEmail	Origin City Name		bookedPacketWeight	shipment_type	numberOfPieces	return_city	return_address ProductDescription
// consigneeName consigneeEmail	consigneePhone	consigneeAddress	Destination CityName	bookedPacketCollectAmount	bookedpacketorderid
