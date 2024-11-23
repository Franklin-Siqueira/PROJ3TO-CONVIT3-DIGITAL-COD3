// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './erro.filter';

async function bootstrap() {
  const PORT = 4000;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new ErroFilter());
  await app.listen(process.env.PORT ?? 4000).then(() => {
    // console.log("HTTP Server running on PORT ", PORT, "...")
    console.log(
      `Hi there! How're ya?...\nHTTP Server running on PORT ${PORT}...\n`,
    );
  });
}
bootstrap();
