import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = 'Task Tracker';
  showAddTask: boolean = false
  subscription: Subscription;

  faClose = faClose;
  faPlus = faPlus;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string): boolean {
    return this.router.url === route
  }
}
