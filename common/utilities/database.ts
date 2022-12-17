import fs from 'fs-extra';

export interface IMessage {
  id: string;

  name: string;

  message: string;
}

export enum OBJECT {
  SAVED = "saved",
  SENDED = 'sended'
}

export class Database {

  private path: string;
  public data: IMessage[];

  constructor(object: string) {
    this.path = `${process.cwd()}/${object}.json`
    this.data = this.get();
  }

  save() {
    return fs.writeJSON(this.path, this.data);
  }

  private get(): IMessage[] {
    try {
      if (fs.existsSync(this.path))
        return fs.readJsonSync(this.path) || [];
      return [];
    } catch (e) {
      return [];
    }
  }
}