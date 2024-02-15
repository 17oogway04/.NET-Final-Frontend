export class Arks {
    arkId?: string;
    name?: string;
    content?: string;
    location?: string;
    imgUrl?: string;

    constructor(id?: string, name?: string, content?: string, location?: string, imgUrl?: string)
    {
        this.arkId = id;
        this.name = name;
        this.content = content;
        this.location = location;
        this.imgUrl = imgUrl;
    }
}
