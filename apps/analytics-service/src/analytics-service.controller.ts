import { Controller, Get } from '@nestjs/common';
import { AnalyticsServiceService } from './analytics-service.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AnalyticsServiceController {
  constructor(
    private readonly analyticsServiceService: AnalyticsServiceService,
  ) {}

  @EventPattern({ CMD: 'task_completed' })
  handleTaskCompleted(data: any) {
    console.log(`Task completed with id: ${data.id}`);
  }
  @EventPattern({ CMD: 'task_deleted' })
  handleTaskDeleted(data: any) {
    console.log(`Task deleted with id: ${data.id}`);
  }
}
