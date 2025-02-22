import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateArchiveDTO } from './create-archive-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('archive')
  crateArchive(@Body() body: CreateArchiveDTO) {
    return this.appService.createArchive(body);
  }
}
