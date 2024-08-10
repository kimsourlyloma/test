import { Module } from "@nestjs/common";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";
import { TestGrpcController } from "./test.grpc.controller";
import { TestResolver } from "./test.resolver";

@Module({
  imports: [TestModuleBase],
  controllers: [TestController, TestGrpcController],
  providers: [TestService, TestResolver],
  exports: [TestService],
})
export class TestModule {}
