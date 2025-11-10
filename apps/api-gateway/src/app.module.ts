import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE', // ← ESTE É O NOME DE INJEÇÃO
        transport: Transport.REDIS,
        options: { host: 'redis', port: 6379 },
      },
    ]),
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE', // ← ESTE É O NOME DE INJEÇÃO
        transport: Transport.REDIS,
        options: { host: 'redis', port: 6379 },
      },
    ]),
    ClientsModule.register([
      {
        name: 'ANALYTICS_SERVICE', // ← ESTE É O NOME DE INJEÇÃO
        transport: Transport.REDIS,
        options: { host: 'redis', port: 6379 },
      },
    ]),
  ],
})
export class AppModule {}
