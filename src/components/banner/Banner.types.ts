export interface BannerProps {
  /**
   * Contentful Rich Text structure for description
   */
  description: ContentfulRichText;
  /**
   * The name of the banner
   */
  name: string;
  /**
   * Is visible or not
   */
  visibility: boolean;
  /**
   * Date of event
   */
  date: string;
  /**
   * Link for subscribe
   */
  link?: string;
}

/**
 * Represents the structure of Contentful Rich Text.
 * This is a simplified representation based on the provided JSON.
 */
export interface ContentfulRichText {
  data: object;
  content: RichTextContent[];
  nodeType: "document";
}

export interface RichTextContent {
  data: object;
  content: RichTextNode[];
  nodeType: "paragraph" | "text";
}

export interface RichTextNode {
  data: object;
  marks: any[];
  value?: string;
  nodeType: "text";
}
