import { Module } from '@nestjs/common'
import { SongsController } from './songs.controller'
import { SongsService } from './songs.service'
import { connection } from 'src/common/constants/connection'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockSongsService = {
  findAll() {
    return [{ id: 1, title: 'Lasting Lover', artists: ['Siagla'] }]
  },
}

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
