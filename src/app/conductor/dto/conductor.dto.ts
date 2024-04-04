import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class ConductorDTO {
  @ApiProperty({ description: 'Nombre del conductor' })
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @ApiProperty({ description: 'Edad del conductor' })
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  readonly edad: number;

  @ApiProperty({ description: 'Licencia de conducir del conductor' })
  @IsNotEmpty()
  @IsString()
  readonly licenciaConducir: string;

  @ApiProperty({ description: 'Ubicación del conductor' })
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  readonly ubicacion: number;

  @ApiProperty({ description: 'Estado del conductor' })
  @IsNotEmpty()
  @IsBoolean()
  readonly estado: boolean;
}
