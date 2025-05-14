"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
const BASE_URL = process.env.TRELLO_BASE_URL;
const KEY = process.env.TRELLO_KEY;
// 3) Define the full /api/trello/data path here:
router.post("/api/trello/data", async (req, res) => {
  const { token, boardIds } = req.body;
  try {
    // fetch board names
    const names = await Promise.all(
      boardIds.map((id) =>
        axios_1.default.get(`${BASE_URL}/boards/${id}`, {
          params: { key: KEY, token, fields: "name" },
        }),
      ),
    );
    const boardNames = {};
    names.forEach((r) => (boardNames[r.data.id] = r.data.name));
    // fetch lists, cards, members per board
    const allData = await Promise.all(
      boardIds.map(async (boardId) => {
        const [listsRes, cardsRes, membersRes] = await Promise.all([
          axios_1.default.get(`${BASE_URL}/boards/${boardId}/lists`, {
            params: {
              key: KEY,
              token,
              fields: "id,name,closed,idBoard,pos",
              filter: "open",
            },
          }),
          axios_1.default.get(`${BASE_URL}/boards/${boardId}/cards`, {
            params: {
              key: KEY,
              token,
              fields:
                "id,name,desc,url,dateLastActivity,idList,idMembers,labels",
              members: "true",
              member_fields: "fullName,username,avatarUrl,initials",
            },
          }),
          axios_1.default.get(`${BASE_URL}/boards/${boardId}/members`, {
            params: {
              key: KEY,
              token,
              fields: "fullName,username,avatarUrl,initials",
            },
          }),
        ]);
        return {
          boardId,
          lists: listsRes.data,
          cards: cardsRes.data,
          members: membersRes.data,
        };
      }),
    );
    // flatten & dedupe
    const cards = allData.flatMap((d) =>
      d.cards.map((c) => ({ card: c, boardId: d.boardId })),
    );
    const lists = allData.flatMap((d) =>
      d.lists.map((l) => ({ list: l, boardId: d.boardId })),
    );
    const memberMap = new Map();
    allData.forEach((d) => d.members.forEach((m) => memberMap.set(m.id, m)));
    const members = Array.from(memberMap.values());
    res.json({ cards, lists, members, boardNames });
  } catch (err) {
    console.error("Trello error", err);
    res.status(500).json({ error: "Failed to fetch Trello data" });
  }
});
exports.default = router;
