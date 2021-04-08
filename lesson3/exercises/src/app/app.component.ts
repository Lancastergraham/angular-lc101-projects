import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  takeOffButtonDecision() {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
      this.takeOffConfirmed();
    } else {
      this.takeOffFail();
    }
  }

  landButtonAlert(rocketImage){
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = !this.takeOffEnabled
  }

  abortButtonDecision(rocketImage) {
    if (window.confirm("Confirm that you really want to abort the mission.")) {
      this.abortTrue(rocketImage);
    } 
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.rocketCheck(this.width, this.height)
 }

  private abortTrue(rocketImage) {
    this.message = "Mission aborted.";
    this.color = "red";
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = !this.takeOffEnabled
  }

  rocketCheck(width, height){
    if (width > 240000 || width < 0 || height < 0 || height >= 330000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  private takeOffFail() {
    this.message = "Space shuttle ready for takeoff!";
    this.color = "green";
    this.height = 0;
  }

  private takeOffConfirmed() {
    this.message = "Shuttle in flight";
    this.color = "blue";
    this.height = 10000;
    this.takeOffEnabled = !this.takeOffEnabled
  }
}
