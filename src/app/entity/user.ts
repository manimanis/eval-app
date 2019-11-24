export class User {
  id: number;
  username: string;
  password: string;
  usertype: string;
  fullname: string;
  created: Date;
  modified: Date;
  constructor(obj: any = {}) {
    this.id = obj.id || 0;
    this.username = obj.username || '';
    this.password = obj.password || '';
    this.usertype = obj.usertype || '';
    this.fullname = obj.fullname || '';
    this.created = new Date(obj.created) || new Date();
    this.modified = new Date(obj.modified) || new Date();
  }
}
