import dayjs from "dayjs";
import fr from "dayjs/locale/fr";

export const extractTextFromContentfulRichText = (richText: any): string => {
  const content = richText?.raw
    ? JSON.parse(richText.raw).content
    : richText?.content;

  if (!content) {
    return "";
  }

  let extractedText = "";

  for (const paragraph of content) {
    if (paragraph.nodeType === "paragraph" && paragraph.content) {
      for (const textNode of paragraph.content) {
        if (textNode.nodeType === "text" && textNode.value) {
          extractedText += textNode.value;
        }
      }
    }
  }
  return extractedText;
};

export const formatEventDate = (dateString: string): string => {
  dayjs.locale(fr);
  const date = dayjs(dateString);

  const isMidnight = date.hour() === 0 && date.minute() === 0;

  if (
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/en")
  ) {
    if (isMidnight) {
      return date.locale("en").format("MM/DD");
    }
    return date.locale("en").format("MM/DD h:mm A");
  }

  if (isMidnight) {
    return date.format("DD/MM");
  }
  return date.format("DD/MM HH:mm");
};
