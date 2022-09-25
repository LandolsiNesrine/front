import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  Inject,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectsTableComponent } from "../projects-table/projects-table.component";
import { ProjectService } from "src/app/shared/service/project/project.service";
@Component({
  selector: "app-dialogue",
  templateUrl: "./dialogue.component.html",
  styleUrls: ["./dialogue.component.scss"],
})
export class DialogueComponent implements OnInit {
  @Output() searchoptions = new EventEmitter<Partial<any>>();
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  choicelist = ["validé", "en cours" ,"en test ", "en panne", "livré"];

  disableSelect = new FormControl(false);
  form!: FormGroup;
  obj;
  alert: boolean = false;
  alertmsg: String;
  typealert: String;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.obj = data;
    //console.log(data);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      codeProject: [this.obj.codeProject],
      refProject: [this.obj.refProject],
      startDate:[this.obj.startDate],
      nameProject: [this.obj.nameProject],
      endDate: [this.obj.endDate],
      price: [this.obj.price],
      cost: [this.obj.cost],
      state: [this.obj.state],
    });
  }

  getFormControl(key: any) {
    return this.form.get(key) as FormControl;
  }

  reset() {
    this.form.reset();
    this.formDirective.resetForm();
    this.searchoptions.emit(null);
  }

  update() {
    this.projectService.putProject(this.form.value).subscribe(
      (response) => {
        if (response["code"] == "200") {
          this.alert = true;
          this.alertmsg = "Success !";
          this.typealert = "alert alert-success ";
        } else {
          this.alert = true;
          this.typealert = "alert alert-danger";
          this.alertmsg = "Erreur interne du systéme !";
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeAlert() {
    this.alert = false;
  }
}
