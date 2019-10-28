import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeedataService } from '../employeedata.service';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Output() sidebarnav = new EventEmitter();
  @Output() toggleEvent = new EventEmitter<boolean>();
  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  max = 10;
  rate = 7;
  isReadonly = false;
  visibleSidebar1;

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
  constructor(private _data:EmployeedataService) { }

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
  sidebarclick() {
    this.sidebarnav.emit();
  }

  onClickToggle() {
    this.toggleEvent.emit();
  }
  isLoggedIn(){
  return  this._data.isLoggedIn;
  }
  logout(){
    this._data.logout;
  }
}
