import { Controller, Get, Post, Body, BadRequestException, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationsDto } from './Operations.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(200)
  numberOperations(@Body() operationsDto: OperationsDto): {} {
    try{
      if(operationsDto.operation_type === "addition"){
        return this.appService.addition(operationsDto)
      }
      if(operationsDto.operation_type === "subtraction"){
        return this.appService.addition(operationsDto)
      }
      if(operationsDto.operation_type === "multiplication"){
        return this.appService.addition(operationsDto)
      }
    } catch(e) {
      throw new BadRequestException()
    }
  }
}
