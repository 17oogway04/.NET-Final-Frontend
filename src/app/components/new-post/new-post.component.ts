import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arks } from 'src/app/models/arks';
import { ArkService } from 'src/app/services/ark.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{
  
  newArk: Arks = new Arks();

  constructor(private arkService: ArkService, private router: Router){}
  
  ngOnInit(): void {
  }

  addArk(){
    this.arkService.createArk(this.newArk).subscribe(()=>
    {
      window.alert("Your post has been successfully created");
      this.router.navigate(['Ark']);
    }, error => {
      console.log('Error: ', error)
      if(error.status === 401 || error.status === 403){
        this.router.navigate(['signin']);
      }
    })
  }

}
