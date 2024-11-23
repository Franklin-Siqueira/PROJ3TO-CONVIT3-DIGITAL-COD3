// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export default interface Convidado {
  id: string;
  nome: string;
  email: string;
  confirmado: boolean;
  possuiAcompanhantes: boolean;
  qtdeAcompanhantes: number;
}
