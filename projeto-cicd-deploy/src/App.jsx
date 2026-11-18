import { useState } from 'react';
import { calcularTotal } from './utils';

export function App() {
  const [quantidade, setQuantidade] = useState(2);
  const precoUnitario = 49.90;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '4rem auto', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#fff' }}>
      <span style={{ background: '#dcfce7', color: '#166534', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>
        CI/CD Pipeline Ativo • Deploy Automatizado
      </span>
      <h1 style={{ marginTop: '1rem', color: '#0f172a' }}>Aplicação React com CI/CD</h1>
      <p style={{ color: '#475569', lineHeight: '1.6' }}>
        Esta aplicação passou pelos testes automatizados (Vitest) no GitHub Actions antes de realizar o build e o deploy contínuo.
      </p>

      <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#1e293b' }}>Simulador de Cálculo Testado:</p>
        <p style={{ margin: '0.5rem 0', color: '#334155' }}>
          Preço unitário: R$ {precoUnitario.toFixed(2)} | Quantidade: <strong>{quantidade}</strong>
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <button onClick={() => setQuantidade(Math.max(1, quantidade - 1))} style={{ padding: '0.4rem 0.9rem', cursor: 'pointer' }}>-</button>
          <button onClick={() => setQuantidade(quantidade + 1)} style={{ padding: '0.4rem 0.9rem', cursor: 'pointer' }}>+</button>
        </div>
        <h2 style={{ marginTop: '1rem', color: '#2563eb' }}>
          Total: R$ {calcularTotal(precoUnitario, quantidade).toFixed(2)}
        </h2>
      </div>
    </main>
  );
}

export default App;