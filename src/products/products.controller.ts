import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  index() {
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
