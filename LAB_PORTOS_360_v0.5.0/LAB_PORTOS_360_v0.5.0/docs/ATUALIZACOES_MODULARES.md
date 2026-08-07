# Estratégia de atualizações modulares

## Regra de ouro

As próximas entregas podem substituir somente os arquivos alterados, desde que a versão informada seja compatível com o `core` instalado.

## Tipos de atualização

### 1. Novo laboratório
Normalmente altera apenas:
- `assets/js/modules/<novo-modulo>/...`
- `assets/js/data/modules.js`
- assets específicos do novo laboratório.

### 2. Evolução gráfica de um laboratório
Normalmente altera apenas:
- pasta do laboratório;
- modelos/texturas/360 daquele laboratório;
- eventualmente seu Graphics Adapter local.

### 3. Mudança visual global
Altera arquivos em:
- `assets/css/`

### 4. Mudança estrutural do sistema
Altera arquivos em:
- `assets/js/core/`
- eventualmente `assets/js/services/`.

Mudanças no `core` devem ser menos frequentes e documentadas no CHANGELOG.

## Fluxo recomendado para GitHub

1. Manter o repositório principal como fonte cumulativa.
2. Cada entrega informa a versão (`VERSION.json`).
3. Copiar somente os arquivos alterados sobre o repositório quando a atualização for incremental.
4. Para versões maiores, manter também um ZIP cumulativo completo como restauração segura.
5. Nunca apagar módulos anteriores ao adicionar um novo.
