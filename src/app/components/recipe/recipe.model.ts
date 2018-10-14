export class Recipe {
  public title: string;
  public short: string;
  public description: string;
  public date: string;
  public imagePath: string;
  public id: string;
  public ingredientsList: string[];
  public personalNotes: string;
  public instructions: string;

  constructor(
      title: string,
      short: string,
      description: string,
      date: string,
      imagePath: string,
      id: string,
      ingredientsList: string[],
      personalNotes: string,
      instructions: string
  ) {
    this.title = title;
    this.short = short;
    this.description = description;
    this.date = date;
    this.imagePath = imagePath;
    this.id = id;
    this.ingredientsList = ingredientsList;
    this.personalNotes = personalNotes;
    this.instructions = instructions
  }
}
