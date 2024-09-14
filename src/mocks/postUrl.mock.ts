//https://limitless-caverns-66680-20d525e8d29f.herokuapp.com/api/vi/site/$id

export interface PostUrlRequest {
    url: string;
}

export interface PostUrlResponse {
    sc_id: string;
}

export const postInformationUrl: PostUrlRequest = {
    url: "https://cobre.co"
}

