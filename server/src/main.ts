import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";

const { TRELLO_KEY, TRELLO_TOKEN, TRELLO_BASE_URL } = process.env;

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

// Get basic board info
app.get("/api/boards/:id", async (req, res) => {
  const boardId = req.params.id;
  try {
    const trelloRes = await axios.get(`${TRELLO_BASE_URL}/boards/${boardId}`, {
      params: { key: TRELLO_KEY, token: TRELLO_TOKEN },
    });
    res.json(trelloRes.data);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get cards for a board
app.get("/api/boards/:id/cards", async (req, res) => {
  const boardId = req.params.id;
  try {
    const trelloRes = await axios.get(
      `${TRELLO_BASE_URL}/boards/${boardId}/cards`,
      { params: { key: TRELLO_KEY, token: TRELLO_TOKEN } },
    );
    res.json(trelloRes.data);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get only *your* cards on a board
app.get("/api/boards/:id/my-cards", async (req, res) => {
  const boardId = req.params.id;
  try {
    // Trello docs: GET /1/members/me/cards?key=…&token=…&idBoards=…
    const trelloRes = await axios.get(
      `${TRELLO_BASE_URL}/members/me/cards`,
      {
        params: {
          key: TRELLO_KEY,
          token: TRELLO_TOKEN,
          idBoards: boardId,
        },
      }
    );

    // This already filters to only cards where *you* are in idMembers
    res.json(trelloRes.data);
  } catch (err: any) {
    console.error("Error fetching my cards:", err);
    res.status(500).json({ error: err.message });
  }
});

