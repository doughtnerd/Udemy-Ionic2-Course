import {Component} from "@angular/core";
@Component({
  selector: 'app-touch-event',
  template: `
    <div class="gestures" (click)="onElementClicked()">
      Click Me
    </div>
    <div class="gestures" (tap)="onElementTapped()">
      Tap Me
    </div>
    <div class="gestures" (press)="onLongPress()" (tap)="onElementClicked()">
      Long Press Me
    </div>
  `
})
export class TouchEventComponent {

  onClick() {
    console.log('click');
  }

  onElementClicked() {
    console.log('I was clicked or touched.');
  }

  onElementTapped() {
    console.log('I was tapped');
  }

  onLongPress() {
    console.log('I was long pressed');
  }

}
