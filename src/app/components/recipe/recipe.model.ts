export class Recipe {
  public title: string;
  public short: string;
  public description: string;
  public date: string;
  public imagePath: string;
  public id: string;

  constructor(
      title: string,
      short: string,
      description: string,
      date: string,
      imagePath: string,
      id: string
  ) {
    this.title = title;
    this.short = short;
    this.description = description;
    this.date = date;
    this.imagePath = imagePath;
    this.id = id;
  }
}
