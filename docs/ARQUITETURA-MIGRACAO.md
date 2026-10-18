# Prisma House Painter — arquitetura da migração

## Stack

- Next.js + TypeScript para a landing e o painel.
- Supabase para Auth, Postgres e Storage.
- Vercel para hospedagem após homologação.

## Áreas

- `/`: site público, tema claro/escuro e portfólio publicado.
- `/admin/login`: autenticação Supabase.
- `/admin`: pedidos e projetos.
- `/admin/projetos/[id]/imagens`: upload e ordenação de imagens.

O banco Supabase já possui `profiles`, `services`, `projects`, `project_images` e `contact_requests` com RLS. A autorização administrativa deve usar perfil autenticado; nunca senha fixa, metadata editável ou `service_role` no navegador.

As imagens em `C:\Users\Victo\Pictures\Imagens_prisma` são identidade visual e fundos. Não serão tratadas como fotos de serviços realizados sem validação do cliente. O e-mail oficial é `prismahousepainter@gmail.com`.

## Próximas etapas

1. Validar a landing migrada em desktop e mobile.
2. Ligar portfólio público ao Supabase.
3. Criar login e painel administrativo.
4. Conectar formulário de orçamento.
5. Rodar testes e preparar homologação.
