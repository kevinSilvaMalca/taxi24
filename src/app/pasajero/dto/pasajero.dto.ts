import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PasajeroDTO {
  @ApiProperty({ description: 'Nombre del pasajero' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Edad del pasajero' })
  @IsNotEmpty()
  @IsNumber()
  edad: number;

  @ApiProperty({ description: 'Edad del pasajero' })
  @IsNotEmpty()
  @IsNumber()
  ubicacion: number;

  @ApiProperty({ description: 'Estado del pasajero' })
  @IsNotEmpty()
  @IsBoolean()
  estado: boolean;
}
