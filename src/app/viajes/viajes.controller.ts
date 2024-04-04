/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Body,
  Logger,
  BadRequestException,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { ViajeService } from './viajes.service';
import { ViajeDTO } from './dto/viajes.dto';

@ApiTags('viaje')
@Controller('viaje')
@ApiTags('viaje')
export class ViajeController {
  constructor(private readonly viajeService: ViajeService) {}
  @Post()
  @ApiBody({
    type: ViajeDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'Create Viaje Success',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Create Viaje Success' })
  createViaje(@Body() requestDTO: ViajeDTO) {
    Logger.log(requestDTO, 'ViajeController.createViaje');
    return this.viajeService.createViaje(requestDTO);
  }

  @Get('estado/:estado')
  @ApiHeader({
    required: true,
    name: 'Authorization',
    description: 'Token for the session',
  })
  @ApiResponse({
    status: 200,
    description: 'Active training needs list',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Lista de Viajes por estado' })
  listAllConductorActivate(@Param('estado') estado: string) {
    const validStates = ['pendiente', 'proceso', 'completado'];
    if (!validStates.includes(estado)) {
      throw new BadRequestException(
        `Estado Invalido: ${estado}. solo acepta ${validStates.join(', ')}`,
      );
    }
    return this.viajeService.listViaje(estado);
  }

  @Get('id/:id')
  @ApiHeader({
    required: true,
    name: 'Authorization',
    description: 'Token for the session',
  })
  @ApiResponse({
    status: 200,
    description: 'Active training needs list',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Busqueda de Viaje por id' })
  listConductorId(@Param('id') id: string) {
    return this.viajeService.listViajeId(id);
  }

  @Put('estado/:estado/id/:id')
  @ApiHeader({
    required: true,
    name: 'Authorization',
    description: 'Token for the session',
  })
  @ApiResponse({
    status: 200,
    description: 'Active training needs list',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Proceso de facturacion y cambio de estados' })
  updateStatusViaje(@Param('estado') estado: string, @Param('id') id: string) {
    const validStates = ['pendiente', 'proceso', 'completado'];
    if (!validStates.includes(estado)) {
      throw new BadRequestException(
        `Estado Invalido: ${estado}. solo acepta ${validStates.join(', ')}`,
      );
    }
    return this.viajeService.updateStatusViaje(id, estado);
  }
}
