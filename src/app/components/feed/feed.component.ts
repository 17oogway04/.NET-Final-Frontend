import { Component, OnInit } from '@angular/core';
import { Arks } from 'src/app/models/arks';
import { User } from 'src/app/models/user';
import { ArkService } from 'src/app/services/ark.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  
  feedList: Arks[] = [];
  user: User = new User();

  constructor(private arkService: ArkService){}

  ngOnInit(): void {
    this.loadFeed();
  }

  onDelete(arkId: string){
    this.arkService.deleteArk(arkId).subscribe(() => {
      window.alert("Deleted and never to return");
      this.loadFeed();
    })
  }

  loadFeed(){
    this.arkService.getAllArks().subscribe(feed => {
      this.feedList = feed;
    })
  }

}
