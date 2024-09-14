import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import service from "../../appwrite/config";

// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     phone: "123-456-7890",
//     address: "123 Main St",
//     city: "New York",
//     status: "Processing",
//     email: "john@example.com",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     phone: "987-654-3210",
//     address: "456 Elm St",
//     city: "Los Angeles",
//     status: "Shipped",
//     email: "jane@example.com",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     phone: "555-555-5555",
//     address: "789 Maple Ave",
//     city: "Chicago",
//     status: "Cancelled",
//     email: "alice@example.com",
//   },
// ];

const statuses = [
  "Processing",
  "Confirmed",
  "Cancelled",
  "Hold",
  "Shipped",
  "Packed",
  "Returned",
  "Refunded",
];

const Orders = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleStatusChange = (id, newStatus) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = async (id) => {
    await service.deleteOrder(id);
  };
  useEffect(() => {
    console.log(data);

    (async function () {
      const data = await service.getOrders();
      setData(Array(data.documents)[0]);
      setIsLoading(false);
    })();
  }, [handleDelete]);
  return (
    // <>test</>
    <div className="container mx-auto p-4 overflow-scroll">
      {isLoading ? (
        "Loading "
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setSelectedIds(
                      isChecked ? data.map((item) => item.id) : []
                    );
                  }}
                />
              </th>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">City</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((item) => (
              <tr
                key={item.order_id}
                className="border-b border-gray-200 hover:bg-gray-100 h-22"
              >
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.order_id)}
                    onChange={() => handleCheckboxChange(item.order_id)}
                  />
                </td>
                <td className="py-3 px-6">{item.order_id}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.phone}</td>
                <td className="py-3 px-6">{item.address}</td>
                <td className="py-3 px-6">{item.city}</td>
                <td className="py-3 px-6">{item.status}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6 space-x-2">
                  <button className="text-blue-500 hover:text-blue-700 text-md">
                    {/* Edit Icon */}
                    <GrEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 text-lg"
                    onClick={() => {
                      handleDelete(item.$id);
                    }}
                  >
                    {/* Delete Icon */}
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
