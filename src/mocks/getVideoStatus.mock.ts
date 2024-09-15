//https://limitless-caverns-66680-20d525e8d29f.herokuapp.com/api/vi/site/$id

export interface VideoStatusResponse {
    sc_id: string;
    status: "SEARCHING" | "PROCESSING" | "READY" | "ERROR";
    content: string;
    video_url: string;
    logo_url: string;
}

export const getVideoStatusMock: VideoStatusResponse = {
    sc_id: "example-sc-id",
    status: "SEARCHING",
    content: "This will be a mark down text",
    video_url: "https://youtube.com",
    logo_url: "https://cobre.co/logo.png",
}