import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MadeiraEntity } from './madeira.entity';
import { MadeiraController } from './madeira.controller';
import { MadeiraService } from './madeira.service';

@Module({
  imports: [TypeOrmModule.forFeature([MadeiraEntity])],
  controllers: [MadeiraController],
  providers: [MadeiraService],
})
export class MadeiraModule {}