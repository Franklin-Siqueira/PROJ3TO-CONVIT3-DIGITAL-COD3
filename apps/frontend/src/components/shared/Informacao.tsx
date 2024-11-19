// Copyright 2024 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export interface InformacaoProps {
  label: string;
  children: any;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold">{props.label}</span>
      <div className="text-xl">{props.children}</div>
    </div>
  );
}
