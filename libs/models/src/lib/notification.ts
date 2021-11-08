import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notification')
/**
 * The notification model definition.
 * @with_decorator
 */
export class Notification {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 256 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  /**
   * The raw action that contains the route to call with their parameter.
   */
  @Column('json', { nullable: true })
  action_json?: string | null;
}

export interface NotificationAction {
  route?: string;
  payload?: unknown;
}
