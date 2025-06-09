import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useTrello() {
  const activeBoardsCount = ref(0);
  const tasksCompletedCount = ref(0);

  const fetchDashboardStats = async () => {
    try {
      // 🔹 Fetch your boards
      const boardsRes = await axios.get('/api/members/me/boards');
      const activeBoards = boardsRes.data.filter((board: any) => !board.closed);
      activeBoardsCount.value = activeBoards.length;

      // 🔹 Fetch cards from each board and count "Done" cards
      let completedTasks = 0;
      for (const board of activeBoards) {
        const cardsRes = await axios.get(`/api/boards/${board.id}/cards`);
        // Find lists named "Done" (you might tweak this logic for your setup!)
        const doneLists = new Set(
          (board.lists || [])
            .filter((list: any) => /done/i.test(list.name))
            .map((list: any) => list.id)
        );

        // Count cards in those lists
        completedTasks += cardsRes.data.filter((card: any) => doneLists.has(card.idList)).length;
      }
      tasksCompletedCount.value = completedTasks;
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    }
  };

  onMounted(fetchDashboardStats);

  return {
    activeBoardsCount,
    tasksCompletedCount,
  };
}
