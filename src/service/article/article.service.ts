import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Article } from 'src/entity/article.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,

    @InjectConnection()
    private readonly articleConnection: Connection
  ) { }

  async findArticleListByType(type: number, pageNo: number, pageSize: number): Promise<Article[]> {
    console.log('type: number, pageNo: number, pageSize: number', type, pageNo, pageSize)
    // const result = await this.articleRepository
    //   .createQueryBuilder('article')
    //   .where('article.type = :type', { type })
    //   .getMany()

    const result = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.type = :type', { type })
      .skip(pageSize * pageNo)
      .take(pageSize)
      .getMany()

    console.log('📚 ', result)
    return result
  }
  async bbq() {

    const sqlStr = `
      select title, typeName, content, introduce, addTime, viewCount from article, article_type where article.type = article_type.id limit 0, 10
    `
    const result = await this.articleRepository.query(sqlStr)
    return result
  }

  async findArticleById(id: number): Promise<Article> {
    try {
      return await this.articleRepository.findOne({
        id
      })
    } catch (error) {
      throw new Error(error)
    }

  }

  // 增加文章 
  async addArticle(body: Article): Promise<any> {
    try {
      return await this.articleRepository.save(body)
    } catch (error) {
      throw new Error(error)
    }
  }

  // 编辑文章 by 文章id
  async editArticleById(id: number, body: Article): Promise<any> {
    try {
      return await this.articleRepository.update({
        id
      }, body)
    } catch (error) {
      throw new Error(error)
    }

  }

  // 删除文章 by 文章id
  async deleteArticleById(id: number): Promise<any> {
    try {
      return await this.articleRepository.delete({
        id
      })
    } catch (error) {
      throw new Error(error)
    }

  }


}

