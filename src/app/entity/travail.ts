import { User } from './user';

export class Travail {
  id: number;
  numero: number;
  titre: string;
  type: string;
  codeSource: string;
  remarques: string;
  dateEnvoi: Date;
  userId: number;
  adresseIp: string;
  modifiable: boolean;
  created: Date;
  modified: Date;
  user: User;

  languages = {
    'language-algorithm': 'Algorithme',
    'language-python': 'Python'
  };

  get typeName() {
    return this.languages[this.type];
  }

  set typeName(val) {
    const entry = Object.entries(this.languages).filter(lang => lang[1] === val);
    if (entry.length > 0) {
      this.type = entry[0][0];
    } else {
      this.type = val;
    }
  }

  constructor(obj: any = {}) {
    this.id = obj.id || 0;
    this.numero = obj.numero || 0;
    this.titre = obj.titre || '';
    this.type = obj.type || 'language-algorithm';
    this.codeSource = obj.codeSource || '';
    this.remarques = obj.remarques || '';
    this.dateEnvoi = new Date(obj.dateEnvoi) || new Date();
    this.userId = obj.userId || 0;
    this.adresseIp = obj.adresseIp || '';
    this.modifiable = obj.modifiable || false;
    this.created = new Date(obj.created) || new Date();
    this.modified = new Date(obj.modified) || new Date();
    this.user = obj.user || null;
  }
}
