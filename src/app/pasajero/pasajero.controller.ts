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
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { PasajeroService } from './pasajero.service';
import { PasajeroDTO } from './dto/pasajero.dto';

@ApiTags('pasajero')
@Controller('pasajero')
@ApiTags('pasajero')
export class PasajeroController {
  constructor(private readonly pasajeroService: PasajeroService) {}
  @Post()
  @ApiBody({
    type: PasajeroDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'Create Pasajero Success',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Create Pasajero Success' })
  createPasajero(@Body() requestDTO: PasajeroDTO) {
    Logger.log(requestDTO, 'ConductorController.createConductor');
    return this.pasajeroService.createPasajero(requestDTO);
  }

  @Get()
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
  @ApiOperation({ summary: 'Lista de Pasajeros' })
  listAllPasajero() {
    return this.pasajeroService.listPasajero();
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
  @ApiOperation({ summary: 'Lista de pasajeros por estado' })
  listAllPasajeroActivate(@Param('estado') estado: string) {
    return this.pasajeroService.listPasajeroACtive(estado);
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
  @ApiOperation({ summary: 'BUsqueda de pasajeros por ID' })
  listConductorId(@Param('id') id: string) {
    return this.pasajeroService.listPasajeroId(id);
  }

  @Get('radio/:id')
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
  @ApiOperation({ summary: 'Pasajeros y conductores Cercanos a ellos' })
  listPasjeroConductorRadio(@Param('id') id: string) {
    return this.pasajeroService.listPasjeroConductorRadio(id);
  }
}
