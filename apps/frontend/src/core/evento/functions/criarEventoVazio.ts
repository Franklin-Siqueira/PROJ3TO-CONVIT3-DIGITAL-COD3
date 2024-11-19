// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Id } from "@/core/shared";
import Evento from "../model/Evento";

export default function criarEventoVazio(): Partial<Evento> {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
}
