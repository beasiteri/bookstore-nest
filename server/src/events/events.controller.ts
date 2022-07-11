import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getAllEvents(@Res() response) {
    try {
      const eventsData = await this.eventsService.getAllEvents();
      return response.status(HttpStatus.OK).json({
        eventsData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
