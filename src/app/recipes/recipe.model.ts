export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, decription: string, imagePath: string){
        this.name = name;
        this.description = decription;
        this.imagePath = imagePath;
    }
}