import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from './endereco.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(':cep')
  async getAddressByCep(@Param('cep') cep: string) {
    return await this.addressService.findByCep(cep);
  }
}
