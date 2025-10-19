import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AddressService {
  async findByCep(cep: string) {
    const cleanCep = cep.replace(/\D/g, '');

    if (!/^\d{8}$/.test(cleanCep)) {
      throw new HttpException('CEP inválido', HttpStatus.BAD_REQUEST);
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);

      if (response.data.erro) {
        throw new HttpException('CEP não encontrado', HttpStatus.NOT_FOUND);
      }

      return {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
      };
    } catch (error) {
      throw new HttpException('Erro ao consultar o CEP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
