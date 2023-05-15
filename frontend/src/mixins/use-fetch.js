import useAxios from "./use-axios";
import { unref } from "vue";

export default function useFetch() {
  const { get, post } = useAxios();

  const fakeAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          result: {
            new_link: "https://google.com",
          },
        }),
          1000;
      });
    });
  };

  const createShorterLinkAPI = async ({ link }) => {
    const response = await post({ data: { url: unref(link) } });
    console.log("ddddddddddddd => ", response);
    return response;
  };

  const getShorterLinkAPI = () => {
    get({ url });
  };

  return { createShorterLinkAPI };
}
