// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export default class DateFormat {
  static formatar(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const d = date ?? new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }

  static desformatar(date: string): Date {
    const [ano, mes, dia] = date.split("T")[0].split("-");
    const [hora, minuto] = date.split("T")[1].split(":");

    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
}
