import { Module } from '@nestjs/common';
import { DefaultModule } from './module/default/default.module';
import { AdminModule } from './module/admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleType } from './entity/articleType.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'blog',
      entities: [Article, ArticleType],
      synchronize: true,
    }),
    DefaultModule, 
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
