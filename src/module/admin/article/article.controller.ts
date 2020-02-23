import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ArticleService } from 'src/service/article/article.service';
import { Article } from 'src/entity/article.entity';
import Response from '../../../interface/reponse.interface'

@Controller('admin/article')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService
  ) { }

  @Get()
  async bbq() {
    return this.articleService.bbq()
  }

  // 查找文章列表 by 文章类型id
  @Get('findArticleListByType')
  async findArticleListByType(@Query() query): Promise<Response> {
    const { type, pageNo, pageSize } = query
    try {

      return {
        status: true,
        message: '',
        data: await this.articleService.findArticleListByType(type, pageNo, pageSize)
      }
    } catch (error) {
      console.error('🍰控制层错误：', error)
      return {
        status: false,
        message: error.message,
        data: null
      }
    }
  }

  // 查找文章 by 文章id
  @Get('findArticleById')
  async findArticleById(@Query('id') id): Promise<Response> {
    try {
      return {
        status: true,
        message: '',
        data: await this.articleService.findArticleById(id)
      }
    } catch (error) {
      console.error('🍰控制层错误：', error)
      return {
        status: false,
        message: error.message,
        data: null
      }
    }
  }

  @Post('addArticle')
  async addArticle(@Body() body: Article): Promise<Response> {
    try {
      return {
        status: true,
        message: '',
        data: await this.articleService.addArticle(body)
      }
    } catch (error) {
      console.error('🍰控制层错误：', error)
      return {
        status: false,
        message: error.message,
        data: null
      }
    }

  }

  @Put('editArticleById/:id')
  async editArticleById(@Param('id') id: number, @Body() body: Article): Promise<Response> {
    try {
      return {
        status: true,
        message: '',
        data: await this.articleService.editArticleById(id, body)
      }
    } catch (error) {
      console.error('🍰控制层错误：', error)
      return {
        status: false,
        message: error.message,
        data: null
      }
    }

  }

  @Delete('deleteArticleById/:id')
  async deleteArticleById(@Param('id') id: number): Promise<Response> {
    try {
      return {
        status: true,
        message: '',
        data: await this.articleService.deleteArticleById(id)
      }
    } catch (error) {
      console.error('🍰控制层错误：', error)
      return {
        status: false,
        message: error.message,
        data: null
      }
    }

  }
}
