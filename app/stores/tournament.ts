import { defineStore } from 'pinia';

interface Tournament {
  id: number;
  name: string;
  description: string;
  date: string;
  category: string;
  status: 'open' | 'upcoming' | 'active' | 'completed';
  participants: number;
  duration: number;
}

interface TournamentState {
  tournaments: Tournament[];
  currentTournament: Tournament | null;
  loading: boolean;
}

export const useTournamentStore = defineStore('tournament', {
  state: (): TournamentState => ({
    tournaments: [],
    currentTournament: null,
    loading: false,
  }),

  getters: {
    upcomingTournaments: (state) =>
      state.tournaments.filter(
        (t) => t.status === 'open' || t.status === 'upcoming',
      ),

    activeTournaments: (state) =>
      state.tournaments.filter((t) => t.status === 'active'),

    completedTournaments: (state) =>
      state.tournaments.filter((t) => t.status === 'completed'),
  },

  actions: {
    async fetchTournaments() {
      this.loading = true;
      try {
        // TODO: Implement actual API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        this.tournaments = [
          {
            id: 1,
            name: 'IT Olimpiadasi 2026',
            description:
              "Dasturlash va algoritmlar bo'yicha respublika miqyosidagi turnir.",
            date: '2026-yil 25-fevral',
            category: 'Dasturlash',
            status: 'open',
            participants: 234,
            duration: 120,
          },
          {
            id: 2,
            name: 'Matematika Challenge',
            description:
              "Oliy matematika fanidan bilimlaringizni sinab ko'ring.",
            date: '2026-yil 5-mart',
            category: 'Matematika',
            status: 'open',
            participants: 156,
            duration: 90,
          },
          {
            id: 3,
            name: 'English Masters',
            description: "Ingliz tili bo'yicha test va yozma ish.",
            date: '2026-yil 15-mart',
            category: 'Ingliz tili',
            status: 'upcoming',
            participants: 0,
            duration: 60,
          },
        ];
      } catch (error) {
        console.error('Fetch tournaments error:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTournamentById(id: number) {
      this.loading = true;
      try {
        // TODO: Implement actual API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        this.currentTournament =
          this.tournaments.find((t) => t.id === id) || null;
      } catch (error) {
        console.error('Fetch tournament error:', error);
      } finally {
        this.loading = false;
      }
    },

    async joinTournament(tournamentId: number) {
      this.loading = true;
      try {
        // TODO: Implement actual API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        return { success: true };
      } catch (error) {
        console.error('Join tournament error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
