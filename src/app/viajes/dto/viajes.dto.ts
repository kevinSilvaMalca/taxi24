import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ViajeDTO {
  @ApiProperty({ description: 'ID del conductor' })
  @IsNotEmpty()
  @IsNumber()
  conductorId: number;

  @ApiProperty({ description: 'ID del pasajero' })
  @IsNotEmpty()
  @IsNumber()
  pasajeroId: number;

  @ApiProperty({ description: 'Costo del viaje' })
  @IsNotEmpty()
  @IsNumber()
  costo: number;
}
