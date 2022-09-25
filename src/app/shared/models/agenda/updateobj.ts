export class UpdateObj {
    refProject?: String;
    nbht?: number;
  
    constructor(nbht: number, refProject: String) {
      this.nbht = nbht;
      this.refProject = refProject;
    }
  }