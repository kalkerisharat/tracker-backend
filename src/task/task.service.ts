import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskDocument } from "./task.schema";

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getTasks(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec();
  }

  async addTask(description: string, userId: string): Promise<Task> {
    const task = new this.taskModel({ description, userId });
    return task.save();
  }

  async deleteTask(taskId: string, userId: string): Promise<void> {
    await this.taskModel.deleteOne({ _id: taskId, userId }).exec();
  }

  async completeTask(taskId: string, userId: string): Promise<Task> {
    return this.taskModel
      .findOneAndUpdate(
        { _id: taskId, userId },
        { completed: true },
        { new: true }
      )
      .exec();
  }
}
