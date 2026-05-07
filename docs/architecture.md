# Arquitetura e Fluxo - JuntAe

## 🎯 Objetivo
Prover uma plataforma de custódia de valores para grupos informais, eliminando o risco de inadimplência e fraudes em apostas sociais através de um sistema de *escrow* automatizado.

## 🔄 Fluxo das Telas

1.  **Onboarding & Auth:** Cadastro simplificado com CPF, telefone e definição de chave PIX de recebimento.
2.  **Dashboard:** Visão de "Valor em Custódia" (total alocado) e alertas de ações pendentes (pagamentos ou encerramentos).
3.  **Criação de Grupo (Wizard):** Definição de nome, valor (total ou por membro), meta de integrantes e prazo final.
4.  **Sala do Grupo (Escrow):**
    - Visualização do montante já arrecadado vs. meta.
    - Área de pagamento PIX Copy & Paste / QR Code.
    - Lista de membros com status de pagamento (Liquidado/Aguardando).
5.  **Liquidação:** Admin encerra o grupo e define o vencedor. O sistema processa o pagamento automático descontando a taxa de 3,99%.

## 🛡️ Lógica de Escrow
O dinheiro entra em uma conta PJ via API de pagamento, fica rendendo ou estacionado, e só é liberado para a chave PIX do vencedor após a validação do Admin e consenso do grupo.
