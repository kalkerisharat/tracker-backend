import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { TaskModule } from "./task/task.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://chetanserikar87:GdY96oDL3zIkjEy4@cluster0.wuijqz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ),
    AuthModule,
    TaskModule,
  ],
})
export class AppModule {}
