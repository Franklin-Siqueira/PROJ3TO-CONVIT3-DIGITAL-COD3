// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// import Pagina from "@/components/template/Pagina";
import Pagina from "../components/template/Pagina";
// import { Evento } from "@/core";
import { Evento } from "../old-core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina className="w-full">
      <div>Inicio</div>
    </Pagina>
  );
}
