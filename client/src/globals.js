export const BASE_API_URI =
  process.env.NODE_ENV === 'production'
    ? window.location.origin
    : 'http://localhost:3001/api/';
