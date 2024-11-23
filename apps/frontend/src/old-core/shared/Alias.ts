// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export default class Alias {
  static formatar(valor: string): string {
    return valor.replace(/ /g, "-").toLowerCase();
  }
}
