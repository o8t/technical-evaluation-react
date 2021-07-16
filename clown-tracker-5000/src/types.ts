export interface ClownFormDataType {
  id: string,
  name: string,
  posse: string,
  age: number,
  image: string,
}

export class Clown implements ClownFormDataType {
    id: string;
    name: string;
    posse: string;
    age: number;
    image: string;

    constructor(id = '', name = '', posse = '', age = 0, image = '') {
      this.id = id;
      this.name = name;
      this.posse = posse;
      this.age = age;
      this.image = image;
    }
}
