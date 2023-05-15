import axios from "@/plugins/axios";

export default function useAxios() {
  const get = ({ url }) => axios.get(url);
  const post = ({ url, data }) => axios.post(url, data);
  return { get, post };
}
