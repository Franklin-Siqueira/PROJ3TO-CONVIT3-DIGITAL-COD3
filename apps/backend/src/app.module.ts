// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [EventosModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
