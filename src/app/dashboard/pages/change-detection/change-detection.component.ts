import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramework()"></app-title>
  <pre>{{frameworkAsSignal() | json}}</pre>
  <pre>{{frameworkAsProperty | json}}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    ()=> `Change detection - ${this.frameworkAsSignal().name}`
  )
  public frameworkAsSignal = signal({
    name: 'Angular',
    version: '5.0.0'
  });
  public frameworkAsProperty = {
    name: 'Angular',
    version: '5.0.0'
  };

  constructor() {

    setTimeout(() => {
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }));

      console.log('Hecho');

    }, 3000);
  }



}
