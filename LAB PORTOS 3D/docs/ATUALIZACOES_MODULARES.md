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

## Patch v0.6.0 → v0.7.0

A v0.7.0 adiciona um serviço gráfico compartilhado (`port-scene-kit.js`) e três laboratórios. O patch também atualiza catálogo, estilos, Three Engine, documentação e metadados de versão. Ele pode ser copiado sobre a raiz da v0.6.0.


## Patch v0.7.0 → v0.8.0

A v0.8.0 adiciona o Asset Manager, o manifesto e os primeiros GLBs locais, além da Central de Documentos. O patch pode ser copiado sobre a raiz da v0.7.0. Como há novos arquivos binários `.glb`, confirme que o GitHub registrou `assets/models/` no commit.


## Patch v0.8.0 → v0.9.0

O patch adiciona a biblioteca GLB ampliada, `distance-lod.js`, `operation-flow.js`, os módulos `tipos-containeres` e `operacao-integrada` e atualiza os laboratórios Pátio/Equipamentos. Pode ser sobreposto à raiz da v0.8.0. Como há novos `.glb`, confirme que o commit contém todas as subpastas de `assets/models/`.


## Patch v0.9.0 → v0.10.0

O patch acrescenta os novos serviços de ambiente/endereço/missão, três módulos, atualizações de CSS e melhorias nos laboratórios de Pátio e Navio/Cais. Não remove a biblioteca GLB existente e pode ser sobreposto à v0.9.0.


## Atualização v0.10.0 → v0.11.0
Pode ser aplicada por sobreposição do PATCH. Inclui serviços, módulos, CSS, manifesto e novos GLBs. O PATCH deve ser extraído na raiz do repositório.


## Atualização v0.11.0 → v0.12.0
Pode ser aplicada por sobreposição do PATCH na raiz do repositório. Inclui dois novos módulos, quatro serviços, atualizações de Gate/Balança/Reefer/Pátio/Cavalo-Chassi, CSS, catálogo, documentação e metadados. Não remove assets GLB existentes nem exige servidor backend.


## Atualização v0.12.0 → v0.13.0

Pode ser aplicada por sobreposição. O PATCH contém apenas arquivos novos/alterados; o armazenamento local é preservado e as exceções v012 são migradas para v013.


## Atualização v0.13.0 → v0.14.0
Sobreponha o PATCH. Não há remoção de assets anteriores; novos módulos e serviços são carregados sob demanda.


## Atualização v0.14.0 → v0.15.0
Sobreponha o PATCH. Os cinco novos laboratórios e serviços são carregados sob demanda.


## Atualização v0.15.0 → v0.16.0
Sobreponha o PATCH. O novo estado operacional usa uma chave local própria e não remove o progresso anterior.
