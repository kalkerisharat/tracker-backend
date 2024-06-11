import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as fs from "fs";

// Load environment variables from .env file
if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await mongoose.connect(process.env.MONGO_URI);
  await app.listen(3000);
}
bootstrap();
