export class AgendaData {
    refProject?: String;
    nameProject?: String;
    heure_debut?: String;
    heure_fin?: String;
    commentaire?: String;
    jour?: String;
    tache?: String;
    nbht?: number;
    username?: String;
  
    constructor(
      refProject: String,
      nameProject: String,
      heure_debut: String,
  
      heure_fin: String,
      commentaire: String,
      jour: String,
      tache: String,
      nbht: number,
      username: String
    ) {
      this.refProject =refProject;
      this.nameProject = nameProject;
      this.heure_debut = heure_debut;
      this.heure_fin = heure_fin;
      this.commentaire = commentaire;
      this.jour = jour;
      this.tache = tache;
      this.nbht = nbht;
      this.username = username;
    }
  }