import {ResponseData} from "src/constants";
import {getWithPath} from "src/utils/http";

export type PostStatus = "draft" | "published" | "deleted";
export type PostCategory = "sport" | "business" | "entertainment" | "health" | "art" | "culture" | "politics";

export interface IPost {
    content: string;
    title: string;
    id: string;
    description: string;
    source: string;
    createdAt: string;
    updatedAt: string;
    status: PostStatus;
    category: PostCategory;
}

const PostService = {
    getList: async (params?: object): Promise<ResponseData<IPost[]>> => {
        return await getWithPath("/posts", params);
    },
    getDetail: async (id: string): Promise<ResponseData<IPost>> => {
        return await getWithPath(`/posts/${id}`);
    },
};

export default PostService;
