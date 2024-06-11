import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await mongoose.connect(
    "mongodb+srv://chetanserikar87:GdY96oDL3zIkjEy4@cluster0.wuijqz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  await app.listen(3000);
}
bootstrap();
