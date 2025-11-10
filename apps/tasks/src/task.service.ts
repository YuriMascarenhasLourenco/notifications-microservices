import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  sendNotification(data: any): string {
    return 'Hello World!';
  }
}
