# Database Schema (ERD) - JuntAe

Este documento define a estrutura de dados relacional para o PostgreSQL (Supabase). Ele foi desenhado pensando na facilidade de mapeamento via ORM (como Prisma ou TypeORM) no NestJS e na segurança transacional do modelo de *escrow*.

## 📊 Tabelas Principais

### 1. `users` (Usuários)
Armazena a identidade e os dados de repasse.
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `cpf` (VARCHAR, Unique) - *Deve ser criptografado ou mascarado no front*
- `phone` (VARCHAR, Unique)
- `password_hash` (VARCHAR)
- `pix_key` (VARCHAR) - *A chave que o usuário vai receber o prêmio*
- `pix_key_type` (ENUM: 'cpf', 'phone', 'email', 'random')
- `created_at` (TIMESTAMP)

### 2. `groups` (Salas/Grupos de Escrow)
A entidade central. O dinheiro fica atrelado ao grupo, não ao usuário.
- `id` (UUID, Primary Key)
- `owner_id` (UUID, Foreign Key -> `users.id`)
- `name` (VARCHAR)
- `photo_url` (VARCHAR, Nullable)
- `target_amount` (DECIMAL) - *Valor total esperado*
- `amount_per_member` (DECIMAL, Nullable)
- `max_members` (INTEGER)
- `deadline` (TIMESTAMP)
- `status` (ENUM: 'open', 'locked', 'liquidated', 'disputed') - *Controla a trava do dinheiro*
- `created_at` (TIMESTAMP)

### 3. `group_members` (Participantes)
Relacionamento N:N entre `users` e `groups`.
- `id` (UUID, Primary Key)
- `group_id` (UUID, Foreign Key -> `groups.id`)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `role` (ENUM: 'admin', 'member')
- `payment_status` (ENUM: 'pending', 'paid')
- `joined_at` (TIMESTAMP)

### 4. `transactions` (Livro-Razão / Ledger)
A fonte da verdade financeira. Nunca se faz `UPDATE` num saldo, apenas se insere uma nova transação (imutabilidade).
- `id` (UUID, Primary Key)
- `group_id` (UUID, Foreign Key -> `groups.id`)
- `user_id` (UUID, Foreign Key -> `users.id`) - *Quem pagou ou quem recebeu*
- `amount` (DECIMAL)
- `type` (ENUM: 'deposit', 'withdrawal', 'fee') - *'fee' é a taxa do JuntAe*
- `gateway_transaction_id` (VARCHAR) - *ID do Mercado Pago para conciliação webhook*
- `status` (ENUM: 'pending', 'approved', 'failed')
- `created_at` (TIMESTAMP)

## 🔒 Regras de Segurança (Supabase RLS)
Para garantir que o BaaS e o banco de dados estejam em sincronia:
1. **Isolamento de Transação:** Ninguém pode ler `transactions` de grupos que não participa.
2. **Imutabilidade:** Nenhuma rota da API no NestJS deve ter permissão de fazer `DELETE` na tabela `transactions`. Se um pagamento falhar, o status muda para `failed`, mas o registro fica.
3. **Trigger de Liquidação:** Quando o `groups.status` muda para `liquidated`, uma chamada segura para o NestJS dispara o PIX de saída.
