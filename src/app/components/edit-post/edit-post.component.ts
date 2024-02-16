import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arks } from 'src/app/models/arks';
import { ArkService } from 'src/app/services/ark.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id: string = "0";

  currentArk: Arks = new Arks();

  constructor(private arkService: ArkService, private actRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = routeId;
    this.arkService.getArk(this.id).subscribe(foundArk => {
      this.currentArk = foundArk;
    })
  }

  onSubmit(){
    this.arkService.updateArk(this.id, this.currentArk).subscribe(() => {
      window.alert("Updated post successfully");
      this.router.navigate(['Ark']);
    }, error => {
      console.log('Error: ', error)
      if(error.status == 401){
        this.router.navigate(['signin']);
      }
    })
  }

}
