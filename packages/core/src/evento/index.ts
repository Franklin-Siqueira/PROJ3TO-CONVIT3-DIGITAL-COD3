// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarConvidado from "./functions/complementarConvidado";
import complementarEvento from "./functions/complementarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";

export type { Evento, Convidado };
export {
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
};