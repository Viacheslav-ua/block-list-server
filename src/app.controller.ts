import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

class HelloWorldDto {
  @ApiProperty()
  message: string
}
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto
  })
  async getHello(): Promise<HelloWorldDto> {
    const user = await this.dbService.user.findMany({})
    console.log(user);
    
    return { message: this.appService.getHello() }
  }
}
