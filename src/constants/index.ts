export const DOMAIN_API_URL = "http://localhost:3000/api";

export const TOPICS = [
    "Art",
    "Business & Finance",
    "Entertainment",
    "General",
    "Medical",
    "Lifestyle",
    "Media",
    "Sports",
    "Politics",
    "Style",
    "Travel",
];

export interface ResponseData<T> {
    data: T;
    message: string;
    total?: number;
    code: number;
}
