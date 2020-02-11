import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/entity/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>
  ) {}

  findAllArticleList(): Promise<Article[]> {
    return this.articleRepository.find()
  }
  
  findArticleListByTypeId(typeId: number): Promise<Article[]> {
    return this.articleRepository.find({
      typeId
    })
  } 

  findArticleById(id: number): Promise<Article> {
    return this.articleRepository.findOne({
      id
    })
  } 

  bbq(): any {
    const sqlStr = 
      'SELECT article.id as id, ' +
      'article.title as title, ' +
      'article.introduce as introduce, ' +
      'article.addTime as addTime, ' +
      'article.viewCount as viewCount, ' +
      'article_type.typeName as typeName ' +
      'FROM article LEFT JOIN article_type ON article.typeId = article_type.id '
    return this.articleRepository.query(sqlStr)
  }
}
