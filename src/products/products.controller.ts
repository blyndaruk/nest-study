import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { request, Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private logger = new Logger(ProductsController.name);

  constructor(private readonly productService: ProductsService) {}

  @Get()
  index() {
    this.logger.warn('custom warning');
    // index(@Res() response: Response) {
    // response.status(200).send('vanilla');
    return this.productService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Return ${id} product`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  sendData(@Body() body: { some: string }): string {
    if (body?.some) {
      return 'correct';
    }

    return 'fallback';
  }
}
