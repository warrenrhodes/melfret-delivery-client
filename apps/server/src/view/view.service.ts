import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
/**
 * The view service.
 * @with_decorator
 */
export class ViewService implements OnModuleInit {
  private server: NextServer

  /**
   * The initialization method.
   * @returns nothing.
   */
  async onModuleInit(): Promise<void> {
    try {
      this.server = next({ dev: false, dir: 'dist/apps/web-server' });
      await this.server.prepare();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   **
   * @returns the created next server.
   */
  getNextServer(): NextServer {
    return this.server;
  }
}