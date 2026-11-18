import { describe, it, expect } from 'vitest';
import { calcularTotal } from './utils';

describe('Testes Automatizados - CI Pipeline', () => {
  it('deve calcular corretamente o valor total de itens', () => {
    expect(calcularTotal(25, 4)).toBe(100);
  });

  it('deve retornar 0 para valores negativos', () => {
    expect(calcularTotal(-10, 2)).toBe(0);
  });
});