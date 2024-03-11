import { Category } from "../../category/models/category.model";

export interface Newsletter{
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    categories: Category[];
}