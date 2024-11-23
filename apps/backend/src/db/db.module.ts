// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider';

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}
