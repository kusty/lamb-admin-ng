import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  @Input() account;
  @Input() password;
  returnUrl: Array<any> = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private noticeService: NotificationsService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.returnUrl.push(params['returnUrl'] || '/');
    });
  }

  login() {
    console.log(this.account)
    if (!this.account || !this.password) {
      this.noticeService.error('', '账号或密码不能为空');
      return false;
    }
    this.userService.userLogin({
      account: this.account,
      password: this.password,
      role: 's'
    }).subscribe((res) => {
      if (res.status === 200) {
        this.userService.storageUserInfo(JSON.stringify(res.body));
        this.router.navigate(this.returnUrl);
      }
    });
  }

}
