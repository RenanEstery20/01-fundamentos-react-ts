/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'date-fns/locale/pt-BR' {
  import { Locale } from 'date-fns';

  const ptBR: Locale & {
    formatDistance: (...args: any[]) => any; // Adicione os tipos corretos aqui
  };

  export = ptBR;
}
