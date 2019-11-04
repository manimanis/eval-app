import { Code } from './code';

export class Lecon {
  id: number;
  titre: string;
  description: string;
  images: string[];
  codes: Code[];

  constructor(obj: any = {}) {
    this.id = obj.id || 0;
    this.titre = obj.titre || '';
    this.description = obj.description || '';
    this.images = obj.images || [];
    this.codes = obj.codes || [];
    this.codes = this.codes.map(code => new Code(code));
  }
}
