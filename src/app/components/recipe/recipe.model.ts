export class Recipe {
  public title: string;
  public short: string;
  public description: string;
  public date: string;
  public imagePath: string;

  constructor(
      title: string,
      short: string,
      description: string,
      date: string,
      imagePath: string
  ) {
    this.title = title;
    this.short = short;
    this.description = description;
    this.date = date;
    this.imagePath = imagePath;
  }
}
