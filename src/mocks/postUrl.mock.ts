//https://limitless-caverns-66680-20d525e8d29f.herokuapp.com/api/vi/site/$id

export interface PostUrlRequest {
    url: string;
}

export interface PostResponseUrl {
    sc_id:                   string;
    content:                 string;
    companyInsights:         string;
    companyExplanationPitch: string;
    videoSegments:           VideoSegments;
    logos:                   Logos;
    status:                  string;
    audioText:               string;
    videoPromptText:         string;
}

export interface Logos {
    logo: null;
}

export interface VideoSegments {
    segments: Segment[];
}

export interface Segment {
    script:  string;
    visuals: string;
}

export const postInformationUrl: PostUrlRequest = {
    url: "https://cobre.co"
}

