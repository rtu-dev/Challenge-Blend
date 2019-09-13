import { Bier } from './../../../shared/models/bier';

export class BierParser {

  static bierParse(json: any): Bier {
    const bier = new Bier();
    bier.BierId = json['bierId'];
    bier.Name = json['name'];
    bier.Group = json['group'];
    bier.Price = json['price'];
    bier.Path = json['imgPath'];
    bier.Description = json['description'];
    return bier;
  }

}

