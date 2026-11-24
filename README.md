# Portfólio — Bruno Martins

Portfólio pessoal em React + Vite + Bootstrap, dividido em páginas separadas:
Início, Sobre, Experiências, Escolaridade, Skills, Projetos e Contato.

## Requisitos

- Node.js 20 ou superior
- npm

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (normalmente
`http://localhost:5173`).

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam na pasta `dist/`.

> Não abra o `dist/index.html` com duplo clique: o navegador bloqueia os
> módulos JavaScript em `file://`. Use `npm run preview` ou publique a pasta
> `dist/` em um serviço de hospedagem (Vercel, Netlify, GitHub Pages).

## Scripts

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera a versão de produção em `dist/`   |
| `npm run preview` | Testa localmente a versão de produção  |
| `npm run lint`    | Verifica o código com ESLint           |
