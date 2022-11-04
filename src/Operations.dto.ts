import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export enum allowedOperations {
    Addition = "addition",
    Subtraction = "subtraction",
    Multiplication = "multiplication"
}

export class OperationsDto {

    @IsNotEmpty()
    @IsEnum(allowedOperations)
    operation_type: allowedOperations

    @IsNotEmpty()
    @IsNumber()
    x: number
    
    @IsNotEmpty()
    @IsNumber()
    y: number
}