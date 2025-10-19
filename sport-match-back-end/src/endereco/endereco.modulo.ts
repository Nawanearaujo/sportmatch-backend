import { Module } from '@nestjs/common';
import { AddressController } from './endereco.controle';
import { AddressService } from './endereco.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
