import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')

/**
 * The user model definition.
 */
export class User {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 16 })
  authMode!: 'e-mail' | 'gmail' | 'apple-id' | 'manual';

  @Column({ type: 'varchar', length: 250 })
  full_name!: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  pseudo!: string;

  @Column()
  password!: string;

  @Column('json', { nullable: true })
  private location_json?: string;


  @Column('json', { nullable: true })
  private more_json?: string;

  @Column({ type: 'varchar', length: 16, default: 'user' })
  role!: 'user' | 'admin';

  /**
   * The location of the user.
   * @returns The parsed version of location_json if exist.
   */
  get location(): UserLocation | null {
    if (!this.location_json) {
      return null;
    }
    return JSON.parse(this.location_json);
  }

  /**
   * The additional information provided by the user.
   * @returns The parsed version of more_json if exist.
   */
  more(): AdditionalUserInformation | null {
    if (!this.more_json) {
      return null;
    }
    return JSON.parse(this.more_json);
  }

}
export interface UserLocation {
  country?: string;
  city?: string;
  street?: string;
  gPlusCode?: string;
}

export interface AdditionalUserInformation {
  email?: string;
  phoneNumber?: string;
}

