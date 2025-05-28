const API_URL = import.meta.env.VITE_API_URL;

interface RegisterSchemaType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const register = async (input: RegisterSchemaType) => {
  return fetch(API_URL + "/register", {
    method: "POST",
    body: JSON.stringify({
      ...input,
      name: `${input.firstName} ${input.lastName}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};