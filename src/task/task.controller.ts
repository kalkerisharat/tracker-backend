import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Request,
  UseGuards,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks(@Request() req) {
    return this.taskService.getTasks(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addTask(@Body("description") description: string, @Request() req) {
    return this.taskService.addTask(description, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  deleteTask(@Param("id") id: string, @Request() req) {
    return this.taskService.deleteTask(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id/complete")
  completeTask(@Param("id") id: string, @Request() req) {
    return this.taskService.completeTask(id, req.user.userId);
  }
}
