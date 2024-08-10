/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { PostService } from "../post.service";
import { PostCreateInput } from "./PostCreateInput";
import { PostWhereInput } from "./PostWhereInput";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostUpdateInput } from "./PostUpdateInput";
import { Post } from "./Post";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class PostGrpcControllerBase {
  constructor(protected readonly service: PostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Post })
  @GrpcMethod("PostService", "createPost")
  async createPost(@common.Body() data: PostCreateInput): Promise<Post> {
    return await this.service.createPost({
      data: {
        ...data,

        author: data.author
          ? {
              connect: data.author,
            }
          : undefined,
      },
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Post] })
  @ApiNestedQuery(PostFindManyArgs)
  @GrpcMethod("PostService", "posts")
  async posts(@common.Req() request: Request): Promise<Post[]> {
    const args = plainToClass(PostFindManyArgs, request.query);
    return this.service.posts({
      ...args,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PostService", "post")
  async post(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    const result = await this.service.post({
      where: params,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PostService", "updatePost")
  async updatePost(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() data: PostUpdateInput
  ): Promise<Post | null> {
    try {
      return await this.service.updatePost({
        where: params,
        data: {
          ...data,

          author: data.author
            ? {
                connect: data.author,
              }
            : undefined,
        },
        select: {
          author: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PostService", "deletePost")
  async deletePost(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    try {
      return await this.service.deletePost({
        where: params,
        select: {
          author: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  @GrpcMethod("PostService", "findManyComments")
  async findManyComments(
    @common.Req() request: Request,
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  @GrpcMethod("PostService", "connectComments")
  async connectComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  @GrpcMethod("PostService", "updateComments")
  async updateComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  @GrpcMethod("PostService", "disconnectComments")
  async disconnectComments(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updatePost({
      where: params,
      data,
      select: { id: true },
    });
  }
}
