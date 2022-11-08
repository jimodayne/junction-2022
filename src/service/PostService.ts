import { ResponseData } from "src/constants"
import { postDemo } from "src/constants/demo"
import { getWithPath, getWithUrl } from "src/utils/http"

export type PostStatus = "draft" | "published" | "deleted"
export type PostCategory =
    | "Art"
    | "Business & Finance"
    | "Entertainment"
    | "General"
    | "Medical"
    | "Lifestyle"
    | "Media"
    | "Sports"
    | "Politics"
    | "Style"
    | "Travel"

export interface IPost {
    content?: string
    title?: string
    id?: string
    description?: string
    source?: string
    createdAt?: string
    updatedAt?: string
    thumbnail?: string
    status?: PostStatus
    category?: PostCategory
}

const PostService = {
    getList: async (params?: object): Promise<ResponseData<IPost[]>> => {
        // return await getWithUrl(
        //     "https://europe-central2-junction-hack22esp-7015.cloudfunctions.net/function-1",
        //     params,
        // )
        return Promise.resolve({
            data: postDemo,
            message: "success",
            code: 0,
        })
    },
    // getDetail: async (id: string): Promise<ResponseData<IPost>> => {
    //     return await getWithPath(`/posts/${id}`)
    // },
}

export default PostService
