const API_URL = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
  return fetch(API_URL + "/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
