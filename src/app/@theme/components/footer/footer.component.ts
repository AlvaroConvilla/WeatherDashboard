import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b>Álvaro Contreras Villa</b> 2020
    </span>
    <div class="socials">
      <a href="https://github.com/AlvaroConvilla" target="_blank" class="ion ion-social-github"></a>
      <!-- <a href="#" target="_blank" class="ion ion-social-facebook"></a> -->
      <a href="https://twitter.com/AlvaroConVilla" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/alvarocontrerasvilla/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
