import { Song } from 'src/songs/song.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Song, (song) => song.artists, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  songs: Song[]
}
