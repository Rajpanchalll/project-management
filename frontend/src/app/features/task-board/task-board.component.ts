import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss'
})
export class TaskBoardComponent {
  todos: string[] = ['todo1', 'todo2', 'todo3'];
  inProgress: string[] = ['inprogress1', 'inprogress2', 'inprogress3'];
  inReview: string[] = ['inreview1', 'inreview2', 'inreview3'];
  done: string[] = ['done1', 'done2', 'done3'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const movedTask = event.container.data[event.currentIndex];
      if (event.container.id === 'todoList') {
        console.log('Moved to To Do:', movedTask);
      } else if (event.container.id === 'inProgressList') {
        console.log('Moved to In Progress:', movedTask);
      } else if (event.container.id === 'inReviewList') {
        console.log('Moved to In Review:', movedTask);
      } else if (event.container.id === 'doneList') {
        console.log('Moved to Done:', movedTask);
      }
    }
  }
}
