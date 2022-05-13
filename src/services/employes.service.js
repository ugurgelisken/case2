import axios from "axios";

export { getEmployes };

// AXIOS Config
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// GET Employes
const getEmployes = async () => {
  return await axios
    .get("employes.json", {
      headers: {},
    })
    .then((response) => response.data)
    .catch((error) => error);
};
