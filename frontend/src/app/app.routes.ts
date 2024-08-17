import { Routes } from '@angular/router';
import { TaskBoardComponent } from './features/task-board/task-board.component';
import { TaskDetailModalComponent } from './features/task-detail-modal/task-detail-modal.component';

export const routes: Routes = [
      { path: '', redirectTo: '/task-board', pathMatch: 'full' },
      { path: 'task-board', component: TaskBoardComponent },
      { path: 'task-detail/:id', component: TaskDetailModalComponent },
      { path: '**', redirectTo: '/task-board' }
];
