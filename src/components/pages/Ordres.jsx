import { useEffect, useState, useCallback } from "react";
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import service from "../../appwrite/config";
import CheckoutModal from "../CheckoutModal";
import OrderForm from "../OrderForm";
import ExportCSV from "../../utils/exportCSV";

const Orders = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Control Modal
  const toggleModal = (order = null) => {
    setSelectedOrder(order);
    setIsModalOpen(!isModalOpen);
  };

  // Deleting Orders
  const handleDelete = useCallback(async (id) => {
    const deleted = await service.deleteOrder(id);
    // Optionally update the data state after deletion
    if (deleted) {
      setData((prevData) => prevData.filter((item) => item.$id !== id));
    }
  }, []);

  // single check box on/off handling
  const handleCheckboxChange = (orderId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(orderId)) {
        return prevSelectedIds.filter((id) => id !== orderId); // Uncheck
      } else {
        return [...prevSelectedIds, orderId]; // Check
      }
    });
  };

  // all check boxes on/off handling
  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectedIds(isChecked ? data.map((item) => item.order_id) : []);
  };

  // fetch all orders from Database
  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const response = await service.getOrders();
      setData(Array(response.documents)[0]); // Ensure correct data structure
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container p-4 ">
      <div className="w-full flex gap-2">
        <ExportCSV
          courier={"leopards"}
          data={data.filter((item) => selectedIds.includes(item.order_id))}
          name={"Leopards"}
        />
        <ExportCSV
          courier={"mnp"}
          data={data.filter((item) => selectedIds.includes(item.order_id))}
          name={"M&P"}
        />
      </div>
      {isLoading ? (
        "Loading "
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" onChange={handleSelectAllChange} />
              </th>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Quantity</th>
              <th className="py-3 px-6 text-left">Total</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Date</th>
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
                {/* ADDRESS */}
                <td className="py-3 px-6 relative group">
                  <span
                    className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-xs"
                    title={item.address}
                  >
                    {item.address}, {item.city}
                  </span>
                  <span className="absolute left-0 z-10 w-48 p-2 text-sm text-white bg-black rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {item.address},{item.city}
                  </span>
                </td>
                <td className="py-3 px-6">{item.quantity}</td>
                <td className="py-3 px-6">{item.price}</td>
                <td className="py-3 px-6">{item.status}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6">
                  {new Date(item.$createdAt).toLocaleDateString("en-PK")}
                </td>
                <td className="py-3 px-6 space-x-2">
                  <button
                    onClick={() => toggleModal(item)}
                    className="text-blue-500 hover:text-blue-700 text-md"
                  >
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
      {isModalOpen && (
        <CheckoutModal isOpen={isModalOpen} onClose={toggleModal}>
          <h2 className="text-xl mb-4 font-bold">Edit Order Details</h2>
          <OrderForm
            onClose={toggleModal}
            order={selectedOrder}
            fetchOrders={fetchOrders}
          />
        </CheckoutModal>
      )}
    </div>
  );
};

export default Orders;
