import { Module } from "@nestjs/common";
import { AuthorModuleBase } from "./base/author.module.base";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { AuthorGrpcController } from "./author.grpc.controller";
import { AuthorResolver } from "./author.resolver";

@Module({
  imports: [AuthorModuleBase],
  controllers: [AuthorController, AuthorGrpcController],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
