interface BlogImage {
    Content: String;
    Orientation: String;
}

export default interface Blog {
    Title: String;
    Excerpt: String;
    Author: String;
    Tag: String;
    Image: BlogImage;
    createdAt: String;
    Views: Number;
    Likes: Number;
}
