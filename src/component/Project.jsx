export default class Project{
    name=""
    description=""
    imageUrl=""
    budget=0

constructor(initializer){
    this.id = initializer.id;
    this.name = initializer.name;
    this.description = initializer.description;
    this.imageUrl = initializer.imageUrl;
    this.budget = initializer.budget;
}

}