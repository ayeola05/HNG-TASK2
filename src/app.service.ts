import { Injectable } from '@nestjs/common';
import { OperationsDto } from './Operations.dto';

@Injectable()
export class AppService {
  getHello(): {} {
    return {
      slackUsername: "ayeolataiwo",
      backend: true,
      age: 21,
      bio: "I am Ayeola Taiwo by name and a backend NodeJS developer" 
    }
  }

  addition({x, y, operation_type}: OperationsDto): {} {
    const result = x + y
    return {
      slackUsername: "ayeolataiwo",
      result,
      operation_type
    }
  }

  subtraction({x, y, operation_type}: OperationsDto): {} {
    const result = x - y
    return {
      slackUsername: "ayeolataiwo",
      result,
      operation_type
    }
  }

  multiplication({x, y, operation_type}: OperationsDto): {} {
    const result = x * y
    return {
      slackUsername: "ayeolataiwo",
      result,
      operation_type
    }
  }
}
