// export const SERVER_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000" ? "whatever url will get when hosting "



export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8500"
    : "https://health-app-backend-zo7d.onrender.com";