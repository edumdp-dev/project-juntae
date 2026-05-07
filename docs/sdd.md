# Software Design Document (SDD) - JuntAe

Este documento detalha os requisitos técnicos necessários para a operação do sistema.

## 🛠️ Requisitos Funcionais (RF)

- **RF01 - Autenticação:** O sistema deve validar CPF e telefone via OTP ou senha forte.
- **RF02 - Integração PIX:** Geração dinâmica de QR Codes transacionais via API (Mercado Pago/Asaas).
- **RF03 - Gestão de Custódia:** O backend deve isolar o saldo de cada grupo e impedir saques não autorizados.
- **RF04 - Cálculo de Taxas:** Aplicação automática de 3,99% de taxa de serviço no ato da liquidação.
- **RF05 - Notificações:** Avisos push/email sobre prazos de grupos e recebimento de prêmios.

## ⚙️ Requisitos Não-Funcionais (RNF)

- **RNF01 - Segurança:** Criptografia de ponta a ponta e conformidade com LGPD para dados sensíveis (CPF).
- **RNF02 - Disponibilidade:** O sistema deve operar em alta disponibilidade para não travar em horários de pico (finais de campeonatos).
- **RNF03 - Performance:** Latência mínima no processamento de webhooks de pagamento.

## 🔐 Segurança Financeira
- Uso de Webhooks para confirmação de pagamento (evitar fraude de comprovante).
- Sistema de Auditoria Interna para rastrear todas as entradas e saídas da conta Escrow.
