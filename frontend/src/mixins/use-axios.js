import axios from "@/plugins/axios";

export default function useAxios() {
  const get = async () => {
    const response = await axios.get();
    return response.data;
  };
  const post = async ({ data }) => {
    const response = await axios.post("/", data);
    return response.data;
  };
  return { get, post };
}
