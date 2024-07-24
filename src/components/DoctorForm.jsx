import "../css/adminForm.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { SERVER_URL } from "../../utils";
function DoctorForm() {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/specializations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMTczMDc4MCwianRpIjoiMGI2OWJmYzYtNjNmNC00YjUzLWJiYmYtMmJkNzZhYzU5NDc4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NDEsIm5iZiI6MTcyMTczMDc4MCwiY3NyZiI6ImVjYWY5ZTVlLTFmZGEtNDAyZS04MzBkLTYyZDgzY2QyMzVkZCIsImV4cCI6MTcyMTgxNzE4MCwicm9sZSI6ImFkbWluIn0.TIWZpe3hwEFQnOwNrnp9Z8o0geYa18narnBh_UBko4Y",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setSpecializations(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);
  const schema = z.object({
    name: z
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
    image: z
      .string({
        required_error: "Image is required",
      })
      .min(1, { message: "Image is required" })
      .url({ message: "Enter a valid image url" }),
    specialization_id: z
      .string({
        required_error: "Category is required",
      })
      .min(1, { message: "Category is required" }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, { message: "Password is required" }),
  });

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      image: "",
      specialization_id: "",
      password: "",
    },
  });

  const onSumbit = async (values) => {
    console.log(values);
    await fetch(`${SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        role: "doctor",
        specialization_id: Number(values.specialization_id),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSumbit)}>
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
            name="specialization_id"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Form.Select
                  aria-label="Default select example"
                  className="input"
                  {...field}
                >
                  <option>Select Specialisation</option>
                  {specializations.map((specialization) => (
                    <option key={specialization.id} value={specialization.id}>
                      {specialization.name}
                    </option>
                  ))}
                </Form.Select>

                {fieldState.invalid && (
                  <p className="text-danger">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  placeholder="Password"
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
