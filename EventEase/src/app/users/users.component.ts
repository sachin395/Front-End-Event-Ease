import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private wowService: NgwWowService) {}

  ngOnInit() {
    // Initialize wow.js
    this.wowService.init();
  }
}

