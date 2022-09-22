import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm : FormGroup;
  match : any = {};
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
      teamone : [''],
      teamtwo : [''],
      scoreone : [],
      scoretwo : []
    })
  }
  addMAtch(){
    console.log(this.match)
    let idmatch = JSON.parse(localStorage.getItem("idmatch") || "1")
    let matchs = JSON.parse(localStorage.getItem("matchs") || "[]")
    this.match.id = idmatch
    this.match.role = "match"
    matchs.push(this.match)
    localStorage.setItem("matchs",JSON.stringify(matchs))
    localStorage.setItem("idmatch",idmatch + 1)
  }
}
