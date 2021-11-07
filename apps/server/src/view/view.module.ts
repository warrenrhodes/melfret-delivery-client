import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';


@Module({
  imports: [],
  providers: [ViewService],
  controllers: [ViewController]
})
/**
 * The module of the view.
 * @with_decorator
 */
export class ViewModule { }
