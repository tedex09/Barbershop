const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const config = {
  api: {
    baseUrl: API_BASE_URL,
    timeout: 30000,
  },
};
