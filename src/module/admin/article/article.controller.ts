import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from 'src/service/article/article.service';
import { Article } from 'src/entity/article.entity';

@Controller('admin/article')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService
  ) {}

  @Get()
  index(): Promise<Article[]> {
    return this.articleService.findAllArticleList()
  }

  @Get('findArticleListByTypeId')
  findArticleListByTypeId(@Query('typeId') typeId): Promise<Article[]> {
    console.log(typeId)
    return this.articleService.findArticleListByTypeId(typeId)
  }

  @Get('findArticleById')
  findArticleById(@Query('id') id): Promise<Article> {
    console.log('💓', id)
    return this.articleService.findArticleById(id)
  }

  @Get('bbq')
  bbq(): Promise<Article> {
    
    return this.articleService.bbq()
  }
}
