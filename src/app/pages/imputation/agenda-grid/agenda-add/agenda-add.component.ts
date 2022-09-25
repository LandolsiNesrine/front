import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AgendaData } from "src/app/shared/models/agenda/agenda";
import { UpdateObj } from "src/app/shared/models/agenda/updateObj";
import { AgednaService } from "src/app/shared/service/agenda/agenda.service";
import { ProjectService } from "src/app/shared/service/project/project.service";
@Component({
  selector: "app-agenda-add",
  templateUrl: "./agenda-add.component.html",
  styleUrls: ["./agenda-add.component.scss"],
})
export class AgendaAddComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  tachelist = ["UI", "TEST", "JAVA DEV", "FRONT DEV", "DB DEV"];
  projectref=["ref-80", "ref-45"];
  projectlist = ["project1", "project2"];
  alert: boolean = false;
  alertmsg: String;
  typealert: String;
  form!: FormGroup;
  disableSelect = new FormControl(false);
  today = new Date();
  val : number =1140;
  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgednaService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      refProject: ["", Validators.required],
      nameProject: ["", Validators.required],
      heure_debut: ["8:00 AM", Validators.required],
      heure_fin: ["15:00 PM", Validators.required],
      commentaire: [null, Validators.required],
      jour: [this.today, Validators.required],
      tache: ["", Validators.required],
    });
  }

  //calcul des nombres dH
  calucul(nbf: string, nbd: string) {
    if (nbf[nbf.length - 2] == "P") {
      var nbfh = (parseInt(nbf) + 12) * 60;
    } else nbfh = parseInt(nbf) * 60;
    if (nbd[nbd.length - 2] == "P") {
      var nbdh = (parseInt(nbf) + 12) * 60;
    } else nbdh = parseInt(nbd) * 60;

    var nb1 =
      nbfh + parseInt(nbf[nbf.length - 5]) * 10 + parseInt(nbf[nbf.length - 4]);
    var nb2 =
      nbdh + parseInt(nbd[nbd.length - 5]) * 10 + parseInt(nbd[nbd.length - 4]);

    return nb1 - nb2;
  }

  reset() {
    this.form.reset();
    this.formDirective.resetForm();
  }
  setAegnda() {
    return new AgendaData(
      //getrefProjectfrom ProfileService
      this.form.value.refProject,
      this.form.value.nameProject,
      this.form.value.heure_debut,
      this.form.value.heure_fin,
      this.form.value.commentaire,
      this.form.value.jour,
      this.form.value.tache,
      this.calucul(this.form.value.heure_fin, this.form.value.heure_debut),
      //getusernamefromProfileService
      "admin"
    );
  }



  setUpdateObj() {
    return new UpdateObj(
      this.calucul(this.form.value.heure_fin, this.form.value.heure_debut),
      this.form.value.refProject
    );
  }

  validate() {
    this.agendaService.postagenda(this.setAegnda()).subscribe(
      (response) => {
        if (response["code"] == "200") {
          this.setVal();

          this.alert = true;
          this.alertmsg = "Success !Your data has been entred successfuly.";
          this.typealert = "alert alert-success ";
        } else {
          console.log("error");
          this.alert = true;
          this.typealert = "alert alert-danger";
          this.alertmsg = " Remplir correctement le formulaire !";
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.projectService.putProjectByRef(this.setUpdateObj()).subscribe(
      (response) => {
        if (response["code"] == "200") {
          console.log(this.setUpdateObj());
        } else {
          console.log("error");
          console.log(this.setUpdateObj());
        }
      },
      (error) => {
        console.log(error);
        console.log(this.setUpdateObj());
      }
    );
  }
  setVal(){
    return this.val=this.calucul(this.form.value.heure_fin, this.form.value.heure_debut)
  }

  closeAlert() {
    this.alert = false;
    this.form.reset();
    this.formDirective.resetForm();
  }
}
