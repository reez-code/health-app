export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://health-app-backend-zo7d.onrender.com";
