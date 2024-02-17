import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ArkService } from 'src/app/services/ark.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  id: string = "0";

  currentUser: User = new User()

  constructor(private arkService: ArkService, private actRoute: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    
  }
 




}
