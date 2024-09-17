/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { LoaderIcon } from "react-hot-toast";
export default function OrderForm({ onClose, order, fetchOrders }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [orderLoading, setOrderLoading] = useState(false);

  const toggleOrderLoading = () => {
    setOrderLoading((prev) => !prev);
  };
  const OrderStatusEnum = [
    "Processing",
    "Confirmed",
    "Cancelled",
    "Shipped",
    "Packed",
    "Hold",
    "Returned",
    "Refunded",
  ];

  // Effect to reset form values whenever the order prop changes
  useEffect(() => {
    if (order) {
      reset({
        order_id: order.order_id || "",
        name: order.name || "",
        phone: order.phone || "",
        address: order.address || "",
        city: order.city || "",
        email: order.email || "",
        status: order.status || "Processing",
        quantity: order.quantity || 1,
        price: order.price || 1,
      });
    }
  }, []);
  // console.log("ORDER FORM OPENED", order.status);
  let quantity = useSelector((state) => state.quantity.quantity);
  if (quantity === "") {
    quantity = 1;
  }

  const onSubmit = async (data) => {
    toggleOrderLoading();
    if (order) {
      await service.updateOrder(order.$id, { ...data });
      fetchOrders();
      toggleOrderLoading();
    } else {
      await service.createOrder({ ...data, quantity });
      toggleOrderLoading();
    }

    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <label htmlFor="name" className="orderFormLabel">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          className="orderTextInput"
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="formError">{errors.name.message}</span>
        )}
        {/* NAME_CLOSES */}

        {/* PHONE */}
        <label htmlFor="phone" className="orderFormLabel">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          className="orderTextInput"
          type="text"
          id="phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
              message: "Invalid phone number",
            },
          })}
        />
        {errors.phone && (
          <span className="formError">{errors.phone.message}</span>
        )}
        {/* PHONE_CLOSES */}

        {/* ADDRESS */}
        <label htmlFor="address" className="orderFormLabel">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          className="orderTextInput"
          type="text"
          id="address"
          {...register("address", {
            required: "Address is required",
          })}
        />
        {errors.address && (
          <span className="formError">{errors.address.message}</span>
        )}
        {/* ADDRESS_CLOSES */}

        {/* CITY */}
        <label htmlFor="city" className="orderFormLabel">
          City <span className="text-red-500">*</span>
        </label>

        <input
          className="orderTextInput"
          type="text"
          id="city"
          {...register("city", {
            required: "City is required",
          })}
        />
        {errors.city && (
          <span className="formError">{errors.city.message}</span>
        )}
        {/* CITY_CLOSES */}

        {/* EMAIL */}
        <label htmlFor="email" className="orderFormLabel">
          Email <span className="text-slate-500">(optional)</span>
        </label>
        <input
          className="orderTextInput"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="formError">{errors.email.message}</span>
        )}
        {/* EMAIL_CLOSES */}

        {order && (
          <div>
            {/* PRICE */}
            <label htmlFor="price" className="orderFormLabel">
              Price<span className="text-red-500">*</span>
            </label>
            <input
              className="orderTextInput"
              id="price"
              {...register("price", {
                required: "Price is Required",
                validate: {
                  isInteger: (value) =>
                    Number.isInteger(Number(value)) ||
                    "Input must be an integer",
                },
              })}
            />
            {errors.price && (
              <span className="formError">{errors.price.message}</span>
            )}
            {/* PRICE_ClOSES */}

            {/* QUANTITY */}
            <label htmlFor="quantity" className="orderFormLabel">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="orderTextInput"
              id="quantity"
              {...register("quantity", {
                required: {
                  message: "Quantity is Required",
                },
              })}
            />
            {quantity.price && (
              <span className="formError">{errors.quantity.message}</span>
            )}
            {/* QUANTITY_ClOSES */}

            {/* STATUS */}
            <label htmlFor="status" className="orderFormLabel">
              Order Status:
            </label>
            <select
              id="status"
              className="orderTextInput"
              {...register("status", {
                required: "Please select an order status",
              })}
            >
              <option value="">Select status</option>
              {OrderStatusEnum.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && (
              <span className="formError">{errors.status.message}</span>
            )}
            {/* STATUS_ClOSES */}
          </div>
        )}

        <br />
        <button
          type="submit"
          className={`mt-4 font-bold text-lg rounded-md text-cloud p-4 w-full hover:bg-opacity-90 bg-purple ${
            orderLoading ? "cursor-not-allowed" : "cursor-pointer "
          }`}
          disabled={orderLoading}
        >
          {orderLoading ? (
            <span className="flex items-center justify-center h-7">
              <LoaderIcon />
            </span>
          ) : order ? (
            "Update Order"
          ) : (
            "Place Order"
          )}
        </button>
      </form>
    </>
  );
}
