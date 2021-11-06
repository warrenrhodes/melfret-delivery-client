import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 16 })
  authMode!: 'e-mail' | 'gmail' | 'apple-id' | 'manual';

  @Column({ type: 'varchar', length: 250 })
  full_name!: string;
 
  @Column({ type: 'varchar', length: 30, unique: true })
  pseudo!: string;

  @Column({ select: false })
  password!: string;

  @Column('json', { nullable: true })
  private location_json?: string;


  @Column('json', { nullable: true })
  private more_json?: string;
  
  @Column('json', { default: 'user' })
  role!: 'user' | 'admin';
  
  get location(): UserLocation | null {
    if (!this.location_json) {
      return null;
    }
    return JSON.parse(this.location_json);
  }

  get more(): AdditionalUserInformation | null {
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

