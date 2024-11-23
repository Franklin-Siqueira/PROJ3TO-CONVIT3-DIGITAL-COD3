// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
