---
name: AyManá
description: Confeitaria artesanal com identidade celestial, leve e acolhedora
colors:
  primary: "#0284c7"
  primary-hover: "#0369a1"
  primary-light: "#e0f2fe"
  primary-pastel: "#9ecbff"
  accent: "#f0f7ff"
  text-main: "#0f172a"
  text-muted: "#475569"
  neutral-slate: "#94a3b8"
  background: "#ffffff"
  surface-subtle: "#f8fafc"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

# Design System

## Overview
A identidade do **AyManá** é inspirada na leveza celestial e no carinho da confeitaria artesanal ("Adoçando dias com o amor de Deus"). O design transmite frescor, sofisticação e afeto, combinando tons suaves de azul celeste com o branco puro e detalhes tipográficos elegantes.

## Colors
- **Celestial Primary (`#9ecbff`)**: O azul celeste principal que ancora botões de destaque, badges e detalhes visuais marcantes.
- **Primary Hover (`#82b9f9`)**: Tom de interação para estados de hover e foco ativos.
- **Celestial Accent (`#e8f3ff`)**: Fundo sutil de cartões, pílulas de filtro ativas e áreas de respiro.
- **Slate Text Main (`#1e293b`)**: Tipografia de alto contraste para títulos e preços.
- **Slate Text Muted (`#64748b`)**: Descrições de itens, avisos e metadados secundários.
- **Clean White (`#ffffff`) & Slate-50 (`#f8fafc`)**: Fundo limpo que destaca as cores quentes e douradas dos produtos da confeitaria.

## Typography
- **Headings & Display**: `Playfair Display` (serif) transmite refinamento gastronômico, artesanato e distinção.
- **Body & Controls**: `Plus Jakarta Sans` (sans-serif) garante leitura rápida, legibilidade excelente em telas móveis e clareza de preços.

## Layout
- **Mobile-First Priority**: Espaçamentos confortáveis para uso em tela touch com apenas uma mão.
- **Grid Responsivo**: Lista de cards de produtos adaptáveis (1 coluna no mobile, 2 ou 3 colunas em tablets/desktops).
- **Sticky Cart Action**: Acesso imediato ao carrinho e ao total a qualquer momento da rolagem.

## Elevation & Depth
- Sombras suaves (`shadow-sm`, `shadow-md` com opacidade reduzida em tons de azul e cinza claro) para manter a sensação de leveza celestial.
- Efeito vidro / *Glassmorphism* (`backdrop-blur-md` com fundo branco translúcido) no cabeçalho e barras de navegação flutuantes.

## Shapes
- Cantos arredondados generosos (`rounded-2xl`, `rounded-3xl` e `rounded-full` em botões e pílulas), reforçando a simpatia, aconchego e o acolhimento da confeitaria.

## Components
- **Category Filter Pills**: Pílulas arredondadas com microinteração de clique, indicando a categoria ativa com contraste claro.
- **Product Card**: Imagem em proporção agradável com badge de preço e botão direto para adicionar ao carrinho.
- **Cart Bottom Sheet / Drawer**: Abertura lateral fluida com resumo dos itens, quantidades e botão verde com o ícone do WhatsApp para envio.

## Do's and Don'ts
- **DO**: Manter a paleta limpa em azul celeste e branco, deixando o destaque de cor viva para as fotos dos doces e pães.
- **DO**: Garantir botões de toque de fácil acionamento no mobile (mínimo de 44px de altura).
- **DON'T**: Utilizar gradientes pesados de roxo ou vermelho que fujam da identidade celestial do AyManá.
- **DON'T**: Poluir a tela com excesso de formulários antes do WhatsApp.
