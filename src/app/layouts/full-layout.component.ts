import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public options = {
    position: ['top', 'right'],
    timeOut: 5000,
    lastOnBottom: true,
    showProgressBar: false,
    icons: {
      success: '',
      error: '',
      info: '',
      warn: '',
      alert: ''
    }
  }

  constructor(private userService: UserService, private router: Router) {

  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void { }

  logout() {
    this.userService.clearUserInfo();
    this.router.navigate(['/user/login'])
  }
}