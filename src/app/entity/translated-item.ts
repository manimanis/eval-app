export class TranslatedItem {
  id: number;
  categorie: string;
  sousCategorie: string;
  titre: string;
  algorithme: string;
  python: string;
  keywords: string[];

  constructor(obj: any = {}) {
    this.id = obj.id || 0;
    this.categorie = obj.categorie || '';
    this.sousCategorie = obj.sousCategorie || '';
    this.titre = obj.titre || '';
    this.algorithme = obj.algorithme || '';
    this.python = obj.python || '';
    this.keywords = obj.keywords || [];
  }

  contains(keywords: string) {
    const txt = this.keywords.join(' ');
    return txt.toLocaleLowerCase().indexOf(keywords) !== -1;
  }
}
