import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ProjectService } from "src/app/shared/service/project/project.service";
@Component({
  selector: "app-project-add-project",
  templateUrl: "./project-add-project.component.html",
  styleUrls: ["./project-add-project.component.scss"],
})
export class ProjectAddProjectComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  choicelist = ["validé", "en cours", "en test ", "en panne", "livré"];
  alert: boolean = false;
  alertmsg: String;
  typealert: String;
  form!: FormGroup;
  disableSelect = new FormControl(false);
  startDate = new Date(2022, 1, 1);
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      refProject: [null, Validators.required],
      nameProject: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      price: [null, Validators.required],
      cost: [null, Validators.required],
      state: [null, Validators.required],
    });
  }

  reset() {
    this.form.reset();
    this.formDirective.resetForm();
    // this.searchoptions.emit(null);
  }

  validate() {
    this.projectService.postProject(this.form.value).subscribe(
      (response) => {
        if (response["code"] == "200") {
          // alert("Successfully Added")
          console.log(this.form.value)
          this.form.reset();
          this.formDirective.resetForm();
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
  }

  closeAlert() {
    this.alert = false;
  }
}
