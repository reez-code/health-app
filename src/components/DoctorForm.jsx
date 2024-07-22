import "../css/adminForm.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
function DoctorForm() {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch(`${BASE_URL}/categories`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) =>
  //     res
  //       .json()
  //       .then((data) => {
  //         setCategories(data);
  //       })
  //       .catch((err) => console.log(err))
  //   );
  // }, []);
  const schema = z.object({
    user_name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, { message: "Name is required" }),
    phone_number: z
      .string({
        required_error: "Phone Number must be 10 characters",
      })
      .length(10, { message: "Phone Number must be 10 characters" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, { message: "Email is required" }),
    name: z
      .string({
        required_error: "Game Name is required",
      })
      .min(1, { message: "Game Name is required" }),
    image: z
      .string({
        required_error: "Image is required",
      })
      .min(1, { message: "Image is required" })
      .url({ message: "Enter a valid image url" }),
    price: z
      .string({
        required_error: "Price is required",
      })
      .min(1, { message: "Price is required" }),
    category_id: z
      .string({
        required_error: "Category is required",
      })
      .min(1, { message: "Category is required" }),
    description: z
      .string({
        required_error: "Description is required",
      })
      .min(1, { message: "Description is required" }),
  });

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      image: "",
      price: "",
      category_id: "",
      description: "",
      password: "",
    },
  });

  //  const onSumbit = async (values) => {
  //    await fetch(`${BASE_URL}/sell`, {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({
  //        ...values,
  //        price: Number(values.price),
  //        category_id: Number(values.category_id),
  //      }),
  //    })
  //      .then((res) => res.json())
  //      .then((data) => console.log(data))
  //      .catch((err) => console.log(err));
  //  };

  return (
    <>
      <form className="form-container">
        <div className="form">
          <span className="heading">Fill the Form </span>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Name"
                  type="text"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="phone_number"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Image"
                  type="url"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Price"
                  type="number"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          {/* <Controller
            name="category_id"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Form.Select
                  aria-label="Default select example"
                  className="input"
                  {...field}
                >
                  <option>Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>

                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          /> */}

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Password"
                  type="url"
                  className="input"
                  {...field}
                />
                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <div className="button-container">
            <Button
              className="send-button"
              type="submit"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Submitting…" : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default DoctorForm;
