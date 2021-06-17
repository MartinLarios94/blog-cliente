type Item = {
    title: String;
    date: Date;
    tags: Array<String>;
    image: String;
    apparence: String;
};

export default interface MostRecentsResult {
    horizontals: Array<Item>;
    verticals: Array<Item>;
}