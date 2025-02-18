import { User } from "../interfaces/user";

// mockData.ts
export const generateMockData = (): User[] => {
    return Array.from({ length: 12 }, (_, index) => ({
      id: `${index + 1}`,
      firstname: 'Username',
      lastname: 'lastname',
      username: 'username',
      status: 'Working',
      role: 'Product manager',
      email: 'username@company.com',
      teams: ['Design', 'Product', 'Development'],
      avatar: '/api/placeholder/32/32'
    }));
  };