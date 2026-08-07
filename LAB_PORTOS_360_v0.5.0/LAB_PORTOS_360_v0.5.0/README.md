# LAB PORTOS 360 — v0.5.0

Base modular front-end para o Laboratório Virtual de Portos.

## Rodar

Pode ser publicado diretamente no GitHub Pages. Como o projeto usa JavaScript ES Modules, para testes locais prefira um servidor HTTP simples:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Estrutura

```text
LAB_PORTOS_360_v0.5.0/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── img/
│   └── js/
│       ├── core/
│       ├── data/
│       ├── services/
│       └── modules/
│           └── container-40hc-inspecao/
│               ├── index.js
│               ├── data.js
│               └── simulation.js
├── docs/
├── VERSION.json
└── README.md
```

## Como adicionar um novo laboratório

1. Crie uma pasta em `assets/js/modules/meu-laboratorio/`.
2. Crie `index.js` exportando `mount(context)` e `unmount()`.
3. Separe regras em `simulation.js` e conteúdo em `data.js` quando fizer sentido.
4. Cadastre o laboratório em `assets/js/data/modules.js`.
5. Para liberar o card, use `status: 'ready'` e defina `entry`.
6. Assets pesados devem ficar separados e ser carregados somente dentro do módulo.

## Estratégia de atualização

- `core/`: mudar apenas quando houver evolução estrutural.
- `modules/`: atualização independente por laboratório.
- `data/`: catálogo e conteúdos reutilizáveis.
- `css/`: sistema visual compartilhado.
- `assets 3D`: futuramente separar por laboratório e por LOD.

Não há build step nem backend. Tudo é compatível com GitHub Pages.
