import { Field } from "@nestjs/graphql";
import { PostFindUniqueArgs } from "../post/base/PostFindUniqueArgs";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class Fsdf {
    @Field(() => [PostFindUniqueArgs])
    @ApiProperty({
        required: true,
        type: () => [PostFindUniqueArgs]
    })
    @Type(() => PostFindUniqueArgs)
    sdfsdf!: PostFindUniqueArgs[];

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    xcv!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    d!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    f!: string;
}

export { Fsdf as Fsdf };