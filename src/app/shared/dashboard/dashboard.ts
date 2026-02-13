import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../data/students';
import {SUPPORT} from '../data/staff'
import {PROFS} from '../data/staff'

import { ONLINE_CLASSES } from '../data/classes';
import { COURSES } from '../data/courses';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
  studentsCount =0;
  onlineClassesCount=0;
  staffCount=0;
  coursCount=0;
  ngOnInit(): void {
      this.studentsCount = STUDENTS.length;
      this.staffCount=SUPPORT.length + PROFS.length;
      this.onlineClassesCount=ONLINE_CLASSES.length;
      this.coursCount= COURSES.length;
  }
}
