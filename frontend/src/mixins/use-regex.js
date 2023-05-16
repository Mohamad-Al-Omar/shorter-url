export default function useRegex() {
  const linkRegex =
    /^(?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-z]{2,}(?:\/[\w.-]*)*(?:\?[\w.%&+=-]+)?(?:#[\w-]*)?$/i;

  return { linkRegex };
}
