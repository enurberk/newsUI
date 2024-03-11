export interface AddNewsletter {
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    categories: string[];
}