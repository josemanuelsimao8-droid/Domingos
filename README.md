# Domingos Cá — site imobiliário profissional

O projeto foi reorganizado como uma aplicação **Next.js App Router em JavaScript**, deixando de ser uma landing page e passando a ter navegação e páginas independentes.

## Páginas
- `/` — Início
- `/sobre` — Sobre
- `/servicos` — Serviços
- `/imoveis` — Catálogo de imóveis
- `/imoveis/[slug]` — Página individual de cada imóvel
- `/metodo` — Método de trabalho
- `/contacto` — Contacto e captação de leads

## Base de dados
A integração está preparada para **Supabase/PostgreSQL**. A migration `supabase/migrations/001_domingos.sql` cria `domingos_properties` para a carteira de imóveis e `domingos_leads` para os contactos recebidos pelo site.

O catálogo usa dados de demonstração enquanto as variáveis Supabase não estiverem configuradas.

## Variáveis de ambiente
Configure na Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

A service role key nunca deve ser exposta no browser.

## Deploy
O projeto está preparado para ser importado diretamente na Vercel como Next.js. Depois de configurar as variáveis e executar a migration no Supabase, os imóveis e contactos passam a funcionar com dados reais.

Também foi adicionado GitHub Actions para verificar automaticamente `npm run build` em cada push para `main`.
