# Regras para o Assistente

## Sempre usar CLI (nunca web)

- **GitHub**: usar `gh` CLI para tudo (criar repo, PRs, issues, revisar)
- **Vercel**: usar `vercel` CLI para deploy e gerenciamento
- **Git**: usar `git` CLI nativo (nunca GitHub Desktop ou web)

## Ambiente Windows

- `git` está em: `C:\Program Files\Git\bin\`
- `gh` está em: `C:\Program Files\GitHub CLI\`
- `node`/`npm` está em: `C:\Program Files\nodejs\`
- `vercel` está via npm global em: `C:\Users\dudu\AppData\Roaming\npm\`
- Se PATH não estiver configurado, adicionar manualmente:
  ```
  $env:Path += ";C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;C:\Program Files\Git\cmd;C:\Program Files\nodejs;C:\Users\dudu\AppData\Roaming\npm"
  ```

## Fluxo padrão

1. `git add . && git commit -m "mensagem"`
2. `git push`
3. `gh pr create` (se aplicável)
4. `vercel --prod --yes` (deploy)
