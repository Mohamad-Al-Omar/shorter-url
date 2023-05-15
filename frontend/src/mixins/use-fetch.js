import useAxios from "./use-axios";

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
    const response = await fakeAPI();
    return response;
  };

  const getShorterLinkAPI = () => {
    get({ url });
  };

  return { createShorterLinkAPI };
}
