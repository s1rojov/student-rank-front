import { defineStore } from 'pinia';

interface Student {
  id: number;
  name: string;
  university: string;
  region: string;
  tournaments: number;
  points: number;
}

interface RatingState {
  students: Student[];
  totalStudents: number;
  loading: boolean;
}

export const useRatingStore = defineStore('rating', {
  state: (): RatingState => ({
    students: [],
    totalStudents: 0,
    loading: false,
  }),

  getters: {
    topStudents: (state) => state.students.slice(0, 10),
  },

  actions: {
    async fetchRating(
      page: number = 1,
      filters?: { region?: string; search?: string },
    ) {
      this.loading = true;
      try {
        // TODO: Implement actual API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        this.students = [
          {
            id: 1,
            name: 'Aziz Karimov',
            university: 'TATU',
            region: 'Toshkent',
            tournaments: 12,
            points: 2450,
          },
          {
            id: 2,
            name: 'Komila Rahimova',
            university: "O'zMU",
            region: 'Toshkent',
            tournaments: 10,
            points: 2380,
          },
          {
            id: 3,
            name: 'Jasur Toshmatov',
            university: 'SamDU',
            region: 'Samarqand',
            tournaments: 11,
            points: 2290,
          },
          {
            id: 4,
            name: 'Madina Aliyeva',
            university: 'BuxDU',
            region: 'Buxoro',
            tournaments: 9,
            points: 2150,
          },
          {
            id: 5,
            name: 'Sardor Qodirov',
            university: 'TATU',
            region: 'Toshkent',
            tournaments: 8,
            points: 2050,
          },
          {
            id: 6,
            name: 'Nilufar Xolmatova',
            university: 'FarDU',
            region: "Farg'ona",
            tournaments: 10,
            points: 1980,
          },
          {
            id: 7,
            name: 'Bekzod Nazarov',
            university: 'AndDU',
            region: 'Andijon',
            tournaments: 7,
            points: 1890,
          },
          {
            id: 8,
            name: 'Sevara Mirzayeva',
            university: 'NamDU',
            region: 'Namangan',
            tournaments: 9,
            points: 1820,
          },
          {
            id: 9,
            name: 'Otabek Yusupov',
            university: 'UrDU',
            region: 'Xorazm',
            tournaments: 6,
            points: 1750,
          },
          {
            id: 10,
            name: 'Kamila Rustamova',
            university: 'TATU',
            region: 'Toshkent',
            tournaments: 8,
            points: 1680,
          },
        ];
        this.totalStudents = 12456;
      } catch (error) {
        console.error('Fetch rating error:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
