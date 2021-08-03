import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repoitems!: any[];  repoName:string= "bootsrap";
  constructor(private DataService: DataService) {       }
  findRepo () {    this.DataService.UpdateRepo(this.repoName);    this.DataService.searchrepos().subscribe(repo => {           this.repoitems = this.repoitems;      console.log(this.repoitems);    })  }
  ngOnInit(){    this.findRepo()  }

}
