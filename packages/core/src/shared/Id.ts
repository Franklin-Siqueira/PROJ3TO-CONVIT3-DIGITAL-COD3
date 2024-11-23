// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { v4 as uuid, validate } from "uuid";

export default class Id {
  static novo(): string {
    return uuid();
  }

  static valido(id: string): boolean {
    return validate(id);
  }
}
