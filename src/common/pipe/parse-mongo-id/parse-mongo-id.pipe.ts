import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
// import { isMongoId } from 'class-validator';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {

    if (!isValidObjectId(value)) // isMongoId() de class-validator funciona de igual manera
      throw new BadRequestException(`${value} no es un MongoID válido`);
    return value;
  }

}
