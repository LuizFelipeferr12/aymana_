# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Clientes de confeitaria e cafeteria artesanal que buscam doces finos, pães de fermentação natural, bolos e cafés especiais. O público utiliza prioritariamente smartphones para consultar o cardápio no local (via QR Code) ou à distância (via link na bio do Instagram e WhatsApp).

## Product Purpose
Cardápio digital mobile-first de alta conversão para a Confeitaria Artesanal AyManá. Permite aos clientes explorar produtos com facilidade, montar pedidos no carrinho e enviá-los de forma instantânea e organizada para o WhatsApp da confeitaria, reduzindo o tempo de atendimento.

## Positioning
Uma experiência de cardápio digital refinada, que transmite o cuidado artesanal e a elegância da marca através de uma estética celestial (tons de azul e branco) e navegação fluida, superando cardápios tradicionais em PDF estático ou links genéricos.

## Operating Context
- Uso primário em dispositivos móveis no ambiente da loja física ou em pedidos para viagem/encomendas.
- Conexões móveis variadas, exigindo carregamento ultrarrápido e navegação fluida.
- Checkout direto no WhatsApp, eliminando atrito de logins ou formulários extensos.

## Capabilities and Constraints
- Framework: Next.js (App Router) com React e TypeScript.
- Estilização: Tailwind CSS v4 com design tokens para a paleta celestial.
- Animações: Framer Motion com foco em microinterações suaves.
- Deploy: Vercel com build estático otimizado (`output: export`).
- Integração: Geração de mensagem com o resumo do pedido para a API do WhatsApp.

## Brand Commitments
- **Nome**: AyManá - Confeitaria Artesanal
- **Identidade Visual**: Tons celestiais (azul céu/celeste `#0284c7`, `#38bdf8`, `#0f172a`, e branco puro `#ffffff`).
- **Ativos de Marca**: Logotipos oficiais em alta resolução com fundo transparente (`/logo-1.png` e `/logo-2.png`).
- **Voz e Tom**: Acolhedor, elegante, afetuoso e focado no artesanal.

## Evidence on Hand
- Ativos de logotipo oficiais em `public/logo-1.png` e `public/logo-2.png`.
- Componentes modulares implementados em `src/components/` (`Header.tsx`, `HeroSection.tsx`, `Menu.tsx`, `CheckoutModal.tsx`, `Footer.tsx`, `CartContext.tsx`).

## Product Principles
1. **Mobile-First & One-Hand Usability**: Botões de toque fáceis de alcançar, carrinho acessível e transições sem engasgos.
2. **Zero Fricção**: Do clique no produto ao envio no WhatsApp em poucos segundos, sem cadastro obrigatório.
3. **Apelo Visual & Afeto**: Fotografia e apresentação que despertam o apetite e valorizam o processo manual/artesanal.
4. **Clareza e Precisão**: Valores, descrições, complementos e totais sempre explícitos e transparentes.

## Accessibility & Inclusion
- Contraste visual em conformidade com padrões WCAG para facilitar a leitura sob iluminação intensa.
- Áreas de toque móveis com dimensão mínima adequada (≥ 44px).
- Estrutura semântica para acessibilidade e navegação fluida.
