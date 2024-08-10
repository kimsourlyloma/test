/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Test as PrismaTest } from "@prisma/client";

export class TestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TestCountArgs, "select">): Promise<number> {
    return this.prisma.test.count(args);
  }

  async tests(args: Prisma.TestFindManyArgs): Promise<PrismaTest[]> {
    return this.prisma.test.findMany(args);
  }
  async test(args: Prisma.TestFindUniqueArgs): Promise<PrismaTest | null> {
    return this.prisma.test.findUnique(args);
  }
  async createTest(args: Prisma.TestCreateArgs): Promise<PrismaTest> {
    return this.prisma.test.create(args);
  }
  async updateTest(args: Prisma.TestUpdateArgs): Promise<PrismaTest> {
    return this.prisma.test.update(args);
  }
  async deleteTest(args: Prisma.TestDeleteArgs): Promise<PrismaTest> {
    return this.prisma.test.delete(args);
  }
}
