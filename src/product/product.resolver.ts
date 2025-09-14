import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product], { name: 'products' })
  getProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product', nullable: true })
  getProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }
}
