import { Component } from '@angular/core';
import { contentData } from '../../helpers/data/content';
import { teamData } from '../../helpers/data/team';
import { learnPlanningData } from '../../helpers/data/learn-planning';
import { partnersData } from '../../helpers/data/partners';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {

  data = {
    contentData, learnPlanningData, partnersData, teamData
  }
}
