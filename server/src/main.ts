import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from the server!" });
});

// export the app for Netlify Function
export default app;

// only listen when run directly (e.g. `npm run dev`)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () =>
    console.log(`🚀 Server listening at http://localhost:${PORT}`),
  );
}
