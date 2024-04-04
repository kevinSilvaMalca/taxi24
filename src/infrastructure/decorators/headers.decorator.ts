import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
  ValidationError,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (value: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    const dto = plainToInstance(value, headers, {
      excludeExtraneousValues: true,
    });

    const errors: ValidationError[] = await validate(dto);

    if (errors.length > 0) {
      const validationErrors = errors.map((obj) =>
        Object.values(obj.constraints),
      );
      throw new HttpException(validationErrors[0], HttpStatus.BAD_REQUEST);
    }

    return dto;
  },
);
