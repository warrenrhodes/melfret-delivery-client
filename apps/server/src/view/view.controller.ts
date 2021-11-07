import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ViewService } from './view.service';


@Controller('/')
/**
 * The controller of our view.
 * @with_decorator
 */
export class ViewController {
  /**
   * Constructs a new [ViewController].
   * @param viewService The service of this view.
   */
  constructor(private viewService: ViewService) { }

  /**
   * The main and uniq entry point to our view.
   * @param req the request Object
   * @param res the response Object
   * @returns {void}
   */
  @Get('*')
  static(@Req() req: Request, @Res() res: Response): void {
    const handle = this.viewService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}