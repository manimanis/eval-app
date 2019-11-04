export class Code {
  codeId: number;
  titre: string;
  description: string;
  langage: string;
  code: string;
  images: string[];

  constructor(obj: any = {}) {
    this.codeId = obj.codeId || 0;
    this.titre = obj.titre || '';
    this.description = obj.description || '';
    this.langage = obj.langage || '';
    this.code = obj.code || '';
    this.images = obj.images || [];
  }
}
