import dayjs from "dayjs";
import fr from "dayjs/locale/fr";

export const extractTextFromContentfulRichText = (richText: any): string => {
  if (!richText || !richText.content) {
    return "";
  }

  let extractedText = "";

  for (const paragraph of richText.content) {
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
  return `Le ${date.format("DD MMMM YYYY")} à ${date.format("HH[h]mm")}`;
};
