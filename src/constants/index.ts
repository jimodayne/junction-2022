export const DOMAIN_API_URL = "https://europe-central2-junction-hack22esp-7015.cloudfunctions.net/"

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
]

export interface ResponseData<T> {
    data: T
    message: string
    total?: number
    code: number
}
