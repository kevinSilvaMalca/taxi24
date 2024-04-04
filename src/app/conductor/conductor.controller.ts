/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Post, Body, Logger } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { ConductorService } from './conductor.service';
import { ConductorDTO } from './dto/conductor.dto';

@ApiTags('conductor')
@Controller('conductor')
@ApiTags('Conductor')
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) {}
  @Post()
  @ApiBody({
    type: ConductorDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'Create Conductor Success',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({ summary: 'Create Conductor Success' })
  createConductor(@Body() requestDTO: ConductorDTO) {
    Logger.log(requestDTO, 'ConductorController.createConductor');
    return this.conductorService.createConductor(requestDTO);
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
  @ApiOperation({ summary: 'List Conductor' })
  listAllConductor() {
    return this.conductorService.listConductor();
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
  @ApiOperation({ summary: 'Estado Conductor' })
  listAllConductorActivate(@Param('estado') estado: string) {
    return this.conductorService.listConductorACtive(estado);
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
  @ApiOperation({ summary: 'Busqueda de Conductor por id' })
  listConductorId(@Param('id') id: string) {
    return this.conductorService.listConductorId(id);
  }

  @Get('radio')
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
  @ApiOperation({ summary: 'Conductores en zonas menores a 30 kilometros' })
  listConductorRadio() {
    return this.conductorService.listConductorRadio();
  }
}
