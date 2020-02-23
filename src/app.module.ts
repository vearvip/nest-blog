import { Module } from '@nestjs/common';
import { DefaultModule } from './module/default/default.module';
import { AdminModule } from './module/admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'blog',
      entities: [Article],
      synchronize: true,
      charset : 'utf8mb4'
    }),
    DefaultModule, 
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
