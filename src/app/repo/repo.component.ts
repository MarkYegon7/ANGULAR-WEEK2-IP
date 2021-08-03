import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  user: any;
  userRepos:any;
  username: string = 'MarkYegon7'
  imageWidth: number = 150;
  imageHeight: number = 200;
constructor(private DataService: DataService) {}
  findUser () {
    this.DataService.UpdateUser(this.username);
    this.DataService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.DataService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }
  ngOnInit(){
    this.findUser()
  }
}
