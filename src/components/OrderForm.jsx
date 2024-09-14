import { useForm } from "react-hook-form";
import service from "../appwrite/config";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export default function OrderForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await service.createOrder(data);
    onClose();
    toast.success("Successfully toasted!");
  };

  return (
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
      {errors.name && <span className="formError">{errors.name.message}</span>}
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
      {errors.city && <span className="formError">{errors.city.message}</span>}
      {/* CITY_CLOSES */}

      {/* EMAIL */}
      <label htmlFor="email" className="orderFormLabel">
        Email <span className="text-slate-500">(optional)</span>
      </label>
      <input
        className="orderTextInput"
        id="email"
        {...register("email", {
          required: "Email is required",
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
      <br />
      <input
        type="submit"
        className="mt-4 cursor-pointer font-bold text-lg bg-purple rounded-md p-4 text-cloud w-full hover:bg-opacity-90"
        value="Place Order"
      />
    </form>
  );
}
