import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() color: string = "";
  @Input() text: string = "";
  @Input() icon?: any;

  constructor(
    private uiService: UiService
  ) { }

  onButtonToggle() {
    this.uiService.toggleAddTask()
  }
}
