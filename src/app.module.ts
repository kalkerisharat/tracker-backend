import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { TaskModule } from "./task/task.module";
import * as dotenv from "dotenv";
import * as fs from "fs";

// Load environment variables from .env file
if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
}

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    TaskModule,
  ],
})
export class AppModule {}
