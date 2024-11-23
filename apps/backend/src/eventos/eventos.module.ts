// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';

@Module({
  controllers: [EventosController],
  imports: [DbModule],
  providers: [EventoPrisma],
})
export class EventosModule {}