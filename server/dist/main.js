"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const { TRELLO_KEY, TRELLO_TOKEN, TRELLO_BASE_URL } = process.env;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/api", (_req, res) => {
    res.json({ message: "Hello from the server!" });
});
// export the app for Netlify Function
exports.default = app;
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`🚀 Server listening at http://localhost:${PORT}`));
}
// 🔹 Get board details with lists, members, labels, etc.
app.get("/api/boards/:id", async (req, res) => {
    const boardId = req.params.id;
    try {
        const boardRes = await axios_1.default.get(`${TRELLO_BASE_URL}/boards/${boardId}`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                lists: "open", // Include lists
                list_fields: "name,pos",
                members: "all", // Include members
                member_fields: "fullName,username,avatarUrl",
                labels: "all",
                label_fields: "name,color",
            },
        });
        res.json(boardRes.data);
    }
    catch (err) {
        console.error("Error fetching board details:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get all cards on a board, include checklist and attachment badges
app.get("/api/boards/:id/cards", async (req, res) => {
    const boardId = req.params.id;
    try {
        const cardsRes = await axios_1.default.get(`${TRELLO_BASE_URL}/boards/${boardId}/cards`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                fields: "name,desc,idList,idMembers,idLabels,due,start,closed,subscribed,badges",
                members: "true",
                member_fields: "fullName,username,avatarUrl",
                stickers: "true",
            },
        });
        res.json(cardsRes.data);
    }
    catch (err) {
        console.error("Error fetching cards:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get only *your* cards (assigned to you) on this board
app.get("/api/boards/:id/my-cards", async (req, res) => {
    const boardId = req.params.id;
    try {
        const myCardsRes = await axios_1.default.get(`${TRELLO_BASE_URL}/members/me/cards`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                idBoards: boardId,
                fields: "name,desc,idList,idMembers,idLabels,due,start,closed,subscribed,badges",
                badges: "true",
            },
        });
        res.json(myCardsRes.data);
    }
    catch (err) {
        console.error("Error fetching your cards:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get members of a board
app.get("/api/boards/:id/members", async (req, res) => {
    const boardId = req.params.id;
    try {
        const membersRes = await axios_1.default.get(`${TRELLO_BASE_URL}/boards/${boardId}/members`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                fields: "fullName,username,avatarUrl",
            },
        });
        res.json(membersRes.data);
    }
    catch (err) {
        console.error("Error fetching board members:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get actions (like comments) for a board
app.get("/api/boards/:id/actions", async (req, res) => {
    const boardId = req.params.id;
    try {
        const actionsRes = await axios_1.default.get(`${TRELLO_BASE_URL}/boards/${boardId}/actions`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                filter: "commentCard,updateCard,addMemberToCard,removeMemberFromCard",
                limit: 100, // Adjust as needed
            },
        });
        res.json(actionsRes.data);
    }
    catch (err) {
        console.error("Error fetching actions:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get organization (workspace) details if board has one
app.get("/api/organizations/:id", async (req, res) => {
    const orgId = req.params.id;
    try {
        const orgRes = await axios_1.default.get(`${TRELLO_BASE_URL}/organizations/${orgId}`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                fields: "name,displayName,desc,url,website",
            },
        });
        res.json(orgRes.data);
    }
    catch (err) {
        console.error("Error fetching organization:", err);
        res.status(500).json({ error: err.message });
    }
});
// 🔹 Get boards you belong to (for quick access to your boards)
app.get("/api/members/me/boards", async (req, res) => {
    try {
        const boardsRes = await axios_1.default.get(`${TRELLO_BASE_URL}/members/me/boards`, {
            params: {
                key: TRELLO_KEY,
                token: TRELLO_TOKEN,
                fields: "name,desc,url,closed,prefs",
            },
        });
        res.json(boardsRes.data);
    }
    catch (err) {
        console.error("Error fetching your boards:", err);
        res.status(500).json({ error: err.message });
    }
});
