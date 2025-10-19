import { Module } from '@nestjs/common';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { AddressModule } from './endereco/endereco.modulo';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    AddressModule,
    UsuarioModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kaihfd6xsyatztpv@ethereal.email',
            pass: 'snGAeRZYHuzzqjqxea'
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      /*template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },*/
    }),  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
