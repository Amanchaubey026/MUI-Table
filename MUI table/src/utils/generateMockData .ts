import { User } from "../interfaces/user";

// mockData.ts
// Mock Data Generator
export const generateMockData = (): User[] => {
    return Array.from({ length: 100 }, (_, index) => ({
      id: `${index + 1}`,
      firstname: 'Username',
      lastname: 'lastname',
      username: 'username',
      status: 'Working',
      role: 'Product manager',
      email: 'username@company.com',
      teams: ['Design', 'Product', 'Development'],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${index}`
    }));
  };