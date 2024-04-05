import axios from "axios";

export const getContactsApi = async () => {
  const { data } = await axios.get(
    "https://6512d783b8c6ce52b39656c7.mockapi.io/contacts"
  );

  return data;
};

export const addContactsApi = async (body) => {
  const response = await axios.post(
    "https://6512d783b8c6ce52b39656c7.mockapi.io/contacts",
    {
      ...body,
    }
  );

  return response;
};

export const deleteContactsApi = async (id) => {
  return await axios.delete(
    `https://6512d783b8c6ce52b39656c7.mockapi.io/contacts/${id}`
  );
};
