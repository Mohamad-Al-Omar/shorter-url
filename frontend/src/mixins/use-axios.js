import axios from "@/plugins/axios";

export default function useAxios() {
  const get = async ({}) => await axios.get();
  const post = async ({ data }) => await axios.post("", data);
  return { get, post };
}
