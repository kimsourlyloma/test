import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["post", "comment", "author", "test"],
    protoPath: [
      "src/post/post.proto",
      "src/comment/comment.proto",
      "src/author/author.proto",
      "src/test/test.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};