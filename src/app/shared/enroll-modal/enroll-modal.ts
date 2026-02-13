// src/app/enroll-modal/enroll-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enroll-modal',
  templateUrl: './enroll-modal.html',
  styleUrls: ['./enroll-modal.css']
})
export class EnrollModal {
 
  @Input() isOpen: boolean = false;

 
  @Output() closeModalEvent = new EventEmitter<void>();


  
  public onClose(): void {
    this.closeModalEvent.emit();
  }

  /**
  
   * @param event The mouse event.
   */
 public onBackdropClick(event: MouseEvent): void {
    alert("aa")
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-backdrop')) {
        this.onClose();
    }
}
}