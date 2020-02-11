import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Article } from '../../entity/article.entity';

import { ArticleController } from './article/article.controller';

import { ArticleService } from 'src/service/article/article.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Article
    ])
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class AdminModule {}
