import { Controller } from '@nestjs/common';
import { TaskService } from './task.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @MessagePattern({ cmd: 'new_task' })
  sendTask(data: any): string {
    return this.taskService.sendNotification(data);
  }
  @MessagePattern({ cmd: 'update_task' })
  updateTask(data: any): string {
    // Lógica para atualizar uma tarefa
    return `Task with id ${data.id} updated!`;
  }
  @MessagePattern({ cmd: 'delete_task' })
  deleteTask(data: any): string {
    // Lógica para deletar uma tarefa
    return `Task with id  deleted!`;
  }
  @MessagePattern({ cmd: 'get_taskS' })
  getTasks(): string {
    return 'List of tasks';
  }
}
