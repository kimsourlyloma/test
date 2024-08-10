import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthorService } from "./author.service";
import { AuthorGrpcControllerBase } from "./base/author.grpc.controller.base";

@swagger.ApiTags("authors")
@common.Controller("authors")
export class AuthorGrpcController extends AuthorGrpcControllerBase {
  constructor(protected readonly service: AuthorService) {
    super(service);
  }
}
