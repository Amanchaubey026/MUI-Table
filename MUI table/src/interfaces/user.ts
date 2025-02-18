// types.ts
export interface User {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    status: 'Working' | 'Offline' | 'Online';
    role: string;
    email: string;
    teams: string[];
    avatar: string;
  }