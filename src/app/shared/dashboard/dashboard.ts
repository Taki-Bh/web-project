import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../data/students';
import {STAFF} from '../data/staff'
import { ONLINE_CLASSES } from '../data/classes'
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
  ngOnInit(): void {
      this.studentsCount = STUDENTS.length;
      
      this.staffCount=STAFF.length;
      this.onlineClassesCount=ONLINE_CLASSES.length;

  }
}
