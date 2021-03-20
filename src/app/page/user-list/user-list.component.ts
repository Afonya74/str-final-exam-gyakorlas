import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: User[] = [];
  phrase: string = '';
  direction: number = 1;
  columnKey: string = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refreshPage();
  }

  refreshPage(): void {
    this.userService
      .getAll()
      .pipe(finalize(() => {}))
      .subscribe(() => {});
    this.userService.getAll().subscribe((items) => {
      this.users$ = items;
    });
  }

  onDelete(user: User): void {
    alert('Are you sure you want to delete this user?');
    this.userService.deleteUser(user).subscribe(() => {
      this.userService
        .getAll()
        .pipe(finalize(() => {}))
        .subscribe(() => {});
    });
    this.refreshPage();
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * -1;
    } else {
      this.direction = 1;
    }
    this.columnKey = key;
  }
}
