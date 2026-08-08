# LAB PORTOS 360 — Contexto Mestre do Projeto

**Versão atual:** v0.4 — 07/08/2026

> Arquivo cumulativo de contexto, planejamento e decisões do projeto.
> Este documento deverá ser atualizado a cada nova fase, módulo, ferramenta, decisão técnica, alteração de UX ou conteúdo do Laboratório Virtual de Portos.

## 1. Identidade inicial do projeto

**Nome provisório:** LAB PORTOS 360 — Laboratório Virtual Portuário

**Finalidade:** criar uma plataforma educacional prática e visual para estudantes de curso técnico na área portuária, permitindo estudar operações, equipamentos, documentos, cargas e fluxos logísticos por meio de experiências interativas, laboratórios virtuais, simulações e visualizações 3D/360.

**Público principal:** alunos de curso técnico ligado à área portuária, logística portuária, operações portuárias e comércio exterior.

**Objetivo pedagógico central:** aproximar o aluno da rotina real de um porto mesmo quando não for possível realizar aula de campo, visita técnica ou prática presencial.

---

## 2. Diretrizes obrigatórias

- Plataforma **front-end only**.
- Tecnologias principais: **HTML + CSS + JavaScript**.
- Hospedagem prevista: **GitHub Pages**.
- Não depender de servidor próprio na primeira versão.
- Priorizar funcionamento em notebooks escolares e celulares.
- Interface responsiva, moderna, técnica e de fácil navegação.
- Experiências 3D/360 devem ser usadas quando ajudarem realmente a compreender espaço, equipamento, operação ou sequência de trabalho.
- Deve haver laboratórios com interação, não apenas textos e imagens.
- O aluno deve poder errar em ambiente seguro e receber explicações sobre o erro.
- O sistema deve ter modos guiados para uso em aula pelo professor.
- Conteúdo técnico e documental deve ter campo de versão/data de referência, pois normas e procedimentos de importação/exportação podem mudar.

---

## 3. Conceito pedagógico

A plataforma será dividida em quatro tipos de experiência:

### 3.1 Explorar
Conteúdos visuais para conhecer portos, terminais, navios, contêineres, equipamentos, profissões, áreas operacionais e infraestrutura.

### 3.2 Aprender
Explicações técnicas, glossário, fluxogramas, fichas, curiosidades, comparações, normas e conceitos importantes da área portuária.

### 3.3 Simular
Laboratórios virtuais nos quais o aluno realiza uma operação semelhante à rotina profissional.

### 3.4 Resolver
Cenários-problema com dados, documentos, cargas, horários, pesos, avarias, filas, movimentações e decisões operacionais.

---

# 4. Macroestrutura da plataforma

## 4.1 Página inicial / Central Portuária

Painel principal com acesso rápido a:

- Laboratórios virtuais
- Porto 3D/360
- Navios
- Contêineres
- Pátio de contêineres
- Gate / entrada de caminhões
- Balança e pesagem
- Equipamentos portuários
- Documentação
- Importação
- Exportação
- Cargas especiais
- Segurança
- Meio ambiente
- Profissões
- Glossário
- Ferramentas de cálculo
- Desafios e estudos de caso
- Portos e terminais de referência

Indicadores possíveis na home:

- módulo estudado;
- simulações disponíveis;
- cenário recomendado;
- conceito do dia;
- equipamento em destaque;
- documento em destaque;
- porto em destaque.

---

# 5. Módulos de conteúdo e laboratórios

## Módulo 01 — Introdução ao sistema portuário

Conteúdos:

- O que é um porto.
- Porto organizado, terminal, área alfandegada e instalações portuárias.
- Operador portuário.
- Autoridade portuária.
- Agentes envolvidos na cadeia logística.
- Fluxo básico de importação e exportação.
- Relação porto–navio–pátio–caminhão–ferrovia–armazém.

Experiência visual:

- mapa esquemático interativo de um terminal;
- fluxo animado de uma carga;
- visualização por camadas das áreas do porto.

---

## Módulo 02 — Portos e terminais de referência

Criar fichas visuais e mapas educacionais sobre portos e terminais relevantes para a formação dos alunos.

Prioridade inicial citada no projeto:

- Paranaguá / Portos do Paraná;
- Itapoá;
- outros portos e terminais brasileiros relevantes para comparação.

Para cada porto/terminal, prever:

- localização;
- principais tipos de carga;
- infraestrutura;
- berços;
- terminais;
- acessos rodoviários/ferroviários quando aplicável;
- equipamentos;
- curiosidades;
- importância econômica;
- comparação entre terminais.

**Observação:** nomes, capacidades e dados operacionais deverão ser validados com fontes oficiais antes da publicação.

---

## Módulo 03 — Navio 3D/360

Criar um navio cargueiro/porta-contêineres explorável.

Áreas selecionáveis:

- proa;
- popa;
- convés;
- ponte de comando;
- porões;
- bays;
- rows;
- tiers;
- casa de máquinas em versão didática;
- área de amarração;
- pontos de twist-lock;
- áreas de segurança.

Conteúdos associados:

- tipos de navios;
- porta-contêineres;
- graneleiro;
- tanque;
- Ro-Ro;
- multipropósito;
- cabotagem;
- calado;
- comprimento;
- boca;
- capacidade;
- deadweight;
- TEU.

Simulações futuras:

- posicionamento de contêineres;
- leitura de bay plan simplificado;
- distribuição de peso;
- operação de atracação em modo educativo;
- identificação de áreas e equipamentos.

---

## Módulo 04 — Laboratório de Contêineres 3D/360

Um dos principais módulos da plataforma.

Tipos iniciais:

- Dry 20 pés;
- Dry 40 pés;
- High Cube 40 pés;
- Reefer;
- Open Top;
- Flat Rack;
- Tank Container;
- contêineres especiais a incluir posteriormente.

Recursos:

- girar em 360°;
- abrir portas;
- visualizar interior;
- comparar dimensões;
- destacar estrutura;
- identificar corner castings;
- identificar portas, travas e lacres;
- visualizar placa CSC em exemplo didático;
- visualizar tara, payload, peso bruto e capacidade cúbica em ficha técnica.

Ferramentas práticas:

- comparador 20 x 40 x HC;
- calculadora de volume;
- calculadora de ocupação;
- limite de peso;
- distribuição de carga;
- seleção do contêiner adequado;
- leitura de identificação do contêiner;
- laboratório de inspeção pré-uso;
- caça-avarias;
- seleção de lacre;
- checklist de portas e estrutura.

### Laboratório Reefer

- temperatura configurada;
- temperatura medida;
- circulação de ar;
- alarmes;
- conexão elétrica;
- carga sensível;
- erro de setpoint;
- simulação simplificada de perda de energia.

---

## Módulo 05 — Pátio de contêineres

Ambiente 3D isométrico ou 3D leve representando um terminal.

Elementos:

- blocos de pátio;
- ruas operacionais;
- posições identificadas;
- contêineres cheios e vazios;
- reefers;
- área de vistoria;
- área de segregação;
- importação;
- exportação;
- cargas especiais.

Laboratórios:

- localizar contêiner por posição;
- interpretar endereço de pátio;
- reorganizar contêineres;
- reduzir remanejamentos;
- separar importação/exportação;
- identificar risco de posicionamento incorreto;
- priorizar unidade conforme janela operacional.

---

## Módulo 06 — Equipamentos portuários

Galeria 3D/360 e simuladores simplificados.

Equipamentos a mapear:

- Ship-to-Shore / portêiner;
- RTG;
- RMG;
- reach stacker;
- empty container handler;
- empilhadeira;
- terminal tractor;
- semirreboque portuário;
- guindastes móveis;
- balança rodoviária;
- spreader;
- twist-lock.

Para cada equipamento:

- finalidade;
- partes principais;
- capacidade básica;
- riscos;
- zona de operação;
- animação de funcionamento;
- atividade de identificação.

Laboratórios futuros:

- sequência correta para içamento;
- escolha de equipamento;
- movimentação virtual simplificada;
- detecção de colisão/área proibida;
- produtividade de operação.

---

## Módulo 07 — Caminhões, Gate e acesso ao terminal

Ambiente simulando chegada de caminhão ao porto.

Fluxo possível:

1. agendamento;
2. identificação do motorista;
3. placa/cavalo/carreta;
4. identificação da unidade;
5. documento da carga;
6. inspeção;
7. pesagem;
8. autorização de entrada;
9. destino dentro do terminal;
10. saída e nova pesagem quando aplicável.

Laboratórios:

- conferir dados divergentes;
- identificar placa incorreta;
- conferir contêiner e lacre;
- liberar/bloquear entrada;
- selecionar destino no terminal;
- simular fila de gate.

---

## Módulo 08 — Balança, pesagem e VGM

Simulador visual de balança rodoviária.

Recursos:

- peso bruto;
- tara do veículo;
- peso líquido;
- peso do contêiner;
- limites configuráveis;
- divergências;
- segunda pesagem;
- relatório de pesagem.

Ferramentas:

- calculadora de peso líquido;
- conferência de tara;
- comparação com documento;
- alerta de excesso;
- laboratório de VGM em abordagem educativa.

Cenários:

- peso declarado diferente do aferido;
- contêiner acima do limite;
- unidade incorreta;
- erro de digitação;
- necessidade de nova pesagem.

---

## Módulo 09 — Documentação de transporte

Laboratório com documentos fictícios e dados sintéticos.

Documentos/conceitos a mapear:

- CT-e;
- DACTE;
- NF-e;
- DANFE;
- MDF-e;
- documentos de transporte;
- comprovantes de pesagem;
- ordens de carregamento;
- agendamento;
- identificação/lacre do contêiner.

Atividades:

- localizar campos;
- conferir remetente/destinatário;
- conferir placa;
- conferir peso;
- conferir número do contêiner;
- identificar divergência;
- escolher documento necessário em cada etapa.

**Observação:** usar documentos totalmente fictícios, sem dados reais de pessoas ou empresas.

---

## Módulo 10 — Importação

Fluxo interativo simplificado da chegada da carga ao Brasil.

Tópicos a estudar e validar conforme legislação vigente:

- embarque;
- conhecimento de embarque / Bill of Lading;
- invoice;
- packing list;
- chegada do navio;
- descarga;
- presença de carga;
- armazenagem;
- processos aduaneiros;
- inspeção quando aplicável;
- liberação;
- retirada;
- transporte ao destino.

Documentos e sistemas deverão ser revisados antes de cada versão para refletir os processos vigentes no Brasil.

Laboratório:

- montar a sequência correta;
- encontrar documento ausente;
- detectar divergência entre invoice, packing list e carga;
- acompanhar linha do tempo da importação;
- resolver atraso operacional fictício.

---

## Módulo 11 — Exportação

Fluxo interativo simplificado:

- preparação da carga;
- documentação;
- transporte até terminal;
- gate-in;
- pesagem/VGM;
- armazenagem;
- programação;
- carregamento no navio;
- embarque;
- saída.

Possíveis documentos/conceitos:

- NF-e;
- CT-e/DACTE;
- DU-E e demais elementos aplicáveis ao processo vigente;
- invoice;
- packing list;
- booking;
- BL;
- VGM.

Laboratórios:

- ordenar etapas;
- validar documentos;
- escolher janela de entrada;
- detectar cut-off perdido;
- identificar divergência de peso;
- conferir lacre e unidade.

---

## Módulo 12 — Comércio exterior e documentos internacionais

Ferramentas didáticas:

- visualizador de invoice;
- visualizador de packing list;
- Bill of Lading interativo;
- comparador de documentos;
- glossário de comércio exterior;
- Incoterms em mapa/fluxo simplificado;
- responsabilidades comprador x vendedor;
- origem x destino;
- modal envolvido.

Importante: conteúdo legal, tributário e aduaneiro deve ser tratado como educacional e atualizado conforme fontes oficiais.

---

## Módulo 13 — Cargas portuárias

Tipos:

- contêineres;
- granéis sólidos;
- granéis líquidos;
- carga geral;
- veículos;
- carga projeto;
- cargas refrigeradas;
- cargas perigosas.

Experiência:

- identificar tipo de carga;
- selecionar equipamento;
- selecionar armazenamento;
- reconhecer riscos;
- selecionar EPI/EPC em contexto didático;
- definir cuidados de movimentação.

---

## Módulo 14 — Cargas perigosas

Introdução didática à classificação e segregação de cargas perigosas.

Recursos:

- símbolos;
- classes;
- painel de identificação;
- escolha de área de segregação;
- incompatibilidades em exercícios simplificados;
- tomada de decisão em cenário fictício.

Toda regra técnica deve ser validada com normas e materiais oficiais antes de ser apresentada como procedimento operacional.

---

## Módulo 15 — Segurança portuária

Conteúdos:

- circulação em terminal;
- zonas de risco;
- máquinas pesadas;
- movimentação suspensa;
- áreas restritas;
- sinalização;
- comunicação;
- EPI/EPC;
- comportamento seguro;
- emergência.

Laboratório 360:

- encontre os riscos;
- selecione a rota segura;
- identifique comportamento inadequado;
- escolha equipamento de proteção para o cenário.

---

## Módulo 16 — Meio ambiente portuário

Conteúdos possíveis:

- resíduos;
- derramamento;
- óleo;
- água de lastro;
- emissões;
- ruído;
- fauna;
- dragagem;
- gestão ambiental;
- resposta a incidente ambiental em cenário educativo.

Laboratório:

- identificar fonte de impacto;
- selecionar resposta adequada entre opções;
- organizar plano inicial de contenção em cenário fictício.

---

## Módulo 17 — Atracação, berço e operação de navio

Conceitos:

- ETA;
- ETB;
- ETD;
- berço;
- calado;
- maré;
- janela de atracação;
- amarração;
- produtividade;
- sequência de operação.

Simulador futuro:

- agenda de berços;
- chegada de navios;
- conflito de horários;
- escolha de berço;
- atraso e impacto em cadeia.

---

## Módulo 18 — Planejamento de carga e Bay Plan

Laboratório educativo de estiva de contêineres.

Conceitos:

- bay;
- row;
- tier;
- posição;
- peso;
- destino;
- reefers;
- cargas especiais;
- segregação;
- estabilidade em nível introdutório.

Atividades:

- localizar unidade;
- interpretar código de posição;
- encaixar contêiner em posição válida;
- detectar posicionamento inadequado;
- organizar unidades por destino.

Evitar apresentar um simulador educacional simplificado como substituto de software profissional de planejamento naval.

---

## Módulo 19 — Logística intermodal

Visualização do fluxo:

Navio → Terminal → Caminhão → Ferrovia → Armazém → Cliente

Ferramentas:

- escolha de modal;
- comparação de tempo/distância/capacidade usando dados fictícios;
- montagem de rota logística;
- análise de gargalo.

---

## Módulo 20 — Gestão e indicadores portuários

Painel didático com dados fictícios:

- movimentações/hora;
- TEU movimentado;
- tempo de permanência;
- fila de gate;
- ocupação do pátio;
- produtividade de equipamento;
- tempo de operação do navio;
- taxa de remanejamento;
- número de avarias;
- divergências documentais.

Atividade:

- aluno recebe um turno problemático e precisa identificar o gargalo.

---

# 6. Ferramentas rápidas da plataforma

Criar uma área chamada **Caixa de Ferramentas Portuárias**.

Ferramentas previstas:

1. Conversor kg ↔ t.
2. Calculadora de peso bruto/líquido/tara.
3. Calculadora de volume m³.
4. Comparador de contêineres.
5. Calculadora de ocupação de contêiner.
6. Simulador de distribuição de peso.
7. Consulta didática de código/tipo de contêiner.
8. Gerador de contêiner fictício para exercícios.
9. Simulador de lacre.
10. Checklist de inspeção de contêiner.
11. Checklist de gate.
12. Checklist de pesagem.
13. Conferidor de documentos fictícios.
14. Linha do tempo de importação.
15. Linha do tempo de exportação.
16. Calculadora simples de produtividade.
17. Simulador de fila de caminhões.
18. Planejador de bloco de pátio.
19. Leitor educativo de bay/row/tier.
20. Glossário técnico pesquisável.

---

# 7. Profissões e carreira

Área específica para contextualizar o curso.

Possíveis perfis profissionais:

- técnico da área portuária;
- assistente de operações;
- controlador de pátio;
- conferente;
- planejador operacional;
- operador de gate;
- assistente de documentação;
- assistente de comércio exterior;
- funções ligadas a transporte e logística;
- funções em terminais e retroáreas.

Para cada profissão:

- o que faz;
- onde trabalha;
- atividades do dia a dia;
- conhecimentos necessários;
- ferramentas utilizadas;
- habilidades comportamentais;
- caminhos de formação;
- cenário interativo relacionado à função.

---

# 8. Glossário técnico

Glossário pesquisável com termos como:

- TEU;
- FEU;
- reefer;
- HC / High Cube;
- gate-in;
- gate-out;
- VGM;
- booking;
- BL;
- invoice;
- packing list;
- CT-e;
- DACTE;
- NF-e;
- DANFE;
- MDF-e;
- DU-E;
- DUIMP;
- recinto alfandegado;
- berço;
- calado;
- draft;
- ETA;
- ETB;
- ETD;
- demurrage;
- detention;
- THC;
- spreader;
- twist-lock;
- RTG;
- RMG;
- reach stacker;
- portêiner/STS;
- bay;
- row;
- tier;
- cabotagem;
- transbordo;
- retroárea.

O glossário deverá crescer ao longo do projeto.

---

# 9. Cenários práticos prioritários

## Cenário A — Recebimento de contêiner de exportação

O aluno recebe:

- caminhão;
- motorista fictício;
- contêiner;
- peso;
- lacre;
- CT-e/DACTE fictício;
- NF-e fictícia;
- booking;
- janela de gate.

Deve verificar os dados e decidir se libera ou não.

## Cenário B — Divergência de peso

Peso documental diferente da balança.

Aluno deve:

- identificar divergência;
- revisar dados;
- selecionar ação correta dentre alternativas educativas.

## Cenário C — Contêiner reefer

Aluno deve configurar e conferir:

- temperatura;
- conexão;
- status;
- alarme;
- documentação.

## Cenário D — Pátio lotado

Aluno precisa reorganizar unidades e reduzir remanejamentos.

## Cenário E — Importação com documento divergente

Comparar documentos fictícios e encontrar erro.

## Cenário F — Navio chegando com atraso

Reprogramar berço/pátio/equipamento em simulador simplificado.

## Cenário G — Inspeção de contêiner

Encontrar avarias em modelo 3D/360 antes da liberação.

---

# 10. Recursos de experiência 3D/360

O 3D deve ser modular para não pesar demais em computadores escolares.

Estratégia sugerida:

- modelos simplificados/otimizados;
- níveis de qualidade Baixo / Médio / Alto;
- fallback 2D para dispositivos fracos;
- carregamento por demanda;
- evitar baixar todos os modelos na abertura;
- manter interface utilizável mesmo sem WebGL avançado.

Ambientes prioritários:

1. Contêiner 3D/360.
2. Navio porta-contêineres.
3. Pátio.
4. Gate.
5. Balança.
6. Portêiner/STS.
7. RTG/reach stacker.
8. Área de segurança 360.
9. Berço de atracação.
10. Interior de contêiner reefer.

---

# 11. Sistema de aprendizagem

Possíveis componentes:

- modo livre;
- modo aula guiada;
- desafio rápido;
- estudo de caso;
- checklist;
- missão operacional;
- identificação visual;
- ordenar etapas;
- conferir documento;
- detectar erro;
- tomada de decisão;
- relatório final.

Feedback ao aluno:

- explicar por que acertou;
- explicar por que errou;
- mostrar consequência operacional simulada;
- indicar termo técnico relacionado;
- permitir tentar novamente.

---

# 12. Painel do professor — versão front-end

Sem backend inicialmente.

Possibilidades locais:

- selecionar módulo;
- selecionar cenário;
- iniciar modo demonstração;
- gerar código local de atividade;
- escolher dificuldade;
- ativar/desativar dicas;
- definir dados fictícios do cenário;
- exportar resultado local em PDF/JSON futuramente;
- reiniciar laboratório.

Se futuramente houver necessidade de turmas, login e sincronização entre dispositivos, isso exigirá uma segunda arquitetura com backend/banco de dados.

---

# 13. Dados e privacidade

Na versão GitHub Pages:

- não usar dados reais de alunos em demonstrações públicas;
- documentos de exemplo devem ser fictícios;
- empresas e pessoas fictícias nos laboratórios;
- quando houver persistência, utilizar armazenamento local do navegador para progresso não sensível;
- não simular documento oficial de forma que possa ser confundido com documento válido;
- aplicar marca d'água como **EXEMPLO DIDÁTICO / SEM VALIDADE** nos documentos simulados.

---

# 14. Arquitetura técnica inicial

Estrutura sugerida:

```text
lab-portos/
├── index.html
├── assets/
│   ├── icons/
│   ├── images/
│   ├── models/
│   ├── textures/
│   └── audio/
├── css/
│   ├── main.css
│   ├── responsive.css
│   └── labs.css
├── js/
│   ├── app.js
│   ├── router.js
│   ├── storage.js
│   ├── glossary.js
│   ├── simulations/
│   └── labs/
├── data/
│   ├── glossary.json
│   ├── ports.json
│   ├── containers.json
│   ├── equipment.json
│   └── scenarios.json
├── labs/
│   ├── containers/
│   ├── ship/
│   ├── yard/
│   ├── gate/
│   ├── weighbridge/
│   └── documents/
└── docs/
    └── CONTEXTO.md
```

Em GitHub Pages, arquivos JSON estáticos podem ser utilizados como base de conteúdo sem necessidade de banco de dados.

---

# 15. Visual e identidade

Direção inicial:

- aparência industrial/portuária moderna;
- azul profundo, grafite, aço e detalhes de segurança;
- visual de central operacional;
- mapa e terminal como elementos visuais;
- cards técnicos;
- indicadores e painéis;
- ícones simples;
- pouco texto visível de uma vez;
- detalhes em gavetas/modais;
- prioridade para informação espacial e operacional.

Possíveis modos:

- Operação Diurna;
- Operação Noturna;
- Alto Contraste;
- Baixo Desempenho.

---

# 16. Fases sugeridas de desenvolvimento

## Fase P0 — Planejamento e mapa curricular

- definir nome final;
- identidade;
- estrutura de navegação;
- lista de módulos;
- mapa dos conteúdos do curso;
- lista de termos;
- lista de documentos;
- lista de equipamentos;
- lista de portos/terminais de referência.

## Fase P1 — Fundação da plataforma

- home;
- navegação;
- layout responsivo;
- sistema de módulos;
- glossário;
- fichas de profissões;
- central de ferramentas vazia/pronta para expansão.

## Fase P2 — Laboratório de Contêineres

- 20';
- 40';
- 40' HC;
- reefer;
- comparador;
- inspeção;
- calculadoras básicas;
- primeira experiência 3D/360.

## Fase P3 — Gate + Caminhão + Balança

- fluxo de entrada;
- documentos fictícios;
- pesagem;
- conferência;
- divergências;
- cenários guiados.

## Fase P4 — Pátio de Contêineres

- mapa do pátio;
- posições;
- localização;
- remanejamento;
- import/export;
- reefers.

## Fase P5 — Navio e Bay Plan

- navio 3D;
- áreas do navio;
- bays/rows/tiers;
- posicionamento educativo de contêineres.

## Fase P6 — Equipamentos

- portêiner;
- RTG;
- reach stacker;
- spreader;
- animações e desafios.

## Fase P7 — Importação, Exportação e Documentos

- fluxos;
- documentos didáticos;
- conferência;
- cenários de erro;
- linha do tempo.

## Fase P8 — Segurança, cargas especiais e meio ambiente

- riscos;
- 360 de segurança;
- cargas perigosas;
- resposta ambiental;
- emergências educativas.

## Fase P9 — Gestão Operacional

- berth planning simplificado;
- indicadores;
- produtividade;
- filas;
- gargalos;
- painel de turno.

## Fase P10 — Consolidação

- auditoria;
- desempenho;
- acessibilidade;
- responsividade;
- modo aula;
- relatórios;
- documentação do projeto.

---

# 17. Princípios para futuras implementações

1. Não transformar a plataforma em uma enciclopédia estática.
2. Todo módulo importante deve ter pelo menos uma atividade prática.
3. Sempre que possível, relacionar conteúdo com uma situação real de terminal.
4. O 3D deve ensinar algo concreto, e não existir somente como efeito visual.
5. Os laboratórios devem trabalhar identificação, conferência, sequência, decisão e consequência.
6. O sistema deve ser utilizável pelo professor em projetor e pelo aluno individualmente.
7. Dados de empresas, pessoas, documentos e cargas usados nos exercícios serão fictícios.
8. Normas e processos oficiais devem ser revisados antes da publicação.
9. O desempenho em computadores escolares deve ser considerado desde o primeiro módulo.
10. O desenvolvimento será cumulativo: cada nova fase preserva os módulos anteriores.

---

# 18. Termos citados inicialmente que precisam de validação durante o mapeamento

Alguns termos foram citados oralmente na concepção inicial e precisam ser confirmados antes de virar conteúdo definitivo:

- lista exata de portos/terminais brasileiros que entrarão no módulo comparativo;
- documentos específicos adicionais de importação/exportação;
- possíveis siglas citadas além de CT-e/DACTE, NF-e, DI/DUIMP, DU-E, BL e Packing List;
- nomenclaturas internas de terminais que podem variar entre empresas.

A regra é **não presumir uma sigla ou procedimento operacional sem validação**.

---

# 19. Próximo passo recomendado

Antes de programar a interface completa, montar um **Mapa Curricular Portuário → Módulos da Plataforma**, relacionando:

- conteúdo do curso;
- profissão/atividade real;
- conceito técnico;
- ferramenta digital;
- laboratório virtual correspondente;
- nível de dificuldade;
- possibilidade 2D/3D/360;
- dados/documentos necessários.

Esse mapeamento definirá o backlog oficial da plataforma.

---

## Histórico

### v0.1 — 07/08/2026

- criação do contexto mestre;
- definição do conceito LAB PORTOS 360;
- primeira macroestrutura de módulos;
- inclusão de contêineres, navio, pátio, gate, balança, equipamentos, documentos, importação/exportação, segurança, meio ambiente e gestão;
- definição de arquitetura inicial compatível com GitHub Pages;
- criação das fases P0 a P10;
- estabelecimento do princípio de desenvolvimento cumulativo.

---

# 20. Arquitetura modular evolutiva — decisão v0.2

A plataforma deverá nascer com uma arquitetura que permita aumentar a qualidade visual, a complexidade das simulações e a quantidade de laboratórios sem reescrever o núcleo do sistema.

## 20.1 Princípio arquitetural

Separar obrigatoriamente cinco responsabilidades:

1. **Shell da aplicação** — navegação, cabeçalho, menus, modais, notificações e layout.
2. **Conteúdo pedagógico** — textos, glossário, fichas, instruções, perguntas e dados técnicos.
3. **Lógica de laboratório** — objetivos, estados, regras, validações, erros, pontuação e consequências.
4. **Motor visual** — 2D, 3D, câmera, controles, iluminação, materiais, animação, efeitos e interação espacial.
5. **Assets** — modelos, texturas, áudio, imagens, ícones e ambientes 360.

Regra principal: **um módulo pedagógico nunca deverá depender diretamente de um modelo 3D específico**. O laboratório solicita uma entidade lógica — por exemplo `container-40hc` — e o gerenciador de assets decide qual representação carregar de acordo com o nível gráfico e o dispositivo.

Isso permitirá substituir futuramente um contêiner simples por um modelo de alta fidelidade sem alterar regras de inspeção, atividades, textos ou validações.

---

# 21. Camadas do sistema

## Camada A — App Shell

Responsável por:

- inicialização da aplicação;
- navegação;
- menu principal;
- busca global;
- breadcrumbs;
- gavetas laterais;
- sistema de modais;
- toast/alertas;
- ajuda contextual;
- modo tela cheia;
- temas;
- acessibilidade;
- indicadores de carregamento.

O shell deve carregar rapidamente e **não deve importar o motor 3D na página inicial**.

## Camada B — Module Registry

Catálogo central de módulos e laboratórios.

Cada módulo deverá possuir um manifesto semelhante a:

```js
{
  id: 'container-inspection',
  title: 'Inspeção de Contêiner',
  category: 'containers',
  version: '1.0.0',
  minGraphics: 'lite',
  supports2D: true,
  supports3D: true,
  assets: ['container-40hc'],
  data: ['containerInspection'],
  entry: './modules/containers/inspection/index.js'
}
```

O registro permitirá:

- carregar módulos sob demanda;
- ativar/desativar recursos;
- manter versões independentes;
- adicionar novos laboratórios sem alterar o núcleo;
- oferecer filtros por tema, dificuldade e recurso gráfico.

## Camada C — Content/Data Layer

Conteúdo preferencialmente externo ao JavaScript de interface.

Arquivos sugeridos:

- `ports.json`;
- `containers.json`;
- `equipment.json`;
- `documents.json`;
- `glossary.json`;
- `scenarios.json`;
- `missions.json`;
- `quality-presets.json`;
- `asset-manifest.json`.

Benefícios:

- atualizar conteúdo sem reescrever o laboratório;
- facilitar auditoria técnica;
- reutilizar conteúdo em diferentes experiências;
- permitir futuramente tradução ou variações por turma.

## Camada D — Simulation Core

Motor comum para laboratórios.

Responsabilidades:

- estado da missão;
- etapas concluídas;
- tentativa atual;
- regras de validação;
- eventos;
- consequências simuladas;
- dicas;
- feedback;
- tempo de atividade;
- resultados;
- geração de relatório.

Exemplos de eventos padronizados:

- `MISSION_STARTED`;
- `OBJECT_SELECTED`;
- `CHECK_COMPLETED`;
- `DOCUMENT_MISMATCH`;
- `WEIGHT_LIMIT_EXCEEDED`;
- `WRONG_DECISION`;
- `MISSION_COMPLETED`.

A lógica deverá funcionar mesmo quando o laboratório estiver usando representação 2D em vez de 3D.

## Camada E — Graphics Engine

Criar uma camada própria entre os laboratórios e a biblioteca gráfica.

Interfaces conceituais:

- `SceneManager`;
- `CameraManager`;
- `AssetManager`;
- `InteractionManager`;
- `AnimationManager`;
- `LightingManager`;
- `QualityManager`;
- `PerformanceMonitor`;
- `EnvironmentManager`;
- `DisposeManager`.

O módulo não deverá espalhar chamadas de Three.js por toda a lógica pedagógica. O objetivo é concentrar dependências gráficas e facilitar futuras alterações de renderer ou técnicas de renderização.

## Camada F — Device & Performance Layer

Responsável por observar:

- tamanho da tela;
- memória aproximada disponível quando a API permitir;
- número de núcleos lógicos quando disponível;
- capacidade WebGL/WebGPU quando aplicável;
- resolução interna do canvas;
- FPS médio;
- tempo de frame;
- quantidade de objetos;
- quantidade de draw calls;
- quantidade aproximada de triângulos;
- texturas carregadas;
- tempo de carregamento de assets.

A decisão de qualidade deverá ser automática por padrão, mas o usuário poderá selecionar manualmente outro perfil.

---

# 22. Perfis gráficos progressivos

A plataforma deverá oferecer **Auto + quatro níveis de qualidade**, mantendo os mesmos laboratórios.

## Q0 — Compatibilidade / 2D

Para dispositivos sem capacidade suficiente para a cena 3D.

- interface completa;
- diagramas 2D;
- imagens 360 quando possível;
- plantas esquemáticas;
- modelos substituídos por fichas interativas;
- todas as regras pedagógicas preservadas.

## Q1 — Econômico / 3D Lite

- geometrias simplificadas;
- LOD baixo;
- iluminação simples;
- sombras desativadas ou extremamente limitadas;
- materiais básicos/PBR simplificado;
- texturas menores;
- quantidade reduzida de objetos simultâneos;
- efeitos de pós-processamento desligados.

## Q2 — Balanceado

Perfil padrão pretendido para notebooks escolares compatíveis.

- LOD intermediário;
- PBR nos objetos principais;
- sombras seletivas;
- texturas intermediárias;
- animações operacionais;
- iluminação ambiental melhorada;
- reflexos somente onde forem relevantes.

## Q3 — Alto

- modelos mais detalhados;
- interiores selecionados;
- materiais PBR completos;
- texturas maiores nos elementos próximos;
- sombras melhores;
- maior distância de desenho;
- efeitos visuais seletivos;
- maior densidade de cenário.

## Q4 — Ultra / Demonstração

Perfil voltado a máquinas mais fortes, demonstrações e futuras versões premium gráficas do projeto.

- modelos de maior fidelidade;
- detalhes estruturais adicionais;
- texturas de maior resolução somente onde agregarem valor;
- melhor iluminação;
- reflexos e efeitos avançados seletivos;
- maior densidade de objetos;
- animações ambientais extras.

**Regra:** Ultra nunca será requisito para concluir uma atividade.

---

# 23. Qualidade automática e resolução dinâmica

O perfil **Auto** deverá ser o padrão.

Fluxo planejado:

1. detectar capacidades básicas do navegador/dispositivo;
2. iniciar em um perfil seguro;
3. executar pequeno benchmark invisível ou durante a primeira cena;
4. medir estabilidade de frame;
5. ajustar resolução interna e qualidade;
6. continuar monitorando durante a experiência;
7. reduzir custo gráfico antes que o laboratório fique inutilizável.

Prioridade de redução quando houver queda de desempenho:

1. reduzir resolução interna de renderização;
2. reduzir sombras;
3. reduzir efeitos de pós-processamento;
4. reduzir distância/densidade de objetos secundários;
5. trocar LOD;
6. reduzir atualização de elementos ambientais;
7. somente em último caso migrar para modo visual simplificado/2D.

Meta pedagógica de desempenho:

- buscar aproximadamente **60 FPS** quando possível;
- manter uma experiência estável em torno de **30 FPS ou mais** em dispositivos modestos;
- evitar que qualidade gráfica comprometa clique, leitura, seleção ou execução da atividade.

Não utilizar automaticamente toda a densidade de pixels de telas de alta resolução. O `QualityManager` deverá limitar a resolução interna do canvas de acordo com o perfil e orçamento de GPU.

---

# 24. Sistema de LOD — Level of Detail

Todo asset 3D importante deverá poder possuir variantes.

Exemplo:

```text
container-40hc/
├── container-40hc_lod0.glb   # maior detalhe
├── container-40hc_lod1.glb   # intermediário
├── container-40hc_lod2.glb   # leve
├── collision.glb             # colisão simplificada
├── thumbnail.webp
└── manifest.json
```

Uso planejado:

- objeto próximo/interagindo → LOD de maior qualidade permitido pelo perfil;
- objeto médio → LOD intermediário;
- objeto distante → LOD simplificado;
- grandes pilhas de contêineres → instancing + modelos de baixo custo;
- objetos invisíveis → não renderizar.

Os modelos de colisão e seleção devem ser simplificados e independentes da malha visual sempre que isso melhorar desempenho.

---

# 25. Pipeline oficial de assets 3D

Formato de distribuição principal previsto: **glTF/GLB**.

A pipeline deverá permitir:

- compressão de geometria;
- texturas comprimidas para GPU;
- mipmaps;
- LODs;
- atlas quando fizer sentido;
- remoção de vértices/objetos invisíveis;
- união de geometrias estáticas quando vantajoso;
- instancing para objetos repetidos;
- colisores simplificados;
- thumbnails 2D para fallback/carregamento.

Tecnologias a avaliar por asset:

- **Draco** para compressão de geometria;
- **Meshopt** como alternativa de compressão/otimização;
- **KTX2/Basis Universal** para texturas comprimidas na GPU.

Não aplicar uma compressão apenas porque existe. Cada classe de asset deverá ser testada considerando tamanho transferido, tempo de decodificação, memória e desempenho no dispositivo-alvo.

---

# 26. Asset Manager central

Nenhum laboratório deverá carregar modelos diretamente por caminhos espalhados pelo código.

Criar um manifesto central:

```json
{
  "container-40hc": {
    "lite": "assets/models/containers/40hc/lod2.glb",
    "balanced": "assets/models/containers/40hc/lod1.glb",
    "high": "assets/models/containers/40hc/lod0.glb",
    "ultra": "assets/models/containers/40hc/lod0.glb"
  }
}
```

Funções do `AssetManager`:

- resolver variante conforme perfil gráfico;
- impedir downloads duplicados;
- cachear assets durante a sessão;
- mostrar progresso;
- cancelar carregamentos desnecessários quando possível;
- descarregar recursos de GPU ao sair de módulos pesados;
- manter apenas assets compartilhados realmente necessários;
- registrar falhas e escolher fallback.

---

# 27. Carregamento sob demanda

Regra obrigatória: **a home nunca carregará navio, pátio, equipamentos ou texturas pesadas**.

Estratégia:

### Nível 1 — Shell
Carrega somente HTML/CSS/JS essencial, ícones e dados mínimos.

### Nível 2 — Módulo
Ao abrir “Contêineres”, carrega código e dados do módulo.

### Nível 3 — Laboratório
Ao escolher “Inspeção 40 HC”, carrega apenas recursos da experiência.

### Nível 4 — Assets visuais
O modelo base aparece primeiro; detalhes secundários podem ser carregados progressivamente.

### Nível 5 — Alta qualidade
Assets High/Ultra somente serão solicitados se o perfil selecionado permitir.

---

# 28. Renderização eficiente de ambientes portuários

Ambientes como pátio e navio terão muitos objetos repetidos. Devem utilizar estratégias próprias.

## Contêineres no pátio

- instanced rendering quando aplicável;
- geometrias compartilhadas;
- materiais compartilhados;
- variação de identificação/cor por dados e não por duplicação completa de modelo;
- LOD por distância;
- culling;
- objetos internos do contêiner carregados somente quando aberto/inspecionado.

## Navio

Dividir em zonas carregáveis:

- casco externo;
- convés;
- bays;
- ponte;
- áreas educativas internas;
- equipamentos específicos.

Não carregar todo o interior do navio quando o aluno estiver observando apenas a parte externa.

## Equipamentos

Separar:

- estrutura estática;
- partes móveis;
- cabine/interior;
- animações;
- colisores;
- hotspots pedagógicos.

---

# 29. Materiais, texturas e iluminação evolutivos

A aparência deverá crescer sem trocar as regras dos objetos.

Um contêiner poderá evoluir por etapas:

### Visual V1
- cor base;
- geometria simples;
- identificação textual.

### Visual V2
- material metálico;
- roughness;
- normal map;
- detalhes de portas e travas.

### Visual V3
- desgaste;
- sujeira;
- variação de pintura;
- decalques;
- avarias selecionáveis.

### Visual V4
- microdetalhes seletivos;
- interiores completos em laboratórios específicos;
- iluminação e reflexos avançados;
- animações detalhadas.

Texturas de alta resolução deverão ser reservadas para objetos próximos e importantes. Cenários distantes não deverão consumir memória com texturas equivalentes às do objeto principal.

---

# 30. Arquitetura de interação 3D

Padronizar interações para toda a plataforma.

Eventos principais:

- hover;
- selecionar;
- focar;
- aproximar;
- girar;
- abrir/fechar;
- arrastar;
- encaixar;
- inspecionar;
- medir;
- identificar hotspot;
- executar ação operacional.

O `InteractionManager` deverá transformar uma interação espacial em evento semântico.

Exemplo:

```text
Clique na maçaneta 3D
        ↓
InteractionManager
        ↓
OPEN_CONTAINER_DOOR
        ↓
Simulation Core
        ↓
Atualiza missão + toca animação + exibe conteúdo
```

Isso evita colocar regras pedagógicas dentro do código de raycasting ou animação.

---

# 31. Simulações independentes da qualidade gráfica

Uma mesma missão deverá funcionar em diferentes apresentações.

Exemplo — “Encontrar avaria no contêiner”:

- Q0: fotografia/diagrama 2D com pontos clicáveis;
- Q1: contêiner 3D simplificado;
- Q2: 3D com portas e avarias principais;
- Q3: texturas e danos mais detalhados;
- Q4: iluminação, interior e detalhes adicionais.

A resposta correta, pontuação, feedback e relatório serão os mesmos.

---

# 32. Estratégia para ambientes 360

Ambientes 360 serão tratados como uma solução complementar e mais leve em determinados cenários.

Usar quando:

- o objetivo for reconhecimento do ambiente;
- não houver necessidade de física complexa;
- uma fotografia/panorama permitir mais realismo com menor custo;
- a máquina não suportar uma cena 3D equivalente.

Recursos:

- hotspots;
- zonas clicáveis;
- mini mapa;
- informações contextuais;
- perguntas dentro do ambiente;
- transição entre pontos 360;
- modo “encontre o risco”.

---

# 33. Orçamentos de desempenho por laboratório

Cada laboratório 3D deverá possuir um `performance-budget.json` ou configuração equivalente.

Itens a registrar:

- tamanho máximo desejado do primeiro download;
- quantidade máxima recomendada de assets simultâneos;
- textura máxima por perfil;
- triângulos aproximados por perfil;
- draw calls aproximadas;
- sombras permitidas;
- efeitos permitidos;
- memória estimada de GPU;
- FPS alvo;
- fallback disponível.

Os valores exatos serão definidos após protótipos e testes nos notebooks escolares reais. O orçamento será baseado em medição, e não apenas em números teóricos.

---

# 34. Diagnóstico de desempenho embutido

Criar futuramente um **Painel Técnico**, acessível no modo Professor/Desenvolvimento.

Indicadores:

- FPS atual e médio;
- frame time;
- resolução interna;
- perfil gráfico ativo;
- objetos na cena;
- triângulos;
- draw calls;
- texturas;
- assets carregados;
- tamanho aproximado da sessão;
- tempo de carregamento;
- renderer ativo;
- erros de WebGL/asset.

Isso permitirá descobrir rapidamente por que determinado laboratório está lento em uma máquina da escola.

---

# 35. Ciclo de vida e liberação de memória

Em uma SPA com vários laboratórios, sair de uma cena deve liberar seus recursos.

Cada módulo pesado deverá implementar:

- `mount()`;
- `start()`;
- `pause()`;
- `resume()`;
- `reset()`;
- `dispose()`.

O `dispose()` deverá remover:

- listeners;
- timers;
- loops de animação;
- geometrias descartáveis;
- materiais descartáveis;
- texturas não compartilhadas;
- render targets;
- referências a objetos grandes.

Objetivo: evitar que abrir três laboratórios sucessivamente faça a memória aumentar continuamente.

---

# 36. Estrutura de diretórios revisada

```text
lab-portos/
├── index.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── responsive.css
│   └── accessibility.css
│
├── js/
│   ├── app.js
│   ├── core/
│   │   ├── router.js
│   │   ├── module-registry.js
│   │   ├── event-bus.js
│   │   ├── storage.js
│   │   └── diagnostics.js
│   │
│   ├── simulation/
│   │   ├── simulation-core.js
│   │   ├── mission-engine.js
│   │   ├── validator.js
│   │   └── report-engine.js
│   │
│   ├── graphics/
│   │   ├── graphics-engine.js
│   │   ├── scene-manager.js
│   │   ├── camera-manager.js
│   │   ├── asset-manager.js
│   │   ├── interaction-manager.js
│   │   ├── animation-manager.js
│   │   ├── lighting-manager.js
│   │   ├── quality-manager.js
│   │   ├── performance-monitor.js
│   │   └── dispose-manager.js
│   │
│   ├── ui/
│   └── modules/
│       ├── containers/
│       ├── gate/
│       ├── weighbridge/
│       ├── yard/
│       ├── ship/
│       ├── equipment/
│       ├── documents/
│       └── safety/
│
├── data/
│   ├── glossary/
│   ├── ports/
│   ├── equipment/
│   ├── containers/
│   ├── documents/
│   ├── scenarios/
│   └── presets/
│
├── assets/
│   ├── models/
│   ├── textures/
│   ├── environments/
│   ├── panoramas/
│   ├── images/
│   ├── icons/
│   └── audio/
│
├── modules/
│   └── manifests/
│
├── tools/
│   └── asset-pipeline/
│
└── docs/
    ├── CONTEXTO.md
    ├── ARCHITECTURE.md
    ├── PERFORMANCE.md
    └── ASSET_GUIDE.md
```

A execução pública continuará podendo ser totalmente estática no GitHub Pages. Ferramentas em `tools/` serão utilizadas apenas no desenvolvimento para otimizar assets antes da publicação.

---

# 37. Estratégia de dependências

A aplicação deve evitar dependências desnecessárias.

Diretriz inicial:

- HTML/CSS/JavaScript nativos para a aplicação;
- ES Modules para organização do código;
- biblioteca 3D isolada na camada gráfica;
- dependências externas versionadas e documentadas;
- evitar carregar bibliotecas de um módulo que o aluno não abriu;
- evitar frameworks pesados apenas para navegação/UI básica;
- ferramentas de build poderão ser usadas no desenvolvimento para otimização, sem transformar o servidor de produção em requisito.

Para o 3D, **Three.js é a referência inicial**, mas o restante da aplicação não deverá ficar fortemente acoplado à API da biblioteca.

---

# 38. Estratégia de cache e offline parcial

Planejar progressivamente:

- cache do shell;
- cache de JSONs pequenos;
- cache de thumbnails;
- assets 3D armazenados pelo navegador após primeiro uso quando apropriado;
- Service Worker em fase posterior;
- botão para limpar cache do laboratório em modo professor/desenvolvimento;
- versionamento de assets para evitar arquivos antigos após atualização.

Não pré-cachear todos os modelos 3D da plataforma.

---

# 39. Matriz de crescimento gráfico sem reescrita

Cada laboratório deverá evoluir em trilhas independentes:

| Eixo | Inicial | Evolução | Avançado |
|---|---|---|---|
| Geometria | simples | LODs | alta fidelidade seletiva |
| Materiais | básicos | PBR | materiais avançados |
| Texturas | 512/1K quando adequado | 1K/2K seletivo | maior resolução apenas em foco |
| Iluminação | ambiente | sombras seletivas | iluminação avançada |
| Animação | ações essenciais | operação completa | detalhes secundários |
| Cenário | objetos principais | ambiente intermediário | densidade adaptativa |
| Física | colisão simples | regras operacionais | física seletiva |
| Áudio | feedback UI | máquinas/ambiente | áudio espacial seletivo |
| 360 | hotspots | múltiplos pontos | integração híbrida 3D/360 |
| Interação | clique | manipulação | instrumentos e operação |

**Nenhum eixo deverá obrigar a reescrita do conteúdo pedagógico.**

---

# 40. Ordem técnica recomendada para implementação

## Arquitetura A0 — Fundação modular

- App Shell;
- Event Bus;
- Module Registry;
- Content Loader;
- Storage;
- sistema de rotas;
- contratos `mount/dispose`.

## Arquitetura A1 — Graphics Core mínimo

- canvas;
- renderer;
- cena;
- câmera;
- controles;
- Asset Manager;
- primeiro GLB;
- fallback 2D.

## Arquitetura A2 — Quality Manager

- Auto;
- Q0–Q4;
- resolução adaptativa;
- métricas de FPS;
- troca de LOD;
- preferências persistidas.

## Arquitetura A3 — Interaction Core

- raycast/seleção;
- hotspots;
- eventos semânticos;
- outline/destaque leve;
- teclado/touch/mouse.

## Arquitetura A4 — Simulation Core

- missão;
- etapas;
- regras;
- feedback;
- relatório;
- reinício.

## Arquitetura A5 — Primeiro laboratório vertical completo

Usar **Contêiner 40 HC — Inspeção** como prova da arquitetura, contendo:

- versão 2D;
- versão 3D Lite;
- três LODs de exemplo;
- abertura de portas;
- hotspots;
- avarias;
- checklist;
- feedback;
- relatório;
- modo Auto;
- diagnóstico de desempenho.

Esse laboratório será o benchmark arquitetural para todos os demais.

---

# 41. Regras permanentes de otimização

1. Não carregar aquilo que não está sendo usado.
2. Reutilizar geometrias, materiais e texturas quando possível.
3. Objetos repetidos devem ser instanciados quando tecnicamente adequado.
4. Interior complexo somente será carregado quando necessário.
5. Sombras serão seletivas, nunca indiscriminadas.
6. Pós-processamento deverá ter justificativa visual/pedagógica.
7. Texturas maiores não significam automaticamente maior qualidade percebida.
8. Resolução do canvas será controlada separadamente da resolução da tela.
9. Cada cena pesada deverá possuir fallback.
10. Cada laboratório deverá liberar memória ao ser fechado.
11. O perfil Auto deverá priorizar estabilidade antes de efeitos gráficos.
12. A qualidade gráfica deverá ser escalável por asset e por recurso, não apenas por um botão global.
13. Otimização deverá ser medida em hardware real utilizado pelos alunos.
14. O carregamento inicial da plataforma deverá permanecer leve mesmo quando o catálogo crescer.
15. Uma atualização gráfica nunca deverá quebrar a lógica pedagógica existente.

---

# 42. Decisão arquitetural consolidada

O LAB PORTOS 360 seguirá o modelo:

```text
CONTEÚDO / DADOS
       ↓
SIMULATION CORE
       ↓
EVENTOS SEMÂNTICOS
       ↓
MÓDULO DO LABORATÓRIO
       ↓
GRAPHICS ADAPTER
       ↓
QUALITY MANAGER
       ↓
2D / 360 / 3D LITE / 3D HIGH / 3D ULTRA
```

Esse desenho será a base para o crescimento de longo prazo da plataforma.

O projeto deverá crescer em duas dimensões independentes:

- **crescimento horizontal:** mais módulos, laboratórios, profissões, documentos, portos e ferramentas;
- **crescimento vertical:** mais fidelidade gráfica, animação, física, áudio, iluminação e detalhe nos módulos já existentes.

A arquitetura precisa permitir ambos sem recomeçar o projeto.

---

# 43. Referências técnicas verificadas para esta decisão

Em 07/08/2026 foram verificadas as documentações atuais do Three.js para confirmar a viabilidade da estratégia planejada:

- GLTFLoader suporta glTF 2.0 e integração com Draco, KTX2 e Meshopt;
- KTX2Loader permite transcodificação de texturas comprimidas para formatos suportados pela GPU;
- DRACOLoader permite reduzir transferência de geometria, considerando o custo de decodificação no cliente;
- a documentação de responsividade do Three.js recomenda atenção especial ao custo de renderização em telas de alta densidade e permite limitar a resolução interna do canvas.

Esses recursos serão usados como opções de engenharia e sempre validados por benchmark nos dispositivos-alvo.

---

## Histórico — atualização

### v0.2 — 07/08/2026

- arquitetura modular evolutiva definida;
- separação entre conteúdo, simulação, interface, gráficos e assets;
- definição de Module Registry e manifests;
- criação conceitual do Simulation Core;
- criação conceitual da camada Graphics Engine;
- definição dos perfis Q0 a Q4 + Auto;
- estratégia de resolução dinâmica;
- sistema de LOD planejado;
- pipeline GLB + compressão de geometria + KTX2/Basis planejada;
- carregamento sob demanda definido como regra obrigatória;
- Asset Manager central definido;
- estratégia de instancing/culling para pátios e cenas densas;
- ciclo de vida `mount/start/pause/resume/reset/dispose` definido;
- estrutura de diretórios revisada;
- diagnóstico de desempenho planejado;
- orçamento de desempenho por laboratório definido;
- estratégia de crescimento horizontal e vertical consolidada;
- primeiro benchmark arquitetural escolhido: **Contêiner 40 HC — Inspeção**.


---

# 44. v0.3 — Especificação do Núcleo Modular

Esta etapa formaliza os contratos internos que todos os laboratórios do LAB PORTOS 360 deverão seguir. O objetivo é impedir que cada novo módulo crie sua própria arquitetura, garantindo manutenção, desempenho, acessibilidade, evolução gráfica e reutilização.

## 44.1 Princípio do núcleo

O núcleo da plataforma deverá conhecer apenas conceitos genéricos:

- módulos;
- rotas;
- conteúdo;
- assets;
- eventos;
- estado;
- qualidade gráfica;
- simulações;
- progresso;
- relatórios;
- acessibilidade;
- diagnóstico.

O núcleo **não deverá conhecer regras específicas de um contêiner, de um navio ou de uma balança**. Essas regras pertencem aos módulos.

---

# 45. Module Registry

O `ModuleRegistry` será o catálogo central de laboratórios, ferramentas e experiências.

Cada módulo deverá possuir um manifesto declarativo, por exemplo:

```js
export default {
  id: 'container-40hc-inspecao',
  title: 'Contêiner 40 HC — Inspeção',
  category: 'containers',
  version: '0.1.0',
  route: '/lab/container-40hc-inspecao',
  modes: ['guided', 'practice', 'challenge'],
  renderers: ['2d', '3d'],
  minQuality: 'Q0',
  recommendedQuality: 'Q2',
  preload: ['thumbnail'],
  dependencies: ['simulation-core', 'hotspot-system'],
  pedagogicalTags: ['inspecao', 'avarias', 'container', 'seguranca']
};
```

Responsabilidades:

- registrar módulos disponíveis;
- evitar IDs duplicados;
- carregar apenas o módulo solicitado;
- informar capacidades do módulo;
- disponibilizar metadados para menus e busca;
- permitir desativar módulos ainda experimentais;
- informar compatibilidade gráfica e de dispositivo.

O menu da plataforma deverá ser montado a partir do registro, evitando listas duplicadas manualmente no HTML.

---

# 46. Contrato obrigatório de módulo

Todo laboratório deverá implementar uma interface conceitual equivalente a:

```js
export const labModule = {
  async mount(context) {},
  async start() {},
  pause() {},
  resume() {},
  reset() {},
  getState() {},
  restoreState(state) {},
  async dispose() {}
};
```

## Regras

### `mount(context)`
Recebe apenas serviços aprovados pelo núcleo, como:

- Event Bus;
- Asset Manager;
- Quality Manager;
- Simulation Core;
- Storage;
- Audio Manager;
- Accessibility Manager;
- Logger/Diagnostics.

### `dispose()`
É obrigatório e deverá liberar:

- event listeners;
- timers;
- animações;
- áudio;
- referências a objetos 3D;
- geometrias e materiais não compartilhados;
- texturas não mais utilizadas;
- controles de câmera;
- observers;
- workers específicos do módulo.

Um laboratório que não consiga ser desmontado corretamente não deverá ser considerado pronto para produção.

---

# 47. Event Bus semântico

A comunicação entre simulação, UI, áudio, gráficos e relatório deverá usar eventos de domínio, evitando dependência direta entre componentes.

Exemplos:

```text
lab:started
mission:step-entered
mission:step-completed
object:selected
container:door-opened
container:damage-found
container:seal-checked
weight:measured
weight:divergence-detected
document:validated
document:divergence-detected
simulation:error
simulation:completed
quality:changed
performance:degraded
```

Exemplo conceitual:

```js
events.emit('container:damage-found', {
  id: 'dent-left-panel-01',
  severity: 'medium'
});
```

A interface poderá reagir exibindo feedback; o relatório poderá registrar o fato; o 3D poderá destacar a área; e o Simulation Core poderá validar a etapa — sem que esses sistemas se chamem diretamente.

---

# 48. Context Object

O núcleo passará aos módulos um objeto de contexto controlado.

```js
{
  events,
  assets,
  quality,
  simulation,
  storage,
  audio,
  accessibility,
  diagnostics,
  navigation
}
```

Isso evita variáveis globais e facilita substituir implementações futuras sem reescrever laboratórios.

---

# 49. Simulation Core — contrato detalhado

O `SimulationCore` será independente do renderizador.

Estrutura mínima de uma missão:

```js
{
  id: 'pre-trip-container-inspection',
  title: 'Inspeção pré-uso',
  mode: 'guided',
  steps: [
    {
      id: 'external-check',
      objective: 'Inspecione externamente o contêiner',
      requiredEvents: [
        'container:corner-post-checked',
        'container:door-checked'
      ]
    }
  ]
}
```

O núcleo deverá controlar:

- início;
- etapa atual;
- requisitos;
- tentativas;
- erros;
- dicas;
- tempo quando pedagógico;
- pontuação quando aplicável;
- conclusão;
- relatório final.

Nunca amarrar uma regra de aprovação diretamente a um clique visual específico. A regra deve depender de uma **ação semântica**.

Exemplo:

```text
ERRADO:
"se clicou no mesh_023, concluiu"

CERTO:
"se ocorreu container:seal-checked, validar etapa"
```

---

# 50. Modos pedagógicos padrão

Todo laboratório deverá declarar quais modos suporta.

## Guiado

- instruções passo a passo;
- hotspots opcionais;
- dicas;
- explicação do erro;
- ideal para primeira aula.

## Prática

- objetivo apresentado;
- menos indicação visual;
- aluno decide a sequência;
- feedback moderado.

## Desafio

- pouca assistência;
- cenário-problema;
- divergências e decisões;
- relatório final mais detalhado.

## Exploração Livre

- sem missão obrigatória;
- aluno pode investigar equipamento/ambiente;
- hotspots informativos opcionais.

A lógica da missão deverá permanecer separada da apresentação de cada modo.

---

# 51. Asset Manager — contrato detalhado

Todo asset deverá ser solicitado ao `AssetManager`, nunca carregado diretamente pelo módulo.

API conceitual:

```js
await assets.getModel('container-40hc', {
  quality: quality.current,
  purpose: 'inspection'
});
```

O Asset Manager deverá controlar:

- cache em memória;
- referências compartilhadas;
- prioridade de download;
- cancelamento de carregamentos não mais necessários;
- LOD;
- fallback;
- versão do asset;
- liberação de memória;
- thumbnails;
- áudio;
- imagens 360;
- arquivos de dados associados.

---

# 52. Manifesto padrão de asset

Exemplo:

```json
{
  "id": "container-40hc",
  "version": "1.0.0",
  "type": "model3d",
  "variants": {
    "Q1": "container-40hc_lod2.glb",
    "Q2": "container-40hc_lod1.glb",
    "Q3": "container-40hc_lod0.glb",
    "Q4": "container-40hc_lod0.glb"
  },
  "fallback2d": "container-40hc.webp",
  "collision": "container-40hc_collision.glb",
  "thumbnail": "thumbnail.webp",
  "estimatedMemoryMB": {
    "Q1": 8,
    "Q2": 18,
    "Q3": 35,
    "Q4": 45
  }
}
```

Os valores reais serão gerados/medidos durante o pipeline de assets; não serão preenchidos por estimativa manual na versão final.

---

# 53. Quality Manager — responsabilidades

O `QualityManager` deverá ser um serviço transversal.

Responsabilidades:

- detectar capacidades básicas do dispositivo;
- escolher perfil inicial;
- controlar resolução interna;
- sombras;
- qualidade de textura;
- quantidade de objetos decorativos;
- distância de renderização;
- LOD;
- pós-processamento;
- efeitos de transparência/reflexão;
- densidade de partículas;
- atualização de animações secundárias;
- adaptar qualidade durante a execução.

Perfis consolidados:

```text
Q0 — Compatibilidade / 2D
Q1 — Econômico
Q2 — Balanceado
Q3 — Alto
Q4 — Ultra
AUTO — adaptativo
```

O perfil `AUTO` deverá evitar mudanças bruscas e frequentes. Ajustes deverão usar média de desempenho por janela de tempo e histerese.

---

# 54. Performance Budget

Cada laboratório deverá possuir um orçamento antes de receber status de produção.

Checklist mínimo:

```text
[ ] tempo de abertura aceitável
[ ] FPS estável no dispositivo-alvo
[ ] sem crescimento contínuo de memória
[ ] dispose testado
[ ] fallback disponível
[ ] qualidade Auto testada
[ ] toque e mouse testados
[ ] rotação de tela testada
[ ] canvas não excede resolução interna desnecessária
[ ] quantidade de draw calls registrada
[ ] quantidade de triângulos registrada
[ ] texturas e memória estimadas/medidas
```

O projeto evitará metas rígidas universais de triângulos ou MB, porque uma cena com poucos materiais pode comportar mais geometria que outra com muitos draw calls e texturas pesadas. Cada orçamento deverá ser medido no contexto real.

---

# 55. Performance Monitor

O núcleo deverá fornecer métricas técnicas em modo de desenvolvimento/professor:

- FPS atual;
- FPS médio;
- frame time;
- resolução do canvas;
- pixel ratio interno;
- perfil de qualidade;
- draw calls;
- triângulos;
- geometrias;
- texturas;
- assets em memória;
- downloads em andamento;
- tempo de carregamento;
- eventos por segundo quando relevante.

No modo aluno, essas informações ficam ocultas por padrão.

---

# 56. Graphics Adapter

Os laboratórios não deverão manipular diretamente a biblioteca 3D em toda parte.

Criar uma camada de adaptação com conceitos como:

```js
graphics.createScene()
graphics.loadEnvironment()
graphics.focusObject(id)
graphics.highlight(id)
graphics.setVisibility(id, value)
graphics.playAnimation(id, clip)
graphics.disposeScene()
```

A implementação inicial poderá usar Three.js, mas a lógica dos módulos deverá depender principalmente dessa camada e dos eventos semânticos.

Não é necessário esconder 100% da biblioteca 3D; o objetivo é evitar espalhar dependências da engine por conteúdo, simulação e UI.

---

# 57. Scene Manifest

Cada ambiente 3D deverá poder ser descrito por dados.

Exemplo:

```json
{
  "sceneId": "container-inspection-yard",
  "environment": "yard-basic",
  "objects": [
    {
      "id": "target-container",
      "asset": "container-40hc",
      "interactive": true,
      "position": [0, 0, 0]
    }
  ],
  "hotspots": [
    {
      "id": "door-lock",
      "target": "target-container",
      "event": "container:door-lock-inspected"
    }
  ]
}
```

Isso permitirá trocar cenário, posição, objetos e conteúdo sem editar grandes blocos de JavaScript.

---

# 58. UI Shell e painéis desacoplados

A interface padrão deverá possuir slots reutilizáveis:

```text
┌────────────────────────────────────────────┐
│ Topbar / laboratório / modo / desempenho   │
├───────────────┬────────────────────────────┤
│ Painel missão │                            │
│ / checklist   │       Cena / 360 / 2D     │
│               │                            │
├───────────────┴────────────────────────────┤
│ feedback / ações / acessibilidade          │
└────────────────────────────────────────────┘
```

Em telas pequenas:

- cena permanece prioritária;
- missão vira gaveta;
- checklist vira painel inferior;
- diagnóstico fica oculto;
- controles essenciais usam alvos grandes;
- painéis não devem cobrir permanentemente o objeto estudado.

---

# 59. Hotspot System

Hotspots deverão ser objetos semânticos independentes do modelo.

Tipos previstos:

- informação;
- inspeção;
- ação;
- risco;
- avaria;
- medição;
- documento;
- navegação.

Cada hotspot poderá possuir:

```js
{
  id,
  type,
  label,
  target,
  anchor,
  event,
  visibleInModes,
  visibleInQuality,
  accessibilityLabel
}
```

Assim, a troca do modelo GLB não obriga a recriar a lógica pedagógica, desde que os anchors/identificadores necessários sejam preservados ou remapeados.

---

# 60. Interaction Core

O núcleo de interação deverá normalizar:

- mouse;
- touch;
- teclado;
- gamepad futuramente, se houver justificativa;
- controles de câmera;
- seleção;
- arrastar;
- girar;
- zoom;
- hotspots;
- ações contextuais.

O módulo deverá receber ações semânticas, como:

```text
select
inspect
open
close
measure
confirm
cancel
focus
```

Não depender de `mousedown` ou `touchstart` diretamente na lógica da missão.

---

# 61. Estado e persistência

Separar três tipos de estado:

## Estado transitório

Exemplo:

- câmera atual;
- objeto destacado;
- painel aberto.

Pode ser descartado ao sair.

## Estado de sessão

Exemplo:

- etapa atual;
- tentativas;
- respostas;
- checklist.

Pode ser restaurado se o aluno recarregar a página durante a atividade.

## Progresso persistente

Exemplo:

- laboratórios concluídos;
- melhor resultado;
- módulos visitados;
- preferências gráficas;
- acessibilidade.

Armazenamento inicial local, sem depender de servidor.

---

# 62. Storage Adapter

Todos os módulos usarão uma interface única:

```js
storage.get(key)
storage.set(key, value)
storage.remove(key)
storage.clearNamespace(moduleId)
```

O núcleo poderá começar com `localStorage`/IndexedDB conforme o tipo de dado e evoluir futuramente sem reescrever os módulos.

Assets pesados nunca serão armazenados como strings Base64 em `localStorage`.

---

# 63. Relatórios de laboratório

O relatório final deverá ser produzido a partir do estado semântico da simulação.

Estrutura comum:

- aluno/turma quando informado localmente;
- laboratório;
- versão;
- data/hora local;
- modo;
- etapas realizadas;
- acertos;
- erros relevantes;
- decisões tomadas;
- itens não verificados;
- conclusão;
- observações pedagógicas;
- desempenho técnico opcional para diagnóstico.

O relatório não deverá depender de screenshots como única evidência.

---

# 64. Accessibility Manager

A acessibilidade deverá fazer parte do núcleo desde o início.

Prever:

- redução de movimento;
- alto contraste;
- tamanho de fonte;
- legendas;
- alternativa textual para informação crítica em 3D;
- navegação por teclado nos controles de UI;
- rótulos acessíveis em hotspots;
- mensagens que não dependam apenas de cor;
- opção de desativar efeitos visuais intensos;
- 2D como alternativa funcional quando possível.

O 3D nunca deverá ser a única forma de transmitir uma informação essencial para aprovação da atividade quando existir alternativa razoável.

---

# 65. Audio Manager

Áudio será carregado sob demanda e separado da lógica.

Categorias:

- UI;
- feedback;
- ambiente;
- máquinas;
- alerta;
- voz/narração futura.

Regras:

- iniciar sem áudio automático invasivo;
- respeitar volume do usuário;
- permitir silenciar;
- usar sons operacionais com finalidade pedagógica;
- áudio espacial apenas quando trouxer ganho real;
- não carregar bancos de áudio de outros laboratórios.

---

# 66. Error Boundary e recuperação

Cada laboratório deverá possuir uma estratégia de falha segura.

Se um asset 3D falhar:

1. tentar variante menor quando aplicável;
2. oferecer fallback 2D;
3. manter missão utilizável quando possível;
4. registrar diagnóstico;
5. nunca deixar a aplicação inteira em tela branca.

Mensagens ao aluno devem ser simples; detalhes técnicos ficam no diagnóstico.

---

# 67. Lazy Loading por rota e capacidade

A plataforma carregará progressivamente:

```text
App Shell
  → metadados do catálogo
    → módulo selecionado
      → dados da missão
        → renderer necessário
          → assets prioritários
            → detalhes opcionais
```

Exemplos:

- abrir Documentação não deverá carregar Three.js;
- abrir Glossário não deverá carregar assets 3D;
- abrir Contêiner 3D não deverá carregar navio/pátio;
- abrir modo Q0 não deverá baixar assets High/Ultra.

---

# 68. Feature Flags

Recursos experimentais deverão poder ser ativados sem afetar todos os usuários.

Exemplo:

```js
features = {
  dynamicResolution: true,
  advancedReflections: false,
  experimentalPhysics: false,
  spatialAudio: false
};
```

Isso permitirá testar melhorias gráficas gradualmente.

---

# 69. Versionamento

Versionar separadamente:

- plataforma;
- módulo;
- missão;
- asset;
- conteúdo técnico/documental.

Exemplo:

```text
LAB PORTOS 360          v0.3.0
Módulo Contêiner        v0.1.0
Missão Inspeção         v0.1.2
Asset Contêiner 40 HC   v1.3.0
Conteúdo documental     referência 2026-08
```

Isso permitirá atualizar um modelo 3D sem alterar a versão pedagógica da missão.

---

# 70. Estrutura de diretórios — v0.3

```text
lab-portos-360/
│
├── index.html
├── app/
│   ├── main.js
│   ├── router.js
│   ├── config.js
│   │
│   ├── core/
│   │   ├── module-registry.js
│   │   ├── event-bus.js
│   │   ├── simulation-core.js
│   │   ├── asset-manager.js
│   │   ├── quality-manager.js
│   │   ├── performance-monitor.js
│   │   ├── storage-adapter.js
│   │   ├── accessibility-manager.js
│   │   ├── audio-manager.js
│   │   └── diagnostics.js
│   │
│   ├── graphics/
│   │   ├── graphics-adapter.js
│   │   ├── three-adapter.js
│   │   ├── scene-loader.js
│   │   ├── hotspot-system.js
│   │   └── interaction-core.js
│   │
│   ├── ui/
│   │   ├── app-shell.js
│   │   ├── mission-panel.js
│   │   ├── feedback-panel.js
│   │   ├── settings-panel.js
│   │   └── diagnostics-panel.js
│   │
│   └── modules/
│       ├── containers/
│       │   └── container-40hc-inspection/
│       │       ├── manifest.js
│       │       ├── module.js
│       │       ├── mission.js
│       │       ├── scene.json
│       │       ├── hotspots.json
│       │       └── content.json
│       ├── gate/
│       ├── yard/
│       ├── ship/
│       ├── equipment/
│       └── documents/
│
├── assets/
│   ├── manifests/
│   ├── models/
│   ├── textures/
│   ├── images/
│   ├── panorama/
│   └── audio/
│
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── shell.css
│   ├── components.css
│   └── responsive.css
│
├── tools/
│   ├── optimize-models/
│   ├── optimize-textures/
│   ├── validate-manifests/
│   └── performance-report/
│
└── docs/
    ├── CONTEXTO.md
    ├── ARCHITECTURE.md
    ├── MODULE_SPEC.md
    ├── ASSET_GUIDE.md
    └── PERFORMANCE.md
```

---

# 71. Definition of Done de um laboratório

Um módulo só será considerado concluído quando atender a todos os itens aplicáveis:

## Pedagógico

- objetivo claro;
- conteúdo revisado;
- ação prática real;
- feedback de erro;
- modo guiado quando necessário;
- relatório/conclusão.

## Técnico

- manifesto válido;
- lazy loading;
- dispose sem vazamentos aparentes;
- armazenamento namespaceado;
- eventos semânticos;
- fallback;
- responsividade;
- touch + mouse;
- ausência de erros de console conhecidos.

## Gráfico

- Q0/Q1 funcional;
- Q2 recomendado;
- Q3/Q4 opcionais conforme asset;
- Auto testado;
- LOD quando necessário;
- sombras justificadas;
- texturas otimizadas;
- carregamento progressivo.

## Acessibilidade

- controles identificáveis;
- teclado para UI principal;
- textos legíveis;
- não depender somente de cor;
- reduzir movimento quando possível;
- alternativa para informação essencial.

## Desempenho

- benchmark registrado;
- sem travamento prolongado no hardware-alvo;
- memória liberada ao fechar;
- sem carregar assets de outros módulos.

---

# 72. Primeiro fluxo técnico completo — Contêiner 40 HC

Fluxo de referência:

```text
Usuário abre laboratório
        ↓
Router solicita módulo
        ↓
Module Registry resolve manifesto
        ↓
Quality Manager seleciona perfil
        ↓
Asset Manager escolhe variante
        ↓
Graphics Adapter monta a cena
        ↓
Simulation Core inicia missão
        ↓
Interaction Core captura ação
        ↓
Event Bus publica ação semântica
        ↓
Simulation Core valida
        ↓
UI apresenta feedback
        ↓
Relatório registra resultado
        ↓
Dispose libera recursos ao sair
```

Esse fluxo será usado como teste obrigatório da arquitetura.

---

# 73. Roadmap técnico imediato

## P0.3-A — Núcleo mínimo

Construir primeiro:

- App Shell;
- Router;
- Event Bus;
- Module Registry;
- Storage Adapter;
- Diagnostics.

Sem 3D complexo.

## P0.3-B — Renderer mínimo

Adicionar:

- Graphics Adapter;
- Three Adapter;
- cena vazia;
- câmera;
- controles;
- primeiro objeto de teste;
- dispose.

## P0.3-C — Qualidade adaptativa

Adicionar:

- Q0/Q1/Q2 inicialmente;
- AUTO;
- resolução interna dinâmica;
- Performance Monitor;
- persistência da preferência.

Q3/Q4 entram quando existirem assets que justifiquem os níveis.

## P0.3-D — Vertical Slice

Construir uma versão pequena porém completa do laboratório de Contêiner 40 HC:

- 1 cenário;
- 1 modelo;
- 3 avarias;
- 5 hotspots;
- checklist curto;
- missão guiada;
- relatório;
- fallback 2D;
- benchmark.

Depois validar a arquitetura antes de ampliar o conteúdo.

---

# 74. Regra de crescimento do projeto

Antes de criar um novo laboratório, perguntar:

1. A funcionalidade já existe no núcleo?
2. Pode ser reutilizada?
3. É regra pedagógica do módulo ou recurso genérico da plataforma?
4. Precisa de 3D ou pode funcionar melhor em 2D/360?
5. Qual é o fallback?
6. Qual é o custo de memória/download?
7. Como será desmontado pelo `dispose()`?
8. Como fica em celular?
9. Como fica em notebook modesto?
10. Como poderá ganhar qualidade gráfica no futuro sem reescrita?

Se a resposta exigir duplicar código de infraestrutura dentro do módulo, a arquitetura deverá ser revisada antes de continuar.

---

# 75. Decisão consolidada da v0.3

O LAB PORTOS 360 passa a adotar formalmente:

- arquitetura orientada a módulos;
- contratos de ciclo de vida;
- eventos semânticos;
- Simulation Core independente de renderização;
- Asset Manager obrigatório;
- Quality Manager transversal;
- Graphics Adapter;
- lazy loading por rota/capacidade;
- fallback 2D/leve;
- armazenamento desacoplado;
- diagnóstico e orçamento de desempenho;
- acessibilidade como parte do núcleo;
- versionamento separado de plataforma, módulo, missão e asset;
- `dispose()` como requisito de produção;
- primeiro vertical slice: **Contêiner 40 HC — Inspeção**.

A próxima evolução planejada será a **v0.4 — Design System, UX responsiva e especificação visual da Central Portuária + padrão visual dos laboratórios**, seguida pela implementação da fundação técnica.

---

## Histórico — atualização

### v0.3 — 07/08/2026

- contratos formais do Module Registry definidos;
- ciclo de vida obrigatório dos módulos especificado;
- Event Bus semântico detalhado;
- Context Object definido;
- Simulation Core detalhado;
- quatro modos pedagógicos padronizados;
- Asset Manager e manifesto de assets formalizados;
- Quality Manager detalhado;
- Performance Budget e Performance Monitor definidos;
- Graphics Adapter e Scene Manifest especificados;
- sistema de hotspots e Interaction Core formalizados;
- estratégia de persistência e Storage Adapter definida;
- padrão de relatórios estabelecido;
- Accessibility Manager e Audio Manager incluídos no núcleo;
- estratégia de recuperação de falhas definida;
- lazy loading por rota e capacidade formalizado;
- feature flags e versionamento independente definidos;
- estrutura de diretórios v0.3 consolidada;
- Definition of Done de laboratórios criada;
- fluxo técnico completo do primeiro vertical slice documentado;
- roadmap técnico imediato P0.3-A a P0.3-D definido.

---

# 76. v0.4 — Design System e UX responsiva

A v0.4 define como o LAB PORTOS 360 deve **parecer, responder e se comportar visualmente** em toda a plataforma.

O objetivo não é apenas criar uma interface bonita. O Design System deve garantir:

- identidade visual portuária própria;
- consistência entre dezenas de laboratórios;
- boa leitura em notebooks escolares;
- operação por mouse, teclado e toque;
- expansão progressiva da qualidade gráfica;
- baixa sobrecarga de renderização da interface;
- feedback claro durante tarefas práticas;
- distinção visual entre conteúdo, ferramenta, alerta e operação;
- reutilização de componentes em vez de telas isoladas;
- possibilidade futura de instalar a plataforma como experiência semelhante a aplicativo.

---

# 77. Princípios visuais obrigatórios

## 77.1 Interface técnica, mas não complicada

A linguagem visual deve remeter a:

- porto;
- terminal;
- centro de controle;
- logística;
- navegação;
- equipamentos industriais;
- mapas e painéis operacionais.

Entretanto, o sistema não deve parecer um software industrial difícil de usar.

Regra:

> aparência profissional + operação simples para estudante.

## 77.2 Prioridade da informação

A ordem visual padrão será:

1. **o que o aluno precisa fazer agora**;
2. **onde ele está**;
3. **o que está observando**;
4. **qual foi o resultado da ação**;
5. **onde consultar ajuda ou conteúdo extra**.

## 77.3 Menos decoração durante a missão

Na Central Portuária poderemos usar maior riqueza visual.

Dentro de uma simulação, a interface deve ser mais discreta para não competir com:

- modelo 3D;
- ambiente 360;
- documento;
- equipamento;
- mapa;
- checklist.

## 77.4 Progressão visual

A qualidade visual poderá crescer sem alterar a organização da UI.

Exemplo:

```text
v1  → cards + ilustrações + 3D Lite
v2  → modelos mais ricos + iluminação melhor
v3  → ambientes completos + animações
v4  → efeitos, áudio espacial e maior realismo
```

Os mesmos componentes de interface permanecem válidos.

---

# 78. Identidade visual inicial

A identidade deverá usar referências visuais da atividade portuária sem copiar interfaces de empresas reais.

Elementos possíveis:

- linhas de contêiner;
- grades técnicas;
- coordenadas;
- marcações de pátio;
- mapas;
- sinalização industrial;
- números de bays/rows/tiers;
- etiquetas operacionais;
- linhas de rota;
- indicadores semelhantes a instrumentos de controle.

## 78.1 Paleta funcional

A paleta definitiva será validada durante a implementação, mas deverá possuir tokens semânticos, e não cores espalhadas diretamente pelo CSS.

Exemplo conceitual:

```css
--color-bg-base
--color-bg-surface
--color-bg-elevated
--color-text-primary
--color-text-secondary
--color-accent
--color-info
--color-success
--color-warning
--color-danger
--color-operational
--color-border
```

Cada laboratório usará os mesmos significados.

## 78.2 Cores não podem ser a única informação

Sempre combinar cor com pelo menos um segundo indicador:

- ícone;
- texto;
- forma;
- padrão;
- rótulo;
- símbolo.

Exemplo:

```text
⚠ Peso divergente
✓ Conferido
✕ Entrada bloqueada
```

---

# 79. Tipografia e hierarquia

A interface deve priorizar fontes web seguras ou arquivos que possam ser distribuídos legalmente com o projeto.

Hierarquia mínima:

- `display` — títulos de entrada/landing;
- `h1` — nome do módulo;
- `h2` — seção;
- `h3` — bloco de conteúdo;
- `body` — leitura principal;
- `label` — campos e controles;
- `caption` — metadados;
- `mono/data` — códigos de contêiner, posições, pesos e identificadores.

Dados operacionais devem ser visualmente diferentes de textos explicativos.

Exemplo:

```text
CONTÊINER
MSCU 123456-7

POSIÇÃO
BAY 22 · ROW 06 · TIER 84

PESO BRUTO
28.430 kg
```

---

# 80. Escala de espaçamento e componentes

Evitar medidas arbitrárias diferentes em cada tela.

Criar tokens:

```css
--space-1
--space-2
--space-3
--space-4
--space-5
--space-6
--radius-sm
--radius-md
--radius-lg
--shadow-low
--shadow-medium
```

A interface deve manter áreas de toque confortáveis em dispositivos móveis.

Botões primários deverão possuir área de interação suficiente mesmo quando o ícone visual for pequeno.

---

# 81. Estrutura da Central Portuária

A Central será o ponto de entrada do aluno.

Estrutura proposta:

```text
┌───────────────────────────────────────────────┐
│ LAB PORTOS 360                  perfil/config │
├───────────────────────────────────────────────┤
│ Busca / comando rápido                        │
├───────────────────────────────────────────────┤
│ CONTINUAR                                     │
│ [último laboratório]                          │
├───────────────────────────────────────────────┤
│ EXPLORAR PORTO                                │
│ [Porto 360] [Navios] [Pátio] [Equipamentos]  │
├───────────────────────────────────────────────┤
│ LABORATÓRIOS                                  │
│ [Gate] [Balança] [Contêiner] [Documentos]... │
├───────────────────────────────────────────────┤
│ FERRAMENTAS                                   │
│ [Peso] [VGM] [Bay] [Volume] [Glossário]      │
└───────────────────────────────────────────────┘
```

A home não deve exibir todos os recursos com o mesmo peso visual.

Prioridades:

1. continuar atividade;
2. laboratório recomendado;
3. módulos principais;
4. ferramentas rápidas;
5. conteúdo de consulta.

---

# 82. Navegação principal

A navegação deverá funcionar em três escalas.

## Desktop/notebook

Barra lateral compacta ou navegação superior híbrida.

Itens principais:

- Central;
- Explorar;
- Laboratórios;
- Ferramentas;
- Documentos;
- Glossário;
- Progresso;
- Professor, quando habilitado.

## Tablet

Menu recolhível com acesso rápido às funções principais.

## Celular

Barra inferior para ações mais frequentes + menu adicional.

A navegação nunca deve cobrir controles essenciais da cena 3D.

---

# 83. Sistema de cards

Os cards serão componentes reutilizáveis.

Tipos previstos:

### `LabCard`

Mostra:

- nome;
- categoria;
- duração estimada;
- modo disponível;
- dificuldade;
- status;
- thumbnail;
- requisito gráfico quando relevante.

### `EquipmentCard`

- imagem/thumbnail;
- nome técnico;
- função;
- abrir 3D/360;
- ficha técnica.

### `DocumentCard`

- tipo de documento;
- objetivo;
- status de estudo;
- abrir visualizador.

### `PortCard`

- porto/terminal;
- localização;
- categoria;
- abrir ficha ou mapa.

### `ToolCard`

- calculadora/ferramenta;
- ação rápida;
- sem carregamento de ambiente 3D quando desnecessário.

---

# 84. Tela padrão de laboratório

A tela de laboratório deve preservar o máximo possível da área visual da atividade.

Layout desktop de referência:

```text
┌─────────────────────────────────────────────────────────┐
│ ← Central | LAB: Inspeção 40 HC | Q2 Auto | ⚙ | Ajuda │
├──────────────┬───────────────────────────────┬──────────┤
│ MISSÃO       │                               │ CONTEXTO │
│ objetivo     │        CENA / 360 / 2D        │ dica     │
│ etapas       │                               │ dados    │
│ checklist    │                               │ ficha    │
│              │                               │ docs     │
├──────────────┴───────────────────────────────┴──────────┤
│ Feedback / comando / status operacional                 │
└─────────────────────────────────────────────────────────┘
```

No celular:

- cena ocupa a maior parte da tela;
- missão vira gaveta inferior;
- contexto vira drawer/modal;
- ações críticas permanecem acessíveis;
- HUD reduzido.

---

# 85. HUD padrão dos laboratórios

O HUD deverá apresentar somente informações necessárias à tarefa atual.

Possíveis blocos:

- etapa atual;
- cronômetro quando pedagogicamente necessário;
- pontuação quando o modo utilizar pontuação;
- estado do equipamento;
- peso;
- temperatura;
- posição;
- alerta;
- objetivo atual.

Regra:

> Um módulo não deve colocar no HUD informações apenas porque estão disponíveis.

Cada dado precisa justificar sua permanência na tela.

---

# 86. Drawer / Gaveta de conhecimento

Todo laboratório poderá usar uma gaveta lateral ou inferior de conteúdo contextual.

Abas possíveis:

- **Missão**;
- **Como fazer**;
- **Ficha técnica**;
- **Documento**;
- **Glossário**;
- **Dica**;
- **Histórico de ações**.

A gaveta permite manter explicações detalhadas sem cobrir permanentemente a cena.

---

# 87. Sistema de hotspots

Hotspots 3D/360 devem seguir um padrão visual único.

Estados:

```text
idle
hover/focus
active
visited
correct
warning
error
locked
```

Hotspots podem representar:

- peça;
- avaria;
- área;
- instrumento;
- ponto de inspeção;
- documento associado;
- etapa de operação.

O hotspot não poderá depender apenas de escala minúscula na cena. Deve existir alternativa de seleção por lista quando necessário.

---

# 88. Feedback das ações

Existirão quatro níveis de feedback.

## 88.1 Microfeedback

Resposta imediata:

- clique aceito;
- hotspot selecionado;
- peça movida;
- item marcado.

## 88.2 Feedback de operação

Exemplo:

> Lacre confere com o documento.

## 88.3 Feedback pedagógico

Exemplo:

> O peso bruto está acima do valor informado. Confira a pesagem antes de liberar o veículo.

## 88.4 Feedback de conclusão

Resumo:

- acertos;
- erros;
- decisões;
- conceitos envolvidos;
- recomendação de revisão;
- evidência gerada.

---

# 89. Alertas e severidade

Padronizar severidades:

```text
INFO       → informação operacional
SUCCESS    → ação concluída
ATTENTION  → requer conferência
WARNING    → risco ou inconsistência
CRITICAL   → impede continuidade/liberação
```

Um laboratório poderá traduzir isso para o contexto.

Exemplo no Gate:

```text
CRITICAL → lacre divergente; entrada não pode ser liberada
```

---

# 90. Modo Guiado visual

O modo Guiado deverá ser particularmente claro para alunos iniciantes.

Características:

- uma ação principal por vez;
- destaque da região relevante;
- instrução curta;
- explicação expandível;
- demonstração opcional;
- confirmação após ação;
- progressão sem saltos quando a atividade exigir sequência.

Estrutura:

```text
VER → ENTENDER → FAZER → CONFERIR → AVANÇAR
```

---

# 91. Modo Prática visual

No modo Prática:

- menos instruções permanentes;
- checklist disponível;
- dicas sob demanda;
- feedback após decisões;
- possibilidade de repetir etapa;
- relatório final comparativo.

---

# 92. Modo Desafio visual

No modo Desafio:

- contexto apresentado antes de iniciar;
- interface reduzida;
- dicas limitadas ou penalizadas conforme configuração;
- eventos inesperados possíveis;
- pontuação opcional;
- tempo opcional;
- avaliação pelas decisões e não apenas cliques.

---

# 93. Modo Exploração Livre

Focado em descoberta.

Recursos:

- câmera livre controlada;
- hotspots informativos;
- raio-X/camadas quando aplicável;
- esconder/mostrar componentes;
- animações demonstrativas;
- ficha técnica;
- comparação.

Não precisa usar pontuação.

---

# 94. Responsividade dos ambientes 3D

O 3D não deve simplesmente encolher.

As interfaces deverão mudar de composição.

## Notebook/Desktop

- painel lateral;
- HUD completo;
- mouse + teclado;
- câmera livre quando apropriado.

## Tablet

- gavetas;
- botões maiores;
- redução de painéis simultâneos.

## Celular

- viewport prioritário;
- controles essenciais em zonas alcançáveis;
- painéis em bottom sheet;
- menor densidade de informação;
- qualidade gráfica inicial mais conservadora;
- gestos claramente ensinados.

---

# 95. Controles universais de cena

Padronizar sempre que aplicável:

- girar;
- aproximar;
- afastar;
- recentralizar;
- tela cheia;
- redefinir câmera;
- mostrar hotspots;
- ocultar HUD;
- pausar animação;
- qualidade gráfica.

Não criar controles diferentes para ações idênticas em cada laboratório.

---

# 96. Ajuda de controles

Na primeira abertura de cada tipo de interação, mostrar ajuda curta.

Exemplo 3D:

```text
Arraste → girar
Scroll/pinça → zoom
Clique/toque → inspecionar
```

A ajuda deve poder ser fechada e reaberta.

Não repetir obrigatoriamente toda vez.

---

# 97. Loading e carregamento progressivo

A tela de loading deve informar o que está acontecendo sem inventar porcentagens falsas.

Estados possíveis:

```text
Preparando laboratório…
Carregando ambiente essencial…
Carregando contêiner…
Preparando interação…
Pronto.
```

Se houver progresso mensurável, exibir porcentagem real.

Se um asset de alta qualidade ainda estiver carregando, permitir que o aluno comece com versão leve quando possível.

---

# 98. Skeletons e placeholders

Usar skeleton para:

- cards;
- fichas;
- documentos;
- painéis de progresso.

Para 3D:

- não usar skeleton imitando imagem da cena;
- exibir placeholder leve ou versão LOD inferior;
- promover a qualidade quando o asset melhor ficar disponível.

---

# 99. Transições

Animações da interface deverão ser curtas e funcionais.

Evitar:

- animações longas antes de permitir interação;
- blur pesado em toda a tela;
- partículas decorativas permanentes;
- efeitos que ocupem GPU enquanto a cena 3D precisa de desempenho.

Transições deverão respeitar preferência de movimento reduzido.

---

# 100. Design de documentos

Documentos fictícios deverão parecer documentos operacionais, mas não reproduzir integralmente layouts protegidos ou gerar risco de serem confundidos com documentos oficiais reais.

Cada documento educativo deverá indicar claramente:

> DOCUMENTO DIDÁTICO / DADOS FICTÍCIOS

Recursos:

- zoom;
- campos clicáveis;
- destaque contextual;
- comparação lado a lado;
- busca por campo;
- modo “encontre a divergência”.

---

# 101. Visualizador de documentos

Componente reutilizável `DocumentViewer`.

Modos:

- leitura;
- estudo guiado;
- conferência;
- comparação;
- desafio.

API conceitual:

```js
DocumentViewer.open({
  documentId: 'cte-demo-001',
  mode: 'compare',
  highlightFields: ['container', 'grossWeight']
});
```

---

# 102. Painel de ferramentas rápidas

Ferramentas que não precisam de cena deverão abrir rapidamente.

Primeiras ferramentas previstas:

- peso bruto/líquido/tara;
- VGM educativo;
- capacidade de contêiner;
- conversão de unidades;
- leitura Bay/Row/Tier;
- produtividade;
- tempo de operação;
- comparação de contêineres;
- glossário.

Objetivo:

> entregar utilidade mesmo em dispositivos incapazes de executar ambientes 3D complexos.

---

# 103. Busca global

A Central deverá possuir busca capaz de localizar futuramente:

- módulo;
- laboratório;
- equipamento;
- contêiner;
- documento;
- conceito;
- sigla;
- porto;
- ferramenta.

A indexação será local na primeira arquitetura front-end.

Possível estrutura:

```text
/search/index.json
```

O índice não deverá carregar textos e assets completos, somente metadados suficientes para pesquisa.

---

# 104. Glossário contextual

Termos técnicos destacados poderão abrir definição sem retirar o aluno da missão.

Exemplos:

- TEU;
- VGM;
- ETA;
- ETB;
- ETD;
- spreader;
- twist-lock;
- reefer;
- bay;
- row;
- tier.

O componente pode ter:

- definição curta;
- “ver mais”;
- exemplo;
- link para módulo relacionado.

---

# 105. Progresso do aluno

Como a primeira versão é front-end only, o progresso será inicialmente local.

Exibir:

- laboratórios iniciados;
- concluídos;
- melhor resultado local;
- conceitos revisados;
- última atividade;
- evidências geradas.

O design não deverá prometer sincronização em nuvem enquanto ela não existir.

---

# 106. Evidência da atividade

Laboratórios avaliativos poderão gerar uma evidência final contendo:

- nome da atividade;
- data/hora local;
- cenário;
- decisões principais;
- resultado;
- conceitos trabalhados;
- versão do laboratório;
- identificador local da execução.

A forma de exportação será especificada em fase própria.

---

# 107. Modo Professor

O modo Professor deverá ser uma camada de configuração e demonstração, não uma cópia completa da plataforma.

Funções planejadas:

- escolher laboratório;
- escolher modo;
- selecionar cenário;
- configurar dificuldade;
- ligar/desligar dicas;
- definir eventos do cenário;
- autorizar demonstração;
- reiniciar laboratório;
- abrir painel de diagnóstico;
- visualizar gabarito lógico quando aplicável;
- gerar QR/link para abrir um módulo específico no dispositivo do aluno.

Como a hospedagem inicial será estática, funções que exigiriam banco de dados ou controle remoto real deverão ser diferenciadas de funções locais.

---

# 108. Modo Demonstração do professor

Projetado para uso em TV/projetor.

Características:

- textos maiores;
- HUD simplificado;
- cursor/indicador ampliado;
- hotspots maiores;
- câmera com movimentos previsíveis;
- painel lateral de explicação;
- ocultar elementos administrativos.

---

# 109. Painel Técnico / Diagnóstico

A interface de diagnóstico deverá estar separada da experiência normal do estudante.

Exibir quando habilitada:

- FPS;
- frame time;
- perfil gráfico;
- pixel ratio interno;
- resolução de renderização;
- objetos;
- triângulos;
- draw calls;
- texturas carregadas;
- memória estimada quando mensurável;
- assets ativos;
- módulo ativo;
- versão;
- erros recentes.

A tela poderá oferecer exportação futura de diagnóstico em JSON/texto.

---

# 110. Estados vazios e falhas

Toda área deve possuir estado vazio planejado.

Exemplos:

```text
Nenhum laboratório iniciado ainda.
Nenhuma evidência salva neste dispositivo.
Nenhum resultado para “straddle carrier”.
```

Falha de asset:

```text
Não foi possível carregar o modelo 3D.
[Usar versão leve]
[Tentar novamente]
[Continuar em modo 2D]
```

O aluno não pode ficar diante de uma tela preta sem explicação.

---

# 111. Modo offline e rede limitada — UX

Mesmo antes da implementação completa de PWA/offline, a UX deve estar preparada para:

- conexão lenta;
- asset grande indisponível;
- reload;
- cache parcial;
- navegação após perda de conexão.

Sempre que possível:

- conteúdo essencial textual permanece disponível;
- 2D substitui 3D;
- progresso local é preservado;
- usuário recebe mensagem clara.

---

# 112. Tema visual e modos de contraste

Planejar inicialmente:

- tema principal escuro técnico;
- tema claro;
- alto contraste.

O modo visual deve ser controlado por tokens.

Nenhum componente poderá depender de valores fixos incompatíveis com a troca de tema.

---

# 113. Iconografia

Criar biblioteca pequena e consistente para conceitos recorrentes:

- navio;
- contêiner;
- caminhão;
- balança;
- documento;
- segurança;
- equipamento;
- porto;
- mapa;
- temperatura;
- peso;
- alerta;
- conclusão.

Priorizar SVG otimizado e reutilizável.

Não carregar pacotes gigantes de ícones se apenas uma pequena parte for usada.

---

# 114. Thumbnails e previews

Cada módulo deve ter thumbnail otimizada em WebP/AVIF quando suportado pela estratégia de build/distribuição.

Não usar render 3D ativo apenas para animar cards da home.

Previews dinâmicos só serão usados quando custo e benefício forem justificados.

---

# 115. Áudio e feedback sonoro

O áudio deve complementar, não comandar sozinho a atividade.

Possibilidades:

- confirmação;
- alerta;
- máquina em operação;
- ambiente portuário;
- rádio fictício;
- sirene didática;
- aviso de ré.

Regras:

- iniciar sem áudio intrusivo;
- controle global de volume;
- opção de silenciar;
- legenda/transcrição para informação importante;
- evitar loops pesados desnecessários.

---

# 116. Layout por capacidade do dispositivo

Além de responsividade por largura, o sistema poderá adaptar complexidade pela capacidade.

Exemplo:

```text
LOW DEVICE
→ menos transparência
→ menos blur
→ Q1
→ UI estática
→ imagens menores

STANDARD
→ Q2
→ transições normais
→ 3D balanceado

HIGH
→ Q3/Q4 disponível
→ sombras e efeitos adicionais
```

A UI não deverá usar efeitos caros de composição se eles competirem com o renderer 3D.

---

# 117. Componentes essenciais do Design System

Primeira biblioteca:

```text
AppShell
TopBar
SideNav
BottomNav
CommandSearch
LabCard
EquipmentCard
DocumentCard
ToolCard
PortCard
Badge
StatusBadge
Button
IconButton
SegmentedControl
Tabs
Drawer
BottomSheet
Modal
Toast
Alert
Tooltip
Progress
StepProgress
Checklist
DataField
DataTable
Stat
GaugeLite
HotspotLabel
MissionPanel
FeedbackPanel
DocumentViewer
GlossaryPopover
LoadingState
EmptyState
ErrorState
QualitySelector
PerformanceBadge
```

Cada componente deverá ter:

- estados;
- variantes;
- foco;
- touch;
- tema;
- acessibilidade;
- comportamento responsivo.

---

# 118. Proibição de componentes duplicados

Se duas telas exibirem o mesmo conceito, deverão reutilizar o mesmo componente ou uma extensão declarada.

Exemplo incorreto:

```text
containerWeightCard.js
truckWeightBox.js
vgmWeightPanel.js
```

Preferência:

```text
DataField
Stat
MeasurementCard
```

com configuração por contexto.

---

# 119. CSS arquitetural

O CSS deverá ser dividido em camadas.

Estrutura proposta:

```text
/styles/
  tokens.css
  reset.css
  base.css
  typography.css
  utilities.css
  themes/
    dark.css
    light.css
    high-contrast.css
  components/
  layouts/
  modules/
```

Regra:

> módulos podem adicionar aparência específica, mas não redefinir globalmente componentes centrais.

---

# 120. Tokens como API visual

Tokens serão considerados parte da API da plataforma.

Exemplo:

```css
:root {
  --surface-page: ...;
  --surface-panel: ...;
  --text-primary: ...;
  --text-muted: ...;
  --status-success: ...;
  --status-warning: ...;
  --status-critical: ...;
  --control-height-md: ...;
  --content-max-width: ...;
}
```

Mudar um tema ou elevar o refinamento visual deverá exigir principalmente alteração dos tokens e assets, e não reescrita de todas as telas.

---

# 121. Orçamento gráfico da UI

A própria interface terá orçamento de desempenho.

Evitar em telas com 3D ativo:

- grandes áreas com `backdrop-filter`;
- múltiplas sombras complexas;
- animações CSS permanentes;
- filtros SVG pesados;
- vídeos decorativos;
- canvas secundário sem necessidade.

O renderer 3D recebe prioridade de GPU.

---

# 122. UX para qualidade gráfica

O aluno não precisa entender termos técnicos de GPU.

Na interface comum:

```text
Gráficos
○ Econômico
● Automático
○ Qualidade
○ Máximo
```

Internamente isso poderá mapear para Q1–Q4.

O painel técnico poderá mostrar os nomes detalhados.

---

# 123. Experiência de degradação gráfica

Se o sistema reduzir qualidade automaticamente, evitar mensagens alarmistas.

Exemplo:

> Ajustamos os gráficos para manter a atividade fluida.

Se chegar ao fallback:

> Este dispositivo está usando a versão leve desta experiência. O conteúdo e a atividade permanecem os mesmos.

---

# 124. Tela inicial do primeiro vertical slice

O laboratório **Contêiner 40 HC — Inspeção** deverá ser a referência de UX.

Fluxo:

```text
CARD NA CENTRAL
      ↓
INTRODUÇÃO
      ↓
ESCOLHA/CONFIRMAÇÃO DO MODO
      ↓
CARREGAMENTO PROGRESSIVO
      ↓
ORIENTAÇÃO DE CONTROLES
      ↓
MISSÃO
      ↓
INSPEÇÃO 3D/2D
      ↓
CHECKLIST
      ↓
DECISÃO FINAL
      ↓
FEEDBACK
      ↓
RELATÓRIO / EVIDÊNCIA
```

---

# 125. Wireframe funcional — Inspeção 40 HC

## Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ ← LAB PORTOS | Inspeção 40 HC | Automático | ? | ⚙        │
├───────────────┬──────────────────────────────┬───────────────┤
│ ETAPA 2/5     │                              │ FICHA         │
│ Inspecione    │                              │ Tipo: 40 HC   │
│ as portas     │       CONTÊINER 3D           │ Tara: ...     │
│               │                              │ Max: ...      │
│ □ dobradiça   │                              │               │
│ □ lacre       │                              │ [Glossário]   │
│ □ vedação     │                              │ [Dica]        │
├───────────────┴──────────────────────────────┴───────────────┤
│ ✓ 2 pontos conferidos       [Registrar conclusão da etapa] │
└──────────────────────────────────────────────────────────────┘
```

## Celular

```text
┌────────────────────────────┐
│ ← Inspeção 40 HC     2/5   │
├────────────────────────────┤
│                            │
│       CONTÊINER 3D         │
│                            │
├────────────────────────────┤
│ [Missão ▲]  [Ficha] [Dica] │
│ Registrar etapa            │
└────────────────────────────┘
```

---

# 126. Experiência de entrada do laboratório

A introdução deverá responder em poucos segundos:

- o que vou fazer?
- por que isso importa?
- quanto preciso interagir?
- quais conhecimentos serão usados?
- que controles vou usar?

Exemplo conceitual:

```text
MISSÃO
Inspecione um contêiner 40 HC antes de sua liberação.

Você deverá localizar possíveis avarias, conferir pontos estruturais e decidir se a unidade pode seguir para a operação.

[Iniciar inspeção]
```

---

# 127. Densidade de informação progressiva

Não exibir toda a teoria antes da prática.

Estrutura preferida:

```text
conceito mínimo → ação → feedback → aprofundamento opcional
```

Quando um aluno seleciona `corner casting`, por exemplo, o sistema pode explicar o componente naquele momento.

Isso deverá ser preferido a páginas longas de teoria antes de abrir o laboratório.

---

# 128. UX de erro pedagógico

Um erro do aluno não deve parecer erro técnico do sistema.

Erro pedagógico:

```text
Essa liberação não é segura.
Há uma divergência ainda não resolvida.
[Revisar conferência]
```

Erro técnico:

```text
O modelo 3D não foi carregado.
[Usar modo leve]
```

Estilos visuais e mensagens devem diferenciar claramente ambos.

---

# 129. UX para cenários ramificados

Cenários futuros poderão mudar conforme decisão.

A UI deverá permitir:

```text
DECISÃO
├── liberar
├── bloquear
└── solicitar nova conferência
```

A plataforma registra a decisão e o Simulation Core define o próximo estado.

Nunca codificar ramificação diretamente em botões específicos da tela.

---

# 130. Estado operacional compartilhado

Componentes visuais devem observar estado sem duplicar regra.

Exemplo:

```text
Simulation Core
  container.lockStatus = 'mismatch'
        ↓
MissionPanel
FeedbackPanel
Hotspot
DocumentViewer
```

Todos apresentam o estado apropriado sem recalcular a regra de negócio.

---

# 131. Testes visuais obrigatórios

Cada laboratório deverá ser testado pelo menos em:

- 1366×768 — notebook escolar comum;
- 1920×1080 — desktop/projetor;
- viewport tablet;
- viewport celular estreito;
- touch quando possível;
- modo escuro;
- modo claro;
- redução de movimento;
- Q1;
- Q2/Auto.

Q3/Q4 serão testados quando disponíveis.

---

# 132. Critérios UX de aceitação

Um laboratório não será aprovado se:

- o aluno não souber qual é a próxima ação;
- controles importantes ficarem escondidos;
- painéis cobrirem a área crítica da cena;
- houver texto ilegível em 1366×768;
- depender somente de hover;
- exigir precisão excessiva no toque;
- o feedback desaparecer antes de ser compreendido;
- ficar impossível distinguir falha técnica de erro pedagógico;
- mudar completamente os controles em relação a laboratórios semelhantes;
- a UI consumir recursos gráficos sem benefício pedagógico.

---

# 133. Estrutura de diretórios visual v0.4

Adicionar à arquitetura:

```text
/src/
  ui/
    components/
    layouts/
    feedback/
    navigation/
    documents/
    missions/
  styles/
    tokens.css
    reset.css
    base.css
    typography.css
    utilities.css
    themes/
    components/
    layouts/
  icons/
  search/
  accessibility/
```

Os módulos consomem essa camada; não copiam componentes para dentro de suas próprias pastas.

---

# 134. Roadmap v0.4 → implementação

## P0.4-A — Tokens e App Shell

Construir:

- tokens;
- tipografia;
- temas;
- AppShell;
- TopBar;
- navegação responsiva;
- área principal.

## P0.4-B — Central Portuária

Construir:

- hero funcional curto;
- continuar atividade;
- grids de módulos;
- cards reutilizáveis;
- busca visual;
- estado vazio/progresso.

## P0.4-C — Shell de laboratório

Construir:

- LabShell;
- MissionPanel;
- ContextDrawer;
- HUD;
- FeedbackPanel;
- QualitySelector;
- controles responsivos.

## P0.4-D — Estados e acessibilidade

Construir:

- loading;
- erro;
- fallback;
- toasts;
- alertas;
- foco;
- reduced motion;
- touch targets;
- temas.

## P0.4-E — Aplicar ao vertical slice

Integrar tudo em:

**Contêiner 40 HC — Inspeção**.

Essa será a prova de que o Design System funciona antes da expansão para os demais módulos.

---

# 135. Decisão consolidada da v0.4

O LAB PORTOS 360 passa a adotar formalmente:

- Design System próprio e reutilizável;
- identidade técnica portuária sem imitar sistema empresarial real;
- Central Portuária orientada a continuidade e descoberta;
- LabShell único para experiências 2D/3D/360;
- HUD mínimo e contextual;
- gavetas para teoria e dados complementares;
- quatro modos pedagógicos com diferenças visuais claras;
- responsividade por layout e por capacidade do dispositivo;
- controles 3D padronizados;
- feedback em múltiplos níveis;
- documentos didáticos claramente identificados;
- Modo Professor e Modo Demonstração como camadas próprias;
- diagnóstico técnico separado da experiência do estudante;
- temas via tokens;
- orçamento de GPU também para a interface;
- degradação gráfica elegante e transparente;
- testes visuais obrigatórios;
- primeiro UX benchmark: **Contêiner 40 HC — Inspeção**.

A próxima evolução planejada será a **v0.5 — mapa curricular e catálogo modular completo de laboratórios**, relacionando competências da formação técnica em Portos com experiências práticas, ferramentas, simulações, 3D/360 e níveis de dificuldade. Depois disso, a implementação da fundação poderá começar com escopo pedagógico muito mais bem definido.

---

## Histórico — atualização v0.4

### v0.4 — 07/08/2026

- Design System e princípios visuais formalizados;
- identidade visual portuária inicial definida;
- sistema de tokens e temas planejado;
- Central Portuária especificada;
- navegação desktop/tablet/mobile definida;
- biblioteca inicial de cards e componentes estabelecida;
- LabShell e HUD padrão especificados;
- gavetas contextuais e sistema de hotspots definidos;
- feedback e níveis de severidade padronizados;
- UX específica dos modos Guiado, Prática, Desafio e Exploração Livre definida;
- responsividade 3D por composição definida;
- controles universais de cena padronizados;
- loading progressivo, skeletons e fallback visual especificados;
- DocumentViewer e documentos didáticos definidos;
- busca global e glossário contextual planejados;
- progresso local e evidências considerados na UX;
- Modo Professor e Modo Demonstração especificados;
- Painel Técnico/Diagnóstico definido;
- falhas, rede limitada e degradação gráfica tratados na UX;
- biblioteca inicial do Design System listada;
- arquitetura CSS e tokens formalizados;
- orçamento gráfico da interface definido;
- wireframes do primeiro vertical slice documentados;
- critérios de aceitação UX e testes visuais obrigatórios definidos;
- roadmap P0.4-A a P0.4-E estabelecido.


---

## v0.5.0 — Fundação executável (07/08/2026)

Foi criada a primeira base funcional e publicável no GitHub Pages do LAB PORTOS 360, em HTML/CSS/JavaScript puro com ES Modules e roteamento por hash. A estrutura separa `core`, `services`, `data` e `modules`, permitindo futuras atualizações incrementais por arquivos alterados sem reconstruir toda a aplicação. O primeiro vertical slice executável é **Contêiner 40 HC — Inspeção**, inicialmente em representação 2D interativa preparada para evolução posterior para 3D/360. A base inclui Module Registry, Event Bus, Storage Adapter, Quality Manager Q0–Q4 + Auto, Performance Monitor e contrato `mount()/unmount()` para descarregamento dos módulos.

---

## v0.6.0 — Laboratórios funcionais + primeira camada gráfica 3D (07/08/2026)

A base executável foi expandida para cinco laboratórios funcionais e recebeu sua primeira implementação real do **Graphics Adapter** compartilhado. O motor gráfico não pertence a um laboratório específico: fica em `assets/js/services/three-engine.js` e é carregado somente quando um módulo 3D é aberto.

### Decisões implementadas

- Three.js r184 carregado por import map e `dynamic import`;
- `OrbitControls` compartilhado para órbita, zoom e pan;
- renderer configurado conforme o `Quality Manager`;
- Q0 prioriza fallback/compatibilidade na entrada do laboratório;
- resize via `ResizeObserver`;
- raycasting reutilizável para interação com objetos 3D;
- métricas de draw calls, triângulos, geometrias e texturas publicadas no Event Bus;
- `dispose()` obrigatório do renderer, controles, materiais e geometrias no `unmount()`;
- assets 3D pesados ainda não são necessários nesta etapa: os primeiros objetos são procedurais para validar arquitetura e desempenho;
- a troca futura de geometria procedural por GLB/PBR não deve alterar a lógica pedagógica.

### Laboratórios disponíveis na v0.6.0

1. **Contêiner 40 HC — Inspeção 3D**
   - modelo procedural 3D;
   - estrutura, portas, barras e corrugações;
   - câmera orbital;
   - três hotspots 3D;
   - checklist, persistência e conclusão da missão;
   - fallback 2D.

2. **Reefer — Operação e Temperatura**
   - representação 3D de contêiner refrigerado;
   - unidade frigorífica frontal;
   - ligar/desligar;
   - ajuste de set point;
   - supply e return simulados;
   - alarmes e validação operacional.

3. **Gate Portuário — Triagem**
   - cenário gráfico de cabine, cancela, faixa e caminhão;
   - leitura de placa;
   - booking;
   - lacre previsto versus lacre lido;
   - documentação e agendamento;
   - decisão entre autorizar ou reter;
   - pontuação local.

4. **Balança e VGM — Pesagem**
   - caminhão e plataforma de balança em representação gráfica;
   - display digital;
   - tara do cavalo e do chassi;
   - tara do contêiner e carga declarada;
   - cálculo da massa do contêiner carregado;
   - comparação entre pesagem e declaração;
   - tomada de decisão didática.

5. **Bay / Row / Tier — Localização a Bordo**
   - matriz 3D simplificada de estivagem;
   - uso de `InstancedMesh` para validar renderização eficiente de unidades repetidas;
   - posição destacada;
   - exercícios Bay/Row/Tier;
   - alternância entre desafios;
   - fallback leve.

### Central Portuária

A home recebeu busca textual, filtros por categoria, novos cards visuais, pipeline operacional e contadores atualizados. A identidade visual continua técnica e abstrata, sem imitar interface de um terminal real.

### Próximas evoluções gráficas

- substituir gradualmente modelos procedurais prioritários por GLB otimizados;
- criar Asset Manager específico para GLB, KTX2 e LOD;
- adicionar texturas PBR e decals didáticos;
- criar pátio modular com instancing de contêineres;
- adicionar Reach Stacker, RTG, portêiner e caminhões 3D;
- evoluir cenários de terminal e navio;
- validar qualidade gráfica Q1–Q4 em notebooks e celulares reais;
- manter fallback 2D/leve em todos os laboratórios críticos.

---

## v0.7.0 — Terminal portuário 3D integrado + Port Scene Kit (07/08/2026)

A plataforma passa a ter **oito laboratórios funcionais** e consolida uma segunda camada gráfica compartilhada: `assets/js/services/port-scene-kit.js`. Esse serviço reúne objetos portuários procedurais reutilizáveis para que a evolução visual ocorra uma única vez e seja reaproveitada por diferentes módulos.

### Port Scene Kit

Componentes iniciais reutilizáveis:

- contêiner simplificado;
- caminhão e carreta;
- piso/asfalto e faixas operacionais;
- blocos de pátio com `InstancedMesh`;
- Reach Stacker;
- RTG;
- Portêiner / STS;
- navio porta-contêineres simplificado;
- água e cais.

O `Three Engine` também foi ampliado para aceitar configurações de ambiente por laboratório: cor de fundo, fog, piso, grid, distância da câmera, luz do céu e posição/intensidade do sol.

### Novos laboratórios da v0.7.0

6. **Pátio 3D — Ocupação e Destinação**
   - três blocos didáticos com funções distintas;
   - indicador de ocupação;
   - pilhas de contêineres renderizadas com instancing;
   - caminhão, Reach Stacker e RTG no mesmo cenário;
   - casos de importação, exportação e reefer;
   - escolha do bloco adequado;
   - animação de movimentação da unidade até o destino;
   - fallback sem WebGL.

7. **Navio 3D — Operação de Cais**
   - navio porta-contêineres simplificado;
   - cais e área aquática;
   - Portêiner / STS;
   - caminhão em área terrestre;
   - ordens de carga e descarga;
   - conferência de Bay e sentido da operação;
   - animação simplificada de elevar → transladar → depositar;
   - fallback leve.

8. **Equipamentos Portuários 3D**
   - showroom com Reach Stacker, RTG e Portêiner;
   - câmera que muda o foco conforme o equipamento selecionado;
   - ficha de função principal;
   - pistas visuais de reconhecimento;
   - desafios para relacionar equipamento e aplicação operacional.

### Nova regra arquitetural

Equipamentos, veículos e elementos de terminal que possam aparecer em mais de um laboratório **não devem ser reconstruídos dentro dos módulos**. Devem entrar no Port Scene Kit ou em futuros pacotes de assets compartilhados. Isso reduz duplicação e cria uma rota clara de evolução:

```text
Procedural compartilhado
        ↓
GLB otimizado
        ↓
PBR / decals
        ↓
LOD + KTX2
        ↓
versões gráficas Q1–Q4
```

A lógica pedagógica permanece independente da fidelidade gráfica.

### Próximas prioridades após v0.7.0

- Asset Manager para GLB e cache de assets;
- primeiro modelo GLB real substituível no Port Scene Kit;
- texturas PBR e decals para contêineres;
- expansão do pátio para slots e endereçamento mais detalhados;
- simulação de Reach Stacker com braço/spreader animados;
- RTG com trolley e spreader móveis;
- portêiner com trolley sincronizado ao contêiner;
- cenário 360 complementar ao 3D;
- Central de Documentos como próximo grande módulo não-3D;
- integração entre progresso de Gate → Balança → Pátio → Navio.

---

## v0.8.0 — Asset Manager, GLB/LOD, PBR e Central de Documentos (07/08/2026)

A plataforma passa a ter **nove laboratórios funcionais** e inaugura o pipeline de assets 3D externos, mantendo os modelos procedurais como fallback. O objetivo desta etapa é provar que a qualidade gráfica pode crescer verticalmente sem alterar a lógica pedagógica dos módulos.

### Asset Manager

Foi criado `assets/js/services/asset-manager.js` com as seguintes responsabilidades:

- ler um manifesto central de assets;
- selecionar LOD conforme o perfil gráfico efetivo;
- carregar GLB/glTF sob demanda;
- manter cache de variantes carregadas;
- controlar referências para evitar descarte prematuro;
- emitir eventos de carregamento/liberação;
- preparar GLTFLoader para Draco, Meshopt e KTX2;
- manter fallback quando um asset não puder ser carregado.

O manifesto inicial fica em:

```text
assets/models/manifest.json
```

O laboratório solicita um `assetId`, sem conhecer caminhos físicos de arquivo. Assim, modelos podem ser substituídos futuramente sem modificar o módulo.

### Primeiro asset GLB com LOD

O Contêiner 40 HC agora possui três arquivos locais:

```text
assets/models/container-40hc/
├── container-40hc-lod0.glb  # maior detalhe
├── container-40hc-lod1.glb  # intermediário
└── container-40hc-lod2.glb  # leve
```

Mapeamento inicial:

- Q1 → LOD2;
- Q2 → LOD1;
- Q3 → LOD0;
- Q4 → LOD0 + detalhes visuais superiores;
- Q0 → fallback 2D/leve.

O modelo é educacional e próprio, propositalmente leve. Ele serve como prova do pipeline e pode ser trocado posteriormente por um modelo de maior fidelidade.

### PBR e decals

Foi criado `pbr-details.js` para detalhes gráficos desacoplados do modelo-base. A primeira implementação adiciona:

- identificação visual fictícia do contêiner por textura gerada em runtime;
- materiais compatíveis com fluxo PBR do Three.js;
- decal projetado de desgaste/ferrugem em perfis superiores quando suportado;
- fallback para identificação simples se a projeção do decal não for adequada.

Decals e texturas visuais são elementos gráficos, não informações operacionais reais.

### Quality Manager ampliado

Além de pixel ratio, sombras e efeitos, o Quality Manager passa a expor:

- `assetLod`;
- ativação de decals;
- nível de detalhe de animação.

Isso prepara a plataforma para adaptar download, geometria e animação, não apenas resolução de renderização.

### Equipamentos animados

O Port Scene Kit passa a expor referências internas de rig simplificado para:

- Reach Stacker: braço e spreader;
- RTG: trolley, spreader e cabos;
- Portêiner: trolley e spreader.

O laboratório Equipamentos Portuários 3D recebeu um modo de demonstração de movimento. As animações continuam didáticas e simplificadas, sem representar ciclos operacionais ou capacidades específicas de fabricantes.

### 9. Central de Documentos — Conferência

A Central de Documentos passa de planejada para funcional.

Documentos abordados inicialmente:

- NF-e / DANFE;
- CT-e / DACTE;
- MDF-e;
- Bill of Lading (B/L);
- Commercial Invoice;
- Packing List;
- Duimp.

O laboratório possui:

- biblioteca navegável;
- representações fictícias de documentos;
- campos principais para reconhecimento;
- casos de associação documento ↔ finalidade;
- persistência local;
- aviso explícito de que sistemas, layouts e regras podem mudar.

A Duimp é tratada como parte do processo de migração do novo processo de importação no Portal Único Siscomex; conteúdos normativos deverão ser revisados periodicamente em fontes oficiais.

### Nova regra de descarte

Objetos carregados pelo Asset Manager recebem marcação própria e não devem ter geometrias/material descartados pelo descarte genérico de cena. O Asset Manager controla o ciclo de vida desses recursos. Elementos transitórios adicionados pelo laboratório continuam sendo descartados pelo módulo/Three Engine.

### Estado ao final da v0.8.0

Laboratórios funcionais:

1. Contêiner 40 HC — Inspeção 3D;
2. Reefer — Operação e Temperatura;
3. Gate Portuário — Triagem;
4. Balança e VGM — Pesagem;
5. Pátio 3D — Ocupação e Destinação;
6. Bay / Row / Tier;
7. Navio 3D — Operação de Cais;
8. Equipamentos Portuários 3D;
9. Central de Documentos — Conferência.

### Próximas prioridades após v0.8.0

- gerar/manter manifestos separados por famílias de assets;
- adicionar GLB para caminhão, Reach Stacker, RTG e Portêiner;
- texturas PBR reais com mapas baseColor/normal/roughness/metalness;
- iniciar KTX2 em texturas de maior peso;
- criar distâncias reais de LOD em cenas amplas, além da seleção por perfil;
- melhorar animações de equipamentos com pivôs e cinemática mais coerentes;
- integrar progresso operacional Gate → Balança → Pátio → Cais;
- criar laboratório de tipos de contêineres 20'/40'/HC/Reefer/Open Top/Flat Rack;
- expandir documentação para fluxo de importação/exportação com atualização oficial periódica;
- iniciar cenários 360 complementares aos ambientes 3D.

---

## v0.9.0 — Biblioteca GLB ampliada, LOD por distância e Operação Integrada (07/08/2026)

A v0.9.0 amplia a evolução gráfica sem abandonar o princípio de fallback e modularidade. O Asset Manager passa a trabalhar com dez famílias de assets e trinta GLBs locais distribuídos em LOD0/LOD1/LOD2.

### Novos assets 3D

- Caminhão portuário;
- Reach Stacker;
- RTG;
- Portêiner / STS;
- Contêiner 20' Dry;
- Contêiner 40' Dry;
- Contêiner 40' High Cube;
- Reefer 40' High Cube;
- Open Top 40';
- Flat Rack 40'.

Os modelos são educacionais e próprios da plataforma, ainda simplificados, mas já cumprem a função de validar um pipeline substituível por modelos progressivamente mais realistas.

### LOD por qualidade e distância

Foi criado `assets/js/services/distance-lod.js`, que utiliza `THREE.LOD` para alternar modelos conforme a distância da câmera. A política inicial é:

- Q1: LOD2;
- Q2: LOD1 + LOD2;
- Q3/Q4: LOD0 + LOD1 + LOD2.

O Asset Manager também passa a aceitar um LOD explícito, preservando cache, contagem de referências e fallback.

### Materiais industriais

O Asset Manager aplica perfis básicos de roughness/metalness aos modelos carregados para diferenciar pintura metálica, aço, borracha e vidro. Esta camada poderá ser substituída futuramente por texturas PBR/KTX2 reais sem alterar os módulos.

### Novo laboratório — Tipos de Contêiner

O módulo `Tipos de Contêiner — Comparador 3D` permite comparar visualmente e por ficha didática:

- 20' Dry;
- 40' Dry;
- 40' High Cube;
- Reefer 40' HC;
- Open Top 40';
- Flat Rack 40'.

O laboratório usa os GLBs locais, LOD por distância, desafios de reconhecimento e fallback procedural/Q0.

### Novo laboratório — Operação Integrada

Foi criado o serviço `operation-flow.js` e o módulo `Operação Integrada — Gate ao Navio`.

A jornada opcional encadeia:

`Gate → Balança → Pátio → Navio`

Cada laboratório continua independente, mas, quando a jornada é iniciada, uma conclusão correta registra a etapa correspondente no `localStorage`. A Central passa a mostrar visualmente quais etapas foram concluídas.

### Pátio e equipamentos

O Pátio 3D passa a tentar carregar caminhão, Reach Stacker e RTG via Asset Manager, com fallback procedural automático. O laboratório Equipamentos Portuários também passa a tentar usar os GLBs de Reach Stacker, RTG e Portêiner, preservando as demonstrações e o fallback.

### Estado ao final da v0.9.0

- 11 laboratórios funcionais;
- 10 famílias de assets 3D no manifesto;
- 30 GLBs locais;
- LOD por perfil e por distância;
- progresso integrado entre quatro laboratórios operacionais;
- Q0 e fallbacks procedurais preservados;
- arquitetura compatível com GitHub Pages e sem build obrigatório.

### Próximas prioridades após v0.9.0

- texturas PBR reais e KTX2;
- iluminação IBL/HDRI otimizada;
- cinemática mais fiel de Reach Stacker, RTG e STS;
- pátio com endereçamento Block/Bay/Row/Tier;
- operação ferroviária e intermodal;
- inspeção de avarias com catálogo visual maior;
- missões integradas com documentos e decisões de exceção;
- primeiro cenário 360 fotográfico/didático quando houver assets adequados.

---

## v0.10.0 — Terminal realista, endereçamento, intermodal e missões de exceção (07/08/2026)

A v0.10.0 amplia a plataforma de 11 para **14 laboratórios funcionais** e fortalece o princípio de evolução gráfica compartilhada. O objetivo desta fase não é aumentar apenas a contagem de módulos, mas criar serviços que elevem simultaneamente vários laboratórios sem duplicação de código.

### 1. Terminal Environment Kit

Foi criado `assets/js/services/terminal-environment.js` como biblioteca compartilhada de infraestrutura visual. Ele oferece:

- asfalto procedural gerado em CanvasTexture, sem imagem externa obrigatória;
- faixas operacionais e de segurança;
- cercamento do terminal;
- postes e iluminação adicional em perfis gráficos superiores;
- trilhos ferroviários;
- vagão-plataforma simplificado para contêiner;
- componentes reutilizáveis por Pátio, Cais, Intermodal e futuros módulos.

O Pátio 3D e o Navio/Cais 3D foram migrados parcialmente para esse kit, melhorando a coerência visual e reduzindo duplicação.

### 2. IBL procedural em Q3/Q4

O `three-engine.js` passa a tentar gerar iluminação ambiental por `PMREMGenerator + RoomEnvironment` quando o perfil efetivo for Q3 ou Q4. Q1/Q2 continuam usando uma solução mais econômica baseada em HemisphereLight + DirectionalLight. Caso a IBL falhe, a cena continua operando normalmente.

A limpeza de cena também foi reforçada para liberar texturas associadas a materiais, além de geometrias e materiais.

### 3. Endereçamento completo de pátio

Foi criado `assets/js/services/yard-addressing.js`, mantendo a regra operacional fora da interface 3D. O serviço padroniza:

`Block → Bay → Row → Tier`

Funções compartilhadas:

- normalização de endereço;
- validação;
- formatação didática, exemplo `B-03-C-02`;
- comparação de endereço;
- conversão do endereço para coordenadas de cena.

Novo laboratório: **Pátio — Block / Bay / Row / Tier**.

O aluno recebe uma unidade e uma instrução operacional, monta o endereço e localiza a posição em uma representação 3D do terminal. O próprio laboratório reforça que convenções reais podem variar entre terminais/TOS.

### 4. Ferrovia e Rodovia — Intermodal 3D

Novo laboratório focado na integração entre modais. O cenário contém:

- faixa rodoviária;
- caminhão;
- trilhos;
- vagões-plataforma;
- terminal cercado e iluminado conforme qualidade;
- casos de decisão sobre transferência rodoviária ou ferroviária.

O módulo não apresenta um modal como universalmente superior: a decisão é contextual, simplificada para fins pedagógicos e relacionada a distância, volume, infraestrutura e objetivo operacional.

### 5. Missão Integrada — Tratamento de Exceções

Foi criado `assets/js/services/mission-engine.js` para persistência e avaliação de missões encadeadas.

A primeira missão, **Exportação reefer com divergências**, trabalha quatro pontos:

1. Gate — conferência de booking/lacre;
2. Balança/VGM — divergência de massa;
3. Reefer — retorno de temperatura + alarme;
4. Documentação — divergência entre Packing List e Commercial Invoice.

O aluno precisa decidir se libera, investiga, monitora ou confere antes de continuar. A missão salva pontuação e progresso localmente.

### 6. Estado da plataforma ao final da v0.10.0

Laboratórios funcionais:

1. Contêiner 40 HC — Inspeção 3D;
2. Reefer — Operação e Temperatura;
3. Gate Portuário — Triagem;
4. Balança e VGM — Pesagem;
5. Pátio 3D — Ocupação e Destinação;
6. Bay / Row / Tier — Localização a Bordo;
7. Navio 3D — Operação de Cais;
8. Equipamentos Portuários 3D;
9. Central de Documentos — Conferência;
10. Tipos de Contêiner — Comparador 3D;
11. Operação Integrada — Gate ao Navio;
12. Pátio — Block / Bay / Row / Tier;
13. Ferrovia e Rodovia — Intermodal 3D;
14. Missão Integrada — Tratamento de Exceções.

### 7. Continuidade técnica

Permanecem válidos:

- GitHub Pages sem build obrigatório;
- HTML/CSS/JavaScript modular;
- hash routing;
- Three.js carregado sob demanda;
- Asset Manager;
- GLB/LOD0/LOD1/LOD2;
- LOD por qualidade e distância;
- Q0 como fallback sem WebGL;
- modelos procedurais de contingência;
- Event Bus;
- Storage local;
- Operation Flow Gate → Balança → Pátio → Navio;
- descarregamento/dispose obrigatório.

### 8. Próximas prioridades após v0.10.0

- endereçamento de pátio ligado ao laboratório de destinação, não apenas ao treino isolado;
- slots reefer, DG e OOG como regras específicas de pátio;
- trem com locomotiva, composição e animação de transferência;
- caminhões com cavalo/chassi desacopláveis;
- iluminação diurna/noturna e clima leve adaptativo;
- texturas PBR/KTX2 reais, mantendo fallback procedural;
- melhoria de rig/cinemática de Reach Stacker, RTG e Portêiner;
- operação integrada mais longa: documentos → gate → VGM → pátio → planejamento → cais → bordo;
- relatórios/evidências das missões;
- modo Professor com seleção de cenário e injeção de exceções.


---

## v0.11.0 — Operação especializada, ferrovia e controle de cenário

Data: 07/08/2026

A v0.11.0 amplia a plataforma para **19 laboratórios funcionais** e aprofunda a operação prática sem romper a arquitetura modular.

### Novos laboratórios
- **Pátio Especializado — Reefer / DG / OOG**: zonas dedicadas, regras didáticas de segregação e endereço Block/Bay/Row/Tier.
- **Terminal Ferroviário — Formação e Transferência**: locomotiva, composição de vagões e transferência animada vagão↔pátio.
- **Cavalo Mecânico e Chassi — Acoplamento**: visualização das partes e ciclo simplificado de acoplar/desacoplar.
- **Terminal 24h — Ciclo Dia e Noite**: amanhecer, dia, entardecer e noite com alteração dinâmica de iluminação, exposição e luzes do terminal.
- **Painel do Professor — Injeção de Exceções**: falhas didáticas persistentes para Gate, VGM, Reefer, pátio, documentação, cais e ferrovia.

### Núcleo e gráficos
- Novo `yard-zoning.js` para classificar carga e recomendar/validar zonas de pátio.
- Novo `scenario-control.js` para armazenar exceções locais e apresentar avisos nos laboratórios afetados.
- Novo `day-night-cycle.js` e exposição das luzes principais do `three-engine.js` aos módulos.
- `terminal-environment.js` ganhou locomotiva procedural, conjunto cavalo/chassi e identificação de luminárias para ciclo noturno.
- O Pátio Operacional passou a exibir o endereço de destino após uma destinação correta.
- A biblioteca passa a ter **12 famílias de assets e 36 GLBs**, incluindo locomotiva e chassi em LOD0/LOD1/LOD2.

### Princípio de segurança didática
DG/OOG, VGM, Reefer e procedimentos ferroviários são apresentados como simulações educacionais. Regras reais dependem de legislação, terminal, TOS, operador, armador e procedimentos vigentes.

### Validação v0.11.0
- 55 arquivos JavaScript;
- 65 imports locais verificados, 0 ausentes;
- 19/19 módulos com contrato `mount/unmount`;
- 12 famílias de assets;
- 36 GLBs válidos;
- `VERSION.json` e `manifest.json` válidos.

### Próximas prioridades
1. integrar exceções do professor diretamente aos dados internos de Gate/Balança/Reefer, não apenas ao contexto visual;
2. desenvolver slots DG com classes/segregações didáticas mais detalhadas;
3. criar operação de twistlock/spreader e confirmação de acoplamento;
4. ampliar locomotiva e vagões para assets mais detalhados;
5. criar relatório de sessão e evidência exportável;
6. ampliar cenário 360 e referências de terminais/portos reais com conteúdo atualizado.


---

## Atualização v0.12.0 — Segurança da movimentação, exceções efetivas e evidências

A v0.12.0 amplia o LAB PORTOS 360 para 21 laboratórios funcionais. Foram adicionados o laboratório **Spreader e Twistlocks — Engate 3D** e **Relatório de Sessão — Evidências**. O núcleo recebeu `cargo-securing.js`, `session-recorder.js`, `truck-coupling.js` e `special-cargo-rules.js`. O Painel do Professor deixa de apenas exibir banners: as exceções passam a modificar efetivamente os dados simulados de Gate, Balança/VGM e Reefer. O laboratório Cavalo/Chassi ganhou uma sequência didática de inspeção, aproximação, trava, pernas de apoio e teste, com quinta roda e pino-rei representados na cena. O pátio especializado passou a trabalhar com cenários didáticos DG classe 3 e 8, Reefer e OOG. O SessionRecorder registra eventos locais da atividade e permite exportar JSON ou um relatório HTML imprimível/salvável como PDF. Tudo permanece front-end e compatível com GitHub Pages.

Próximas prioridades: integrar injeções também ao Pátio/Documentação/Navio/Ferrovia, criar checklist de inspeção CSC/placas e lacres, ampliar avarias 3D, melhorar rig de spreader/portêiner, relatórios por jornada e cenários 360/referências de portos reais.


---

## Atualização v0.13.0 — CSC, avarias, exceções operacionais e relatório de jornada

A v0.13.0 amplia o LAB PORTOS 360 para **23 laboratórios funcionais**. Entram **CSC, Placas e Lacres — Inspeção** e **Avarias Estruturais — Avaliação 3D**. O núcleo recebe `container-compliance.js`, `damage-assessment.js` e `quay-crane-rig.js`. O `scenario-control.js` migra para o formato v013 e passa a aplicar efeitos operacionais também no Pátio (ocupação crítica/desvio para contingência), Documentação (Invoice x Packing List), Navio/Cais (bloqueio por alerta de vento) e Terminal Ferroviário (replanejamento por atraso), além de Gate, VGM e Reefer já existentes. O Pátio 3D passa a representar também o Bloco D. O portêiner procedural sincroniza trolley, spreader e cabos com a carga durante o ciclo. O Relatório de Sessão passa a mostrar e exportar a jornada Gate → Balança → Pátio → Navio. A inspeção CSC/lacres usa conceitos gerais da IMO/WCO, com dados fictícios e aviso explícito para consulta a procedimentos vigentes.

Próximas prioridades: inspeção 360 de contêiner, modelos GLB mais detalhados de spreader/portêiner, deformações visuais reais para avarias, exportação PDF direta quando compatível, cenários reais de portos como estudo de caso e expansão da jornada para documentação/ferrovia.


---

## Atualização v0.14.0 — inspeção 360, avarias visuais, spreader telescópico e portos reais

A v0.14.0 amplia o LAB PORTOS 360 para **26 laboratórios funcionais**. Entram **Inspeção Externa 360°**, **Portos Reais — Estudos de Caso** e **Jornada Completa — Documento ao Navio**. O núcleo recebe `damage-visuals.js`, `extended-operation-flow.js` e `port-case-studies.js`. As seis avarias do contêiner passam a ter representação geométrica visível. O spreader passa a alternar span didático de 20’ e 40’ e o contêiner acompanha a configuração. A nova jornada compartilhada integra Documentação → Gate → VGM → Pátio → Transferência (Cais/Spreader ou Ferrovia) → Navio, reconhecendo conclusões emitidas pelos módulos existentes. A Central de Evidências passa a mostrar também essa jornada. O módulo de portos reais usa informações oficiais datadas de Paranaguá/TCP, Porto Itapoá e Portonave e mantém links para as fontes institucionais, evitando tratar números operacionais como permanentes.

Próximas prioridades: panorama fotográfico 360 opcional por adapter, GLB detalhado de spreader/portêiner, anti-sway/cabos mais realistas, inspeção interna de contêiner, plano de estiva mais avançado, produtividade/KPIs e estudos de caso adicionais.


---

## Atualização v0.15.0 — inspeção interna, estiva avançada, anti-sway, KPIs e fila terrestre

A v0.15.0 amplia o LAB PORTOS 360 para **31 laboratórios funcionais**. Entram **Inspeção Interna — Condição para Carga**, **Plano de Estiva — Restrições Operacionais**, **Portêiner — Trolley, Hoist e Anti-sway**, **KPIs do Terminal — Produtividade e Fluxo** e **Fila Dinâmica de Caminhões**. O núcleo ganha `internal-inspection.js`, `stowage-planner.js`, `crane-dynamics.js`, `terminal-kpis.js` e `truck-queue.js`. A inspeção interna trabalha piso, paredes, teto, portas, limpeza/odor e teste de luz em interior 3D. A estiva avançada usa uma matriz Bay/Row/Tier simplificada com regras didáticas para unidade pesada, Reefer, DG Classe 3 e OOG. O laboratório anti-sway usa um modelo de pêndulo para comparar controle manual e assistência de amortecimento. O módulo de KPIs trabalha prancha/movimentos por hora, turn time de caminhões, ocupação de pátio, dwell e vazão de gate em cenários simulados. A fila dinâmica permite ajustar quantidade de lanes, taxa de chegada e tempo de atendimento. O estudo de portos reais passa a incluir também BTP, Tecon Santos e DP World Santos, sempre com fonte oficial e data de referência.

Próximas prioridades: navio com plano de estiva por hatch/deck, simulação de produtividade por turno, fila integrada ao Gate, inspeção interna com portas animadas/lanterna, integração dos KPIs ao Session Recorder e dashboard de jornada, panorama 360 fotográfico opcional e novos estudos de terminais brasileiros.


---

## Atualização v0.16.0 — terminal integrado, turno e Hatch/Deck

A v0.16.0 amplia o LAB PORTOS 360 para **34 laboratórios funcionais** e cria uma camada de estado operacional compartilhado. O novo `terminal-live-state.js` recebe eventos de Fila, Gate, Pátio, Cais e Ferrovia e mantém um snapshot persistente no navegador. A Fila Dinâmica publica suas métricas; o Gate registra processamento/turn time; o Pátio publica ocupação e bloco; o Navio publica movimentos; a Ferrovia publica ciclos. O módulo de KPIs passa a oferecer uma opção **Dados do terminal** derivada desse estado. Entram os laboratórios **Dashboard do Terminal — Operação Integrada**, **Turno Operacional — 8 horas** e **Plano de Estiva — Porão e Convés**. O turno usa um modelo didático acumulado de demanda terrestre, capacidade de gate, movimentos de cais, ferrovia e ocupação de pátio. O plano Hatch/Deck diferencia posições de porão e convés e aplica regras simplificadas para carga pesada, Reefer, DG Classe 3 e OOG. A Inspeção Interna ganha portas animadas e lanterna virtual.

Próximas prioridades: dashboard com gráfico histórico local, eventos de turno/notificações, integração de exceções do professor ao turno e dashboard, planejamento de navio por hatch completo, simulação de produtividade multi-portêiner, câmera de cabine/equipamento, panorama 360 fotográfico opcional e exportação de relatório operacional consolidado do turno.


---

## v0.17.0 — Central de Operações e coordenação do terminal
**Data:** 07/08/2026

A v0.17.0 transforma o Dashboard do Terminal em uma **Central de Operações** consumindo o estado compartilhado, sem manter um cenário 3D permanente. A versão amplia a plataforma para **38 laboratórios funcionais** e adiciona quatro novos serviços estruturais:

- `yard-occupancy-state.js`: mapa persistente com 4 Blocks × 6 Bays × 4 Rows × 4 Tiers (384 slots didáticos), agregação por bloco/bay e sincronização com o estado vivo;
- `berth-scheduler.js`: programação fictícia de navios e três berços, verificação de comprimento e conflito de janela, além de planejamento automático;
- `terminal-event-engine.js`: eventos de turno com efeitos cruzados sobre Fila/Gate/Pátio/Cais/Ferrovia/Reefer;
- `terminal-alarm-manager.js`: alarmes derivados de fila, capacidade do Gate, ocupação de pátio, turn time, conflitos de berço, eventos integrados e exceções didáticas.

### Novos laboratórios
1. **Mapa de Ocupação — Block / Bay / Row / Tier**: visualiza 384 slots, permite selecionar Block/Tier e alternar Livre/Reservado para treino de endereço.
2. **Programação de Navios e Berços**: escalas e berços fictícios, ETA, duração, comprimento, conflito e auto-planejamento.
3. **Mapa Operacional do Terminal**: esquema vetorial/CSS leve de Fila → Gate → VGM → Pátio → Ferrovia/Cais/Berços, alimentado por estado local.
4. **Eventos Operacionais — Impacto Integrado**: pico rodoviário, saturação do pátio, frente de vento, perda de janela ferroviária e alarme de grupo Reefer.

### Central de Operações
O antigo Dashboard passa a mostrar estado operacional, KPIs, alarmes reconhecíveis, ocupação por bloco, situação dos berços no tempo simulado e atalhos para mapas/planejamento/eventos. O objetivo é manter uma visão de controle aberta em projetor/notebook com baixo consumo de GPU.

### Integração
O `terminal-live-state.js` migra de `terminal:live:v016` para `terminal:live:v017`, preservando estado existente e adicionando `terminal.status`, `terminal.weather`, `terminal.activeEvent`, `yard.lastAddress` e ocupação por bloco.

### Próximas prioridades
- programação de recursos por navio (portêiner/equipe/janela);
- ETA/ETD dinâmicos e fila de fundeio didática;
- mapa de pátio com movimentos planejados e rehandles;
- manutenção e indisponibilidade de equipamentos;
- eventos meteorológicos com evolução temporal;
- dashboard histórico com série temporal do turno;
- integração dos alarmes com missões orientadas a decisão.


# Atualização v0.18.0 — Fundeio, Recursos, Manutenção, Rehandles e Histórico de KPIs

Data: 07/08/2026

A v0.18.0 amplia a Central de Operações sem manter carga 3D permanente. Foram criados cinco novos laboratórios funcionais: **Fila de Fundeio — ETA/ETD Dinâmico**, **Recursos do Cais — Portêineres e Equipes**, **Manutenção e Disponibilidade de Equipamentos**, **Rehandles no Pátio** e **Histórico de KPIs — Linha do Turno**.

Novos serviços: `anchorage-queue.js`, `quay-resource-planner.js`, `equipment-maintenance.js`, `yard-rehandle.js` e `kpi-history.js`. O `terminal-live-state.js` migra para `v018`, preservando o estado `v017` e adicionando fundeio, recursos, disponibilidade e rehandles. O gerenciador de alarmes agora deriva também fila de fundeio, atraso médio, baixa disponibilidade de STS, equipamentos indisponíveis e rehandles acumulados.

A arquitetura continua orientada a eventos e armazenamento local, compatível com GitHub Pages, Q0–Q4/AUTO e módulos independentes.

# Atualização v0.19.0 — Escalas Reais, Produtividade, OTs, Rehandles e Forecast

**Data:** 07/08/2026

A v0.19.0 aprofunda a Central de Operações com cinco novas frentes funcionais e leva a plataforma a **48 laboratórios funcionais**, preservando a arquitetura front-end modular e publicação direta no GitHub Pages.

Foram adicionados os serviços `port-call-timeline.js`, `quay-productivity.js`, `maintenance-work-orders.js`, `rehandle-optimizer.js` e `operational-forecast.js`.

## Novos laboratórios

1. **Escala Portuária — ETB / ATB / ETD / ATD**
   - ETA revisado vindo da fila de fundeio;
   - ETB previsto a partir da janela de berço;
   - registro didático de ATB e ATD;
   - comparação de desvios entre estimado e realizado;
   - persistência local dos horários realizados.

2. **Produtividade por Navio e STS**
   - registro de movimentos e minutos ativos;
   - cálculo de movimentos/h por navio;
   - cálculo de movimentos/h por STS;
   - comparação com forecast didático de recursos.

3. **Ordens de Trabalho e Horímetro**
   - horímetro persistente por equipamento;
   - preventiva didática por intervalo de horas;
   - criação automática de OTs próximas do vencimento;
   - estados aberta → em execução → fechada;
   - iniciar OT retira o equipamento de operação;
   - encerrar OT devolve o ativo à disponibilidade.

4. **Estratégia de Pátio — Redução de Rehandles**
   - comparação entre pilha original e estratégias de pré-estivagem;
   - agrupamento por sequência de saída;
   - alvo pré-estivado no topo;
   - contabilização de rehandles evitados;
   - resultado agregado alimenta o estado vivo.

5. **Previsão Operacional — Próximas 6 horas**
   - cenário what-if de variação de chegadas rodoviárias;
   - indisponibilidade adicional de STS;
   - projeção de fila terrestre;
   - projeção de ocupação de pátio;
   - estimativa didática de fundeio;
   - classificação de risco controlado / atenção / alto.

## Terminal Live State v019

O `terminal-live-state.js` migra de `v018` para `v019`, preservando os dados anteriores e adicionando:
- `vesselCalls`;
- `productivity`;
- `workOrders`;
- `optimization`;
- `forecast`.

## Central de Operações

A Central passa a exibir também:
- desvio médio ETB → ATB;
- produtividade observada de STS;
- OTs abertas e de alta prioridade;
- risco da previsão de 6 horas;
- atalhos diretos para os cinco novos laboratórios.

O `terminal-alarm-manager.js` também passa a derivar:
- atraso médio de atracação;
- produtividade de cais abaixo da faixa didática;
- backlog/prioridade de OTs;
- risco operacional projetado.

## Princípios mantidos

- 100% front-end;
- GitHub Pages sem build obrigatório;
- módulos independentes;
- Event Bus;
- estado persistente local;
- Q0–Q4 + AUTO;
- Asset Manager;
- 36 GLBs locais com LOD;
- fallback leve;
- lógica pedagógica separada da fidelidade gráfica.

## Próximas prioridades após v0.19

- work orders com peças/causas/MTTR/MTBF didáticos;
- produtividade por hatch/bay e por janela;
- previsão de fila de fundeio com dependência explícita de ETB/ATB;
- planejamento de recursos por turno;
- custo didático de rehandles e indisponibilidade;
- histórico comparativo entre previsão e realizado;
- cenários de recuperação operacional na Central de Operações.


---

# v0.20.0 — Confiabilidade, Recursos e Recuperação Operacional

**Data:** 07/08/2026  
**Base:** v0.19.0  
**Status:** implementada

A v0.20.0 amplia o LAB PORTOS 360 de **48 para 54 laboratórios funcionais** e adiciona uma camada de gestão orientada a confiabilidade e recuperação operacional.

## Novos serviços

- `reliability-metrics.js`: MTBF, MTTR, falhas abertas, indisponibilidade e análise de causas por equipamento.
- `spare-parts-inventory.js`: saldo, reserva, consumo, reposição e ponto mínimo de peças de manutenção.
- `hatch-bay-productivity.js`: produtividade observada por Hatch e Bay, com identificação de gargalos.
- `shift-resource-plan.js`: planejamento de capacidade por turno considerando STS, RTG, Reach Stacker, equipes e lanes do Gate.
- `forecast-vs-actual.js`: comparação entre forecast e realizado, com erro por fila, pátio e fundeio e acurácia didática.
- `recovery-planner.js`: comparação what-if de ações de recuperação quando a previsão indicar saturação.

## Novos laboratórios

1. **Confiabilidade — MTBF / MTTR e Causas**
2. **Estoque de Manutenção — Peças e Reposição**
3. **Produtividade por Hatch / Bay**
4. **Recursos por Turno — Capacidade e Demanda**
5. **Previsão × Realizado**
6. **Recuperação Operacional — Plano de Resposta**

## Central de Operações v0.20

A Central passa a consolidar também:

- MTBF e MTTR;
- falhas abertas;
- peças críticas e itens em atenção;
- produtividade por Hatch/Bay e gargalo atual;
- capacidade planejada por turno e áreas em pressão;
- acurácia média do forecast;
- resultado da última simulação de recuperação.

Novos alarmes derivados incluem falhas simultâneas, estoque crítico, gargalo de Hatch/Bay, plano de turno insuficiente, baixa aderência do forecast e previsão crítica sem plano de recuperação.

## Estado compartilhado

`terminal-live-state.js` migra para `terminal:live:v020`, preservando `v019`, e adiciona:

- `reliability`;
- `inventory`;
- `hatchProductivity`;
- `shiftResources`;
- `forecastAccuracy`;
- `recovery`.

## Princípio didático

MTBF, MTTR, custos, capacidades e faixas de alerta usados nos laboratórios são **valores didáticos** para treinamento e comparação. Não representam metas, procedimentos ou parâmetros universais de terminais reais.


---

## v0.21.0 — Manutenção conectada à operação — 08/08/2026

A plataforma passa a 61 laboratórios funcionais. A camada de manutenção agora conecta OTs, peças, equipes, janelas planejadas, confiabilidade por família, custo didático e impacto operacional. Novos serviços: `maintenance-material-links.js`, `planned-maintenance.js`, `reliability-family.js`, `maintenance-costs.js`, `maintenance-crews.js`, `failure-impact.js` e `recovery-advisor.js`. O estado vivo migra para v021 preservando v020. A Central passa a gerar recomendações educacionais e novos alarmes relacionados a materiais, equipes, orçamento e impacto de falhas. Valores de custo são fictícios e destinados somente à comparação de cenários didáticos.

---

## v0.22.0 — Prontidão, Agenda e Melhor Janela de Manutenção — 08/08/2026

A plataforma passa a **67 laboratórios funcionais**. A manutenção planejada ganha uma camada preventiva de decisão antes da execução: a OT pode ser bloqueada globalmente até que materiais, equipe e disponibilidade estejam validados; janelas futuras passam a ser vistas em calendário semanal; ativos recebem criticidade didática A/B/C; a disponibilidade é projetada por turno; o impacto acumulado das janelas é confrontado com berços/recursos; e a Central pode sugerir a janela de menor impacto nas próximas 168 horas.

### Novos serviços

- `maintenance-readiness.js`: prontidão obrigatória da OT e bloqueio por falta de peça, equipe ou disponibilidade.
- `maintenance-calendar.js`: calendário semanal sobre as janelas persistidas em `planned-maintenance.js`.
- `asset-criticality.js`: classes A/B/C por ativo usando consequência, redundância, confiabilidade e status.
- `future-availability.js`: projeção de disponibilidade por turno e por família de equipamento.
- `maintenance-program-impact.js`: impacto didático de janelas sobre ETD, produtividade, pátio e ferrovia.
- `maintenance-window-advisor.js`: ranking de horários candidatos e recomendação de menor impacto.

### Novos laboratórios

1. **Prontidão da OT — Peças, Equipe e Liberação**
2. **Calendário Semanal de Manutenção**
3. **Criticidade dos Ativos — Classes A / B / C**
4. **Disponibilidade Futura por Turno**
5. **Impacto da Manutenção na Programação**
6. **Melhor Janela de Manutenção — Recomendação**

### Regras consolidadas

- `maintenance-work-orders.js` passa a aceitar um *start guard*; quando a camada de prontidão está instalada, uma OT não pode iniciar por outra tela ignorando os pré-requisitos.
- A reserva de materiais é suficiente para liberar a prontidão; o laboratório de prontidão consome as peças ao iniciar a execução controlada.
- A criticidade é educacional e não substitui RCM/FMEA ou matriz de risco industrial.
- A recomendação de janela é baseada em regras didáticas: conflito de escala, impacto estimado, criticidade e preferência por períodos de menor pressão.

### Terminal Live State

O estado compartilhado migra de `v021` para `v022`, preservando os dados anteriores e adicionando:

- `maintenanceReadiness`;
- `maintenanceCalendar`;
- `assetCriticality`;
- `futureAvailability`;
- `maintenanceProgramImpact`;
- `maintenanceWindowAdvice`.

### Central e alarmes

A Central passa a mostrar OTs prontas/bloqueadas, janelas semanais, ativos classe A, disponibilidade mínima futura, impacto programado e a melhor janela recomendada. Alarmes adicionais cobrem OTs bloqueadas, ativo crítico indisponível, baixa disponibilidade futura e impacto elevado das janelas sobre o ETD.

---

## v0.23.0 — Gantt, Dependências, SLA e Decisão de Adiamento — 08/08/2026

A plataforma passa a **74 laboratórios funcionais**. A manutenção planejada ganha uma camada de sequenciamento e governança: as OTs podem possuir predecessoras; a prontidão passa a bloquear sucessoras enquanto dependências não estiverem concluídas; prioridades P1–P4 são calculadas por regras didáticas; o backlog pode envelhecer em relógio simulado; SLAs didáticos podem ser configurados por prioridade; o risco de atraso combina prazo, criticidade, dependências e prontidão; e um Gantt semanal confronta manutenção e escalas de navios. Um novo simulador compara duas janelas concorrentes e recomenda qual manutenção manter e qual adiar/reagendar.

### Novos serviços

- `maintenance-dependencies.js`: predecessoras/sucessoras, prevenção de ciclos e avaliação de liberação.
- `maintenance-priority.js`: ranking P1–P4 por prioridade, criticidade, horímetro, dependências e prontidão.
- `maintenance-backlog.js`: backlog aberto com relógio didático, idade e estado de prontidão.
- `maintenance-sla.js`: metas de prazo didático por prioridade, aderência, vencimento e proximidade do SLA.
- `maintenance-delay-risk.js`: risco consolidado de atraso por OT.
- `maintenance-gantt.js`: visão semanal integrada entre janelas de manutenção e escalas de navios/STS.
- `maintenance-deferral-advisor.js`: decisão didática de manter/adiar entre janelas concorrentes e busca de alternativa.

### Novos laboratórios

1. **Gantt Semanal — Manutenção × Navios**
2. **Dependências entre OTs — Predecessoras e Bloqueios**
3. **Prioridade Automática das OTs — P1 a P4**
4. **Backlog Planejado de Manutenção**
5. **SLA das OTs — Prazo e Aderência**
6. **Risco de Atraso das OTs**
7. **Qual Manutenção Adiar? — Decisão de Conflito**

### Regras consolidadas

- Dependências são validadas pelo núcleo e ciclos são rejeitados.
- `maintenance-readiness.js` inclui o fechamento das predecessoras como pré-requisito adicional.
- A priorização P1–P4 e os SLAs são **didáticos**, não substituindo políticas reais de manutenção ou contratos de serviço.
- O Gantt destaca sobreposição temporal e marca como crítica quando uma janela de STS colide com escala que utiliza aquele mesmo portêiner.
- O recomendador de adiamento combina urgência de manutenção, criticidade e impacto operacional; o resultado é um exercício de decisão, não recomendação industrial automática.

### Terminal Live State

O estado compartilhado migra de `v022` para `v023`, preservando os dados anteriores e adicionando:

- `maintenanceDependencies`;
- `maintenancePriorities`;
- `maintenanceBacklog`;
- `maintenanceSLA`;
- `maintenanceDelayRisk`;
- `maintenanceGantt`;
- `maintenanceDeferral`.

### Central e alarmes

A Central passa a mostrar OTs bloqueadas por dependência, quantidade de P1, backlog/envelhecimento, aderência de SLA, risco alto de atraso, conflitos críticos do Gantt e decisões de adiamento. Os alarmes incluem múltiplas P1, SLA violado, backlog envelhecido, risco alto e conflito manutenção × escala.

---

## v0.24.0 — Caminho Crítico, Capacidade e Nivelamento de Manutenção — 08/08/2026

A v0.24.0 amplia o LAB PORTOS 360 de 74 para 80 laboratórios funcionais e adiciona uma camada de planejamento de execução da manutenção. O objetivo é ensinar como dependências, duração, capacidade de equipe/oficina, causas de atraso e recursos compartilhados mudam a programação das ordens de trabalho.

### Novos serviços

- `maintenance-critical-path.js`: calcula rede de predecessoras, início/fim mais cedo, duração mínima teórica e caminho crítico das OTs abertas. A duração planejada de cada OT pode ser ajustada sem alterar o cadastro da ordem.
- `maintenance-capacity.js`: compara a carga planejada do backlog com horas disponíveis de equipes e boxes/oficinas nos turnos 06–14, 14–22 e 22–06.
- `maintenance-duration-performance.js`: registra duração realizada e calcula desvio em horas e percentual contra a duração planejada.
- `maintenance-delay-causes.js`: registra minutos de atraso por falta de peça, equipe, acesso/liberação, diagnóstico, prioridade operacional, condição ambiental ou outros, formando um Pareto didático.
- `maintenance-auto-scheduler.js`: cria um plano automático do backlog em um horizonte de 8/16/24 horas, ordenando por prioridade e prontidão e separando OTs bloqueadas ou fora da capacidade.
- `maintenance-resource-leveler.js`: redistribui OTs programadas entre lanes de equipe, verificando disponibilidade de materiais e horizonte, para reduzir conflitos simultâneos.

### Novos laboratórios

1. **Caminho Crítico das OTs** — rede de dependências, duração planejada, início/fim mais cedo e caminho crítico.
2. **Capacidade de Oficina e Equipes por Turno** — demanda × capacidade e pressão por turno.
3. **Duração Prevista × Realizada das OTs** — aderência da execução ao planejamento.
4. **Causas de Atraso das OTs** — registro e Pareto didático das causas.
5. **Programação Automática do Backlog** — scheduling por prioridade/prontidão em horizonte configurado.
6. **Nivelamento de Recursos — Equipes, Peças e Janelas** — distribuição das OTs para reduzir conflitos de recursos.

### Integração

O `terminal-live-state.js` migra de `v023` para `v024`, preservando dados anteriores e acrescentando `maintenanceCriticalPath`, `maintenanceCapacity`, `maintenanceDurationPerformance`, `maintenanceDelayCauses`, `maintenanceAutoScheduler` e `maintenanceResourceLeveler`. A Central de Operações exibe esses indicadores e a Central de Alarmes passa a detectar caminho crítico extenso, sobrecarga de capacidade, desvio de duração, atraso acumulado, OTs bloqueadas no scheduling e conflitos residuais após nivelamento.

A arquitetura continua front-end, persistente via armazenamento local, sem backend e compatível com GitHub Pages. Os valores de duração/capacidade são cenários didáticos configuráveis e não representam padrões universais de manutenção portuária.

---

## v0.25.0 — Execução Paralela, Técnicos, Lead Time e Emergências — 08/08/2026

A v0.25.0 amplia o LAB PORTOS 360 de 80 para **86 laboratórios funcionais** e acrescenta uma camada de execução do turno em granularidade de técnicos e materiais. O objetivo é mostrar que capacidade agregada de equipe não garante necessariamente a combinação de especialidades necessária no mesmo horário, e que lead time de peças e emergências podem obrigar a reprogramar o plano em andamento.

### Novos serviços

- `maintenance-skill-matrix.js`: requisitos por OT em Mecânica, Elétrica, Automação e perfil Multidisciplinar, com quantidade simultânea de técnicos.
- `technician-availability.js`: técnicos individuais, turnos, ausências, reservas e disponibilidade hora a hora.
- `material-lead-time.js`: pedidos didáticos de peças, lead time, ETA, recebimento automático e projeção de disponibilidade.
- `maintenance-parallel-execution.js`: scheduling paralelo considerando especialidades, disponibilidade de técnicos, materiais, predecessoras, duração e equipamento.
- `maintenance-emergency.js`: falha inesperada que cria OT corretiva prioritária, retira o ativo da operação e pode gerar reposição de peças.
- `maintenance-rescheduler.js`: comparação do plano antes/depois da emergência e reprogramação automática do restante do turno.

### Novos laboratórios

1. **Matriz de Especialidades por OT**.
2. **Disponibilidade de Técnicos — Hora a Hora**.
3. **Lead Time de Peças — Pedido e Chegada**.
4. **OTs em Paralelo — Técnicos e Especialidades**.
5. **Emergência de Manutenção — Interrupção do Turno**.
6. **Reprogramação Automática do Restante do Turno**.

### Regras consolidadas

- O planejamento paralelo usa técnicos individuais e especialidades, complementando o nivelamento agregado de equipes da v0.24.
- Técnicos multidisciplinares podem suprir uma especialidade no cenário didático, mas a plataforma explicita que competência/autorização real depende da organização e do procedimento aplicável.
- Materiais podem estar disponíveis imediatamente ou depender de um pedido com ETA; o relógio didático entrega automaticamente pedidos cujo lead time foi cumprido.
- Uma emergência cria OT corretiva de alta prioridade, altera o status do equipamento para falha e força a reavaliação do plano do turno.
- O início controlado de uma OT corretiva pode ocorrer com o equipamento em estado de falha, pois a própria falha é o motivo do reparo.
- A reprogramação compara posições anteriores e novas e identifica OTs movidas, adicionadas ou retiradas do horizonte.

### Terminal Live State

O estado compartilhado migra de `v024` para `v025`, preservando dados anteriores e adicionando:

- `maintenanceSkills`;
- `technicianAvailability`;
- `materialLeadTime`;
- `maintenanceParallel`;
- `maintenanceEmergency`;
- `maintenanceReschedule`.

### Central e alarmes

A Central passa a mostrar OTs multi-especialidade, técnicos disponíveis, pedidos com lead time, máximo de OTs simultâneas, emergência ativa e alterações da última reprogramação. Alarmes adicionais cobrem baixa disponibilidade horária de técnicos, múltiplos pedidos de peças em trânsito, OTs bloqueadas no plano paralelo, emergência ativa e OTs que saíram do horizonte após reprogramação.

Todos os tempos, quantidades e combinações de especialidades continuam **didáticos**, não constituindo dimensionamento industrial real de mão de obra ou estoque.

---

## v0.26.0 — Execução Minuto a Minuto, Despacho e Runtime do Turno — 08/08/2026

A v0.26.0 amplia o LAB PORTOS 360 de 86 para **92 laboratórios funcionais** e adiciona uma camada de execução temporal fina sobre o planejamento de manutenção já existente. O objetivo didático é mostrar que, depois de planejar e nivelar as OTs, ainda é necessário acompanhar progresso, pausas, movimentação de pessoas, chegada real de materiais e eventos inesperados ao longo do turno.

### Novos serviços

- `maintenance-execution-progress.js`: progresso percentual, tempo produtivo, tempo pausado e conclusão automática das OTs.
- `technician-transfer.js`: transferência de técnicos entre OTs e nova checagem de cobertura mínima por especialidade.
- `material-delivery-performance.js`: ETA previsto × recebimento efetivo de peças, atraso/antecipação e aderência.
- `technician-dispatcher.js`: escolha automática da próxima OT pronta pela prioridade e pela combinação de técnicos disponível.
- `maintenance-shift-runtime.js`: relógio de turno de 8 horas, despacho periódico, avanço das OTs, processamento de materiais e emergências pseudoaleatórias controláveis.

### Novos laboratórios

1. **Progresso das OTs — Execução Minuto a Minuto**.
2. **Pausa e Retomada da OT**.
3. **Transferência de Técnicos entre OTs**.
4. **Chegada de Peças — Previsto × Real**.
5. **Despacho Automático do Próximo Técnico Disponível**.
6. **Simulador de Turno — Minuto a Minuto**.

### Regras consolidadas

- O início da OT pode ser liberado por equipe agregada ou por cobertura granular de técnicos compatível com a matriz de especialidades.
- O progresso separa tempo de calendário, tempo produtivo e pausa.
- Transferir um técnico pode forçar pausa automática da OT de origem quando a cobertura mínima deixa de ser atendida.
- O lead time agora aceita um horário real de chegada diferente do ETA planejado, permitindo calcular aderência.
- O despacho automático respeita prioridade, materiais reservados/consumidos, predecessoras e disponibilidade por especialidade.
- O simulador do turno usa emergências pseudoaleatórias configuráveis por probabilidade, intervalo e seed. É um modelo educacional determinístico quando os parâmetros são repetidos.

### Terminal Live State

O estado compartilhado migra de `v025` para `v026`, preservando os dados anteriores e adicionando `maintenanceExecution`, `technicianTransfer`, `materialDelivery`, `technicianDispatch` e `maintenanceShiftRuntime`.

### Central e alarmes

A Central passa a mostrar avanço médio das OTs, quantidade em execução/pausa, transferências de técnicos, aderência de peças, despachos realizados e relógio do runtime. Alarmes adicionais cobrem múltiplas OTs pausadas, atrasos recorrentes de materiais, bloqueios de despacho e transferências que deixam a OT de origem sem cobertura.

Todos os tempos, probabilidades, especialidades e regras continuam **didáticos**, não substituindo procedimentos reais de manutenção, segurança, dimensionamento de pessoal ou gestão portuária.


---

## v0.27.0 — Continuidade do Turno, ETA, Handover e Replay — 08/08/2026

A v0.27.0 amplia o LAB PORTOS 360 de 92 para **100 laboratórios funcionais** e fecha uma camada de continuidade operacional sobre o runtime minuto a minuto. O foco passa a ser estimar término, acompanhar desempenho humano didático, transferir informação entre turnos e reconstruir o que aconteceu durante a execução.

### Novos serviços

- `maintenance-eta.js`: ETA restante das OTs considerando progresso, produtividade da equipe e fator didático de fadiga.
- `technician-productivity.js`: minutos produtivos, conclusões e índice didático por técnico/equipe.
- `shift-handover.js`: passagem estruturada de OTs em execução/pausa, materiais, emergência e observações.
- `dispatch-queue.js`: fila em tempo real por prontidão, prioridade, bloqueio e espera estimada.
- `maintenance-interruptions.js`: interrupções por segurança, LOTO, permissão de trabalho, condição ambiental ou liberação operacional, pausando de fato a OT.
- `overtime-manager.js`: autorizações de extensão de jornada integradas à disponibilidade hora a hora.
- `fatigue-model.js`: modelo estritamente didático de carga de trabalho/fadiga.
- `shift-replay.js`: linha do tempo persistente de execução, despacho, materiais, transferências, interrupções, emergências e handover.

### Novos laboratórios

1. **Tempo Restante da OT — ETA Dinâmico**.
2. **Produtividade por Técnico e Equipe**.
3. **Handover entre Turnos — Passagem de Serviço**.
4. **Fila de Despacho — Tempo Real**.
5. **Interrupções — Segurança e Liberação Operacional**.
6. **Horas Extras — Extensão Controlada do Turno**.
7. **Fadiga Didática — Carga de Trabalho e Risco**.
8. **Replay do Turno — Linha do Tempo Completa**.

### Regras consolidadas

- Hora extra autorizada amplia a disponibilidade do técnico fora do turno normal dentro da janela explicitamente aprovada.
- Interrupção de segurança pausa a execução real da OT e só permite retomada após liberação.
- ETA usa o saldo produtivo da OT e fatores educacionais de ritmo; não representa previsão industrial certificada.
- Handover registra o estado do turno sem encerrar automaticamente as OTs.
- Replay é local e registra eventos da simulação para análise posterior.
- O modelo de fadiga é exclusivamente pedagógico e **não possui finalidade médica, ergonômica, trabalhista ou de segurança ocupacional real**.

### Terminal Live State

O estado compartilhado migra de `v026` para `v027`, preservando os dados anteriores e adicionando `maintenanceETA`, `technicianProductivity`, `shiftHandover`, `dispatchQueue`, `maintenanceInterruptions`, `overtime`, `fatigue` e `shiftReplay`.

### Central e alarmes

A Central passa a exibir ETA máximo das OTs, índice médio de produtividade, handovers pendentes, fila de despacho, interrupções ativas, horas extras, fadiga didática e quantidade de eventos do replay. Alarmes adicionais cobrem ETA sob risco, fila de despacho bloqueada, interrupção de segurança ativa, horas extras elevadas no cenário, fadiga didática alta e múltiplos handovers pendentes.

---

## DIRETRIZ ESTRATÉGICA — REBALANCEAMENTO PARA OPERAÇÃO PORTUÁRIA PRÁTICA — 08/08/2026

A partir desta diretriz, o crescimento do LAB PORTOS 360 deve priorizar novamente o **núcleo profissional do Técnico em Portos**. A trilha de manutenção desenvolvida nas versões anteriores permanece válida e reutilizável, porém passa a ser uma **área complementar**. As próximas ondas de desenvolvimento devem concentrar a maior parte dos novos laboratórios em navio, terminal, acesso terrestre, caminhões/carretas, Gate, balança, pátio, carga/descarga, importação, exportação, despacho aduaneiro, documentação, destinos logísticos e estudos reais de Paranaguá, Santos e Itapoá.

### Princípio pedagógico

Cada tema relevante deve produzir uma experiência prática. Evitar cards puramente informativos. O estudante deve **identificar, conferir, escolher, movimentar, sequenciar, calcular, liberar/reter, localizar, planejar ou tomar decisão**.

### Macrofluxo portuário que deve orientar os novos módulos

```text
ORIGEM / EXPORTADOR
        ↓
DOCUMENTAÇÃO COMERCIAL E FISCAL
        ↓
TRANSPORTE RODOVIÁRIO / FERROVIÁRIO
        ↓
AGENDAMENTO / PRÉ-GATE
        ↓
GATE / OCR / CONFERÊNCIA
        ↓
BALANÇA / PESAGEM / VGM
        ↓
INSPEÇÃO / SCANNER / ADUANA (quando aplicável)
        ↓
PÁTIO / ENDEREÇAMENTO / REEFER / DG / OOG
        ↓
PLANEJAMENTO DE ESTIVA
        ↓
CAIS / PORTÊINER / SPREADER
        ↓
NAVIO
        ↓
VIAGEM MARÍTIMA / DESTINO

IMPORTAÇÃO = fluxo inverso, acrescido de chegada, descarga, presença/controle de carga, despacho aduaneiro, liberação e retirada terrestre.
```

## ONDA A — NAVIO E OPERAÇÃO DE CAIS

Prioridade alta para laboratórios gráficos e operacionais:

1. **Anatomia do Navio Porta-Contêineres 3D** — proa, popa, boreste, bombordo, convés, porões, hatch covers, lashing bridges, superestrutura e praça de máquinas como referências didáticas.
2. **Chegada do Navio ao Porto** — ETA, fundeio, praticagem, rebocadores, janela de berço e preparação para atracação.
3. **Atracação e Amarração** — cabeços, defensas, linhas de amarração e zonas de segurança em simulação didática.
4. **Preparação do Berço** — equipamentos, faixa de cais, equipe, segurança e liberação operacional.
5. **Abertura/Fechamento de Hatch Covers** — sequência e áreas de risco.
6. **Descarga de Contêiner Navio → Cais** — ciclo completo do portêiner.
7. **Embarque Cais → Navio** — sequência inversa com validação do slot de destino.
8. **Tally de Carga/Descarga** — conferir unidade prevista × efetivamente movimentada.
9. **Lashing/Unlashing** — cones, barras, twistlocks e sequência segura didática.
10. **Reefer a Bordo** — posição energizada, conexão e monitoramento.
11. **OOG/DG no Navio** — posições especiais e restrições didáticas.
12. **Plano de Estiva do Navio** — Hatch → Bay → Row → Tier, porão × convés.
13. **Sequenciamento de Portêineres** — escolher ordem de trabalho por hatch/bay.
14. **Turnaround do Navio** — chegada → operação → partida, com tempo total e gargalos.
15. **Ponte de Comando 360 Educacional** — instrumentos e referências visuais sem simular navegação profissional certificada.
16. **Convés do Navio 360** — tour guiado de áreas e equipamentos.

## ONDA B — TERMINAL DE CONTÊINERES NA PRÁTICA

17. **Fluxo Completo do Terminal** — entrada, Gate, balança, inspeção, pátio, cais e saída.
18. **Pré-Gate / Agendamento de Caminhão**.
19. **Gate OCR** — placa, contêiner, lacre, peso e imagens da unidade.
20. **Gate Manual de Contingência** — quando OCR/biometria/sistema estiver indisponível.
21. **EIR / Interchange — Recebimento e Entrega do Contêiner**.
22. **Balança Rodoviária — Entrada e Saída**.
23. **Pesagem Bruta/Tara/Líquida**.
24. **VGM — Conferência e Divergência**.
25. **Scanner de Contêineres — Fluxo Operacional Didático**.
26. **Inspeção Física em Área Designada**.
27. **Pátio de Cheios — Importação**.
28. **Pátio de Cheios — Exportação**.
29. **Depot/Pátio de Vazios**.
30. **Pátio Reefer**.
31. **Pátio DG**.
32. **Pátio OOG**.
33. **Endereçamento Block/Bay/Row/Tier aplicado à operação real do módulo**.
34. **Pré-stacking para Navio**.
35. **Rehandles e Remanejamentos**.
36. **Entrega de Importação no Gate Out**.
37. **Recebimento de Exportação no Gate In**.
38. **Controle de Lacre na Entrada e Saída**.
39. **Sala de Controle/TOS Educacional** — ordens, exceções e prioridades.
40. **Operação em Contingência do Terminal** — sistema indisponível, fila e processamento manual didático.

## ONDA C — CAMINHÕES E CARRETAS

Criar showroom 3D + situações práticas de seleção do conjunto apropriado:

41. **Cavalo Mecânico 4x2/6x2/6x4 — diferenças visuais e aplicação didática**.
42. **Chassi Porta-Contêiner 20 pés**.
43. **Chassi Porta-Contêiner 40 pés**.
44. **Chassi extensível 20/40 pés**.
45. **Semirreboque porta-contêiner / skeletal trailer**.
46. **Carreta Sider/Baú — carga geral**.
47. **Carreta Refrigerada — carga frigorificada**.
48. **Carreta Graneleira/Basculante — granéis**.
49. **Carreta Tanque — líquidos a granel**.
50. **Prancha/Lowbed — carga de projeto/OOG**.
51. **Cegonha — veículos**.
52. **Rodotrem/Bitrem — aplicação logística didática quando pertinente**.
53. **Inspeção Pré-Gate do Conjunto** — placa, pneus, luzes, chassi, lacres e documentação.
54. **Acoplamento/Desacoplamento avançado** — quinta roda, pino-rei, linhas, pernas de apoio.
55. **Posicionamento na Balança** — entrada, parada, pesagem e liberação.
56. **Posicionamento sob RTG/Reach Stacker/Portêiner**.
57. **Fila e Janela de Atendimento** — caminhão atrasado, adiantado ou sem agendamento.

## ONDA D — IMPORTAÇÃO PASSO A PASSO

Criar uma jornada completa animada e módulos independentes:

58. **Compra Internacional e Dados da Operação** — origem, fornecedor, mercadoria e destino.
59. **Commercial Invoice — Conferência**.
60. **Packing List — Conferência**.
61. **Bill of Lading — Master/House em cenário educacional**.
62. **Arrival Notice / Aviso de Chegada — interpretação**.
63. **Duimp — estrutura e fluxo didático**.
64. **LPCO na Importação — quando aplicável ao cenário**.
65. **Anexação/Conferência de Documentos**.
66. **Parametrização e Conferência Aduaneira** — verde e canais com conferência em cenários didáticos, sempre datados e vinculados à fonte oficial vigente.
67. **Conferência Documental**.
68. **Conferência Física**.
69. **Divergência de Peso/Quantidade/Classificação em cenário fictício**.
70. **Desembaraço/Liberação — fluxo didático**.
71. **Descarga do Navio e Disponibilização no Terminal**.
72. **Pátio de Importação — localizar unidade**.
73. **Emissão/Conferência de NF-e de Entrada em cenário didático**.
74. **Contratação do Transporte Nacional — CT-e/DACTE**.
75. **MDF-e/DAMDFE — vínculo da viagem terrestre quando aplicável**.
76. **Gate Out de Importação**.
77. **Entrega no Importador / Destino Final**.
78. **Importação com Pendência — missão completa**.
79. **Mesa do Despachante Aduaneiro — Importação** — sequência de documentos, pendências e tomadas de decisão.

## ONDA E — EXPORTAÇÃO PASSO A PASSO

80. **Pedido de Exportação e Destino Internacional**.
81. **Commercial Invoice de Exportação**.
82. **Packing List de Exportação**.
83. **NF-e de Exportação — conferência didática**.
84. **Booking com Armador**.
85. **Escolha do Contêiner adequado** — 20/40/HC/Reefer/Open Top/Flat Rack.
86. **Retirada do Vazio no Depot**.
87. **Estufagem do Contêiner** — distribuição de carga e conferência.
88. **Lacre da Unidade**.
89. **VGM antes do embarque**.
90. **DU-E — fluxo didático**.
91. **LPCO de Exportação — quando aplicável**.
92. **Transporte até o Terminal** — NF-e/CT-e/MDF-e em cenário.
93. **Gate In de Exportação**.
94. **Pátio de Pré-Embarque**.
95. **Cut-off — unidade dentro/fora da janela**.
96. **Planejamento de Estiva**.
97. **Embarque no Navio**.
98. **Confirmação de Embarque e Documentação de Transporte Marítimo**.
99. **Partida e Destino Internacional**.
100. **Exportação com Pendência — missão completa**.
101. **Mesa do Despachante Aduaneiro — Exportação**.

## ONDA F — DOCUMENTOS PORTUÁRIOS E LOGÍSTICOS ANIMADOS

Criar um “Documento Vivo”: ao clicar em um campo, mostrar de onde ele veio, para onde vai e qual etapa utiliza aquele dado.

102. NF-e / DANFE.
103. CT-e / DACTE.
104. MDF-e / DAMDFE.
105. Commercial Invoice.
106. Packing List.
107. Bill of Lading.
108. Booking.
109. EIR / interchange.
110. VGM.
111. Duimp.
112. DU-E.
113. LPCO.
114. Arrival Notice.
115. Ordem de carregamento/descarga didática.
116. Relatório de inspeção do contêiner.
117. Registro de lacre.
118. Manifesto/lista de carga em cenário educacional.

## ONDA G — DESTINOS E ROTAS LOGÍSTICAS

119. **Origem → Porto → Destino** em mapa didático.
120. **Importação Ásia → Santos → São Paulo interior**.
121. **Importação Ásia → Itapoá → Sul do Brasil**.
122. **Exportação Paraná → Paranaguá → destino marítimo**.
123. **Exportação via ferrovia → terminal → navio**.
124. **Rodoviário × Ferroviário × Cabotagem** — comparação de fluxo, não de preço real.
125. **Transbordo (transshipment)**.
126. **Porto de origem × porto de escala × porto de destino**.
127. **Hub e feeder em cenário didático**.
128. **Container tracking educacional** — origem, gate in, loaded, departed, discharged, gate out, delivered.

## ONDA H — PORTOS REAIS: PARANAGUÁ, SANTOS E ITAPOÁ

A plataforma deve ter uma área própria **“Portos do Brasil — Operação Comparada”**, com dados oficiais datados e sem assumir que infraestrutura/números permanecem constantes.

### Paranaguá / Paraná

129. **Mapa Operacional Educacional de Paranaguá** — cais, acessos, áreas, ferrovia e terminais relevantes.
130. **Terminal de Contêineres de Paranaguá — Estudo de Caso**.
131. **Fluxo rodoviário para Paranaguá**.
132. **Fluxo ferroviário e intermodal de Paranaguá**.
133. **Reefer/contêineres no contexto de Paranaguá**.
134. **Missão Exportação via Paranaguá**.
135. **Missão Importação via Paranaguá**.

### Santos / São Paulo

136. **Mapa do Complexo Portuário de Santos**.
137. **BTP — estudo de caso**.
138. **Tecon Santos/Santos Brasil — estudo de caso**.
139. **DP World Santos — estudo de caso**.
140. **Ferrovia no Porto de Santos — fluxo intermodal didático**.
141. **Fila de navios / programação / atracação em cenário inspirado em Santos**.
142. **Missão Importação via Santos**.
143. **Missão Exportação via Santos**.

### Itapoá / Santa Catarina

144. **Mapa Operacional Educacional do Porto Itapoá**.
145. **Gate automatizado/OCR — estudo de caso**.
146. **Fluxo caminhão → Gate → pátio**.
147. **Pátio de contêineres — estudo de caso**.
148. **Reefer — estudo de caso Itapoá**.
149. **Missão Importação via Itapoá**.
150. **Missão Exportação via Itapoá**.

## NOVA PRIORIDADE DE DESENVOLVIMENTO

A próxima onda de versões deve obedecer aproximadamente a esta distribuição:

- **50%** novos laboratórios de operação portuária prática: Gate, balança, caminhões, pátio, cais, navio e equipamentos.
- **25%** comércio exterior: importação, exportação, despacho aduaneiro, documentos e destinos.
- **15%** estudos de caso e ambientes inspirados em portos brasileiros, principalmente Paranaguá, Santos e Itapoá.
- **10%** manutenção/gestão avançada e evolução da infraestrutura técnica já existente.

A manutenção continua importante, mas não deve novamente consumir a maior parte das próximas versões.

## PRÓXIMA ONDA RECOMENDADA — v0.28.x

Priorizar primeiro os módulos que criam a espinha dorsal prática:

1. **Showroom 3D de Caminhões e Carretas Portuárias**.
2. **Pré-Gate + Agendamento**.
3. **Gate OCR Completo**.
4. **Balança Entrada/Saída + VGM**.
5. **EIR — Recebimento/Entrega de Contêiner**.
6. **Fluxo de Importação — Jornada Animada**.
7. **Fluxo de Exportação — Jornada Animada**.
8. **Mesa do Despachante Aduaneiro**.
9. **Documentos Vivos — NF-e / CT-e / MDF-e / BL / Invoice / Packing List / Duimp / DU-E / LPCO**.
10. **Navio Porta-Contêineres — Anatomia e Operação 3D**.
11. **Descarga Navio → Cais → Pátio**.
12. **Embarque Pátio → Cais → Navio**.
13. **Paranaguá — Operação Completa**.
14. **Santos — Operação Completa**.
15. **Itapoá — Operação Completa**.

Essa onda deve utilizar a infraestrutura técnica já construída — Event Bus, Asset Manager, Graphics Adapter, Terminal Live State, Session Recorder, missões, cenários, Q0–Q4 e LOD — em vez de criar um novo núcleo.

---

# v0.28.0 — OPERAÇÃO PORTUÁRIA PRÁTICA
**Data:** 08/08/2026

A v0.28.0 inaugura oficialmente a reorientação do roadmap para o núcleo profissional do **Técnico em Portos**. A manutenção avançada permanece preservada como trilha complementar, mas a expansão volta a priorizar transporte rodoviário, Gate, pesagem, EIR, importação/exportação, documentação, navio, cais, pátio, destinos e estudos regionais.

## Marco da versão

- Plataforma ampliada de **100 para 113 laboratórios funcionais**.
- Criado `practical-operation-state.js` para manter uma mesma unidade ao longo de vários laboratórios.
- Criado `road-vehicle-kit.js` para veículos/implementos procedurais 3D.
- Criado `customs-process.js` para jornadas ordenadas de importação e exportação.
- Criado `live-documents.js` para documentos vivos e rastreabilidade dos campos.
- Criado `regional-port-missions.js` para missões práticas de Paranaguá, Santos e Itapoá.

## Novos laboratórios

101. **Tipos de Caminhões e Carretas — Showroom 3D** — porta-contêiner 20', porta-contêiner 40', chassi extensível, sider/baú, refrigerada, graneleira, tanque, prancha/lowbed e cegonha.
102. **Pré-Gate — Agendamento, Booking e Documentos** — valida janela, booking e pacote documental antes do Gate.
103. **Gate OCR — Placa, Contêiner e Lacre** — leitura automática simulada e reconciliação de divergências.
104. **Balança Entrada/Saída + VGM** — peso bruto do conjunto, tara do cavalo/chassi e massa da unidade.
105. **EIR — Recebimento e Entrega da Unidade** — condição, lacre, ressalva e transferência de responsabilidade.
106. **Jornada Animada de Importação — Navio ao Importador** — chegada, documentos, processo aduaneiro, conferência/liberação, agendamento/Gate e entrega.
107. **Jornada Animada de Exportação — Exportador ao Navio** — booking, documentos, estufagem/lacre, VGM, processo aduaneiro, Gate/pátio e embarque.
108. **Mesa do Despachante Aduaneiro — Casos Didáticos** — divergências documentais, lacre e decisão entre prosseguir, reconciliar ou reter.
109. **Documentos Vivos — Origem e Destino dos Dados** — B/L, Invoice, Packing List, NF-e, CT-e, MDF-e e processo aduaneiro com rastreabilidade dos campos.
110. **Descarga Prática — Navio → Cais → Pátio** — ciclo 3D simplificado com navio, portêiner, veículo interno e pátio.
111. **Embarque Prático — Pátio → Cais → Navio** — fluxo inverso com liberação, cais, spreader e navio.
112. **Roteamento da Carga — Destinos e Modais** — escolhas entre rodovia, ferrovia/intermodal, terminal e destino final.
113. **Paranaguá, Santos e Itapoá — Missões Práticas** — cenários regionais ligados a Reefer, Gate/OCR, pátio, ferrovia e cais.

## Estado compartilhado da operação

O `PracticalOperationState` passa a guardar, entre outros:

```text
operationId
direction: importacao/exportacao
port
containerNo
sealExpected / sealRead
booking
plate / driver
truckType / trailerType
grossWeightKg
tareVehicleKg
tareChassisKg
vgmDeclaredKg
destination
steps:
  preGate
  ocr
  weighing
  eir
  customs
  yard
  quay
  vessel
  delivery
```

A intenção é que a mesma unidade possa ser trabalhada em vários laboratórios sem reiniciar a história a cada tela.

## Diretriz pedagógica consolidada

A partir desta versão, a prioridade das próximas ondas continua sendo:

- operação prática do terminal;
- comércio exterior passo a passo;
- transporte rodoviário e intermodal;
- documentos conectados à operação;
- navio/cais/pátio;
- estudos de Paranaguá, Santos e Itapoá;
- manutenção como trilha complementar.

## Próximas prioridades sugeridas — v0.29.x

1. Navio porta-contêineres — anatomia externa/interna 3D mais detalhada.
2. Tipos de navios: porta-contêiner, graneleiro, tanque, Ro-Ro e carga geral.
3. Tipos de terminais portuários e especializações.
4. Gate In × Gate Out completos com fila, OCR, EIR e pesagem encadeados.
5. Depot de vazio e retirada/devolução de contêiner.
6. Estufagem/desova 3D e distribuição de carga.
7. Lashing/unlashing e peação.
8. Conferência aduaneira em cenários documentais/físicos.
9. Missão completa de importação via Paranaguá.
10. Missão completa de importação via Santos.
11. Missão completa de importação via Itapoá.
12. Missões equivalentes de exportação.

# v0.29.0 — OPERAÇÃO PORTUÁRIA PRÁTICA II

A v0.29.0 aprofunda a onda prática iniciada na v0.28. A plataforma passa de **113 para 124 laboratórios funcionais**, com foco em navio, tipos de terminal, Gate In/Out, depot de vazios, ciclo completo do contêiner, estufagem/desova, lashing/unlashing e missões regionais completas de importação/exportação.

## Novos serviços

- `vessel-anatomy-kit.js` — modelo procedural de navio porta-contêineres e comparador didático de tipos de navios.
- `gate-cycle.js` — reconciliação Gate In/Gate Out de placa, contêiner, lacre, agendamento e documentos.
- `empty-depot.js` — estoque didático, reserva, retirada e devolução de contêineres vazios.
- `container-cycle.js` — ciclo completo da unidade do vazio à devolução.
- `cargo-handling-process.js` — estufagem, desova e lashing/unlashing.
- `regional-trade-missions.js` — jornadas educacionais de importação e exportação para Paranaguá, Santos e Itapoá.

## Novos laboratórios — 114 a 124

114. **Anatomia do Navio Porta-Contêineres — 3D** — proa, popa, bombordo, boreste, passadiço, hatch covers, convés e lashing bridges.
115. **Tipos de Navios Comerciais — Comparador 3D** — porta-contêineres, graneleiro, navio-tanque, Ro-Ro e multipropósito.
116. **Tipos de Terminais Portuários** — contêineres, granel sólido, granel líquido, Ro-Ro e multipropósito.
117. **Gate In × Gate Out — Ciclo Completo** — reconciliação de veículo, unidade, lacre, janela e documentos.
118. **Depot de Vazios — Estoque, Retirada e Devolução**.
119. **Ciclo do Contêiner — Retirada, Uso e Devolução**.
120. **Estufagem 3D — Distribuição, Peso e Lacre**.
121. **Desova 3D — Conferência e Retirada da Carga**.
122. **Lashing / Unlashing — Travamento da Unidade**.
123. **Importação Completa — Paranaguá, Santos e Itapoá**.
124. **Exportação Completa — Paranaguá, Santos e Itapoá**.

## Integração operacional

A mesma unidade continua sendo preservada pelo `PracticalOperationState`. Os novos serviços acrescentam camadas paralelas de Gate, depot, ciclo da unidade e movimentação da carga, permitindo que futuras versões conectem automaticamente uma missão a múltiplos laboratórios sem reiniciar o cenário.

## Diretriz

- manter a operação portuária prática como prioridade;
- aumentar visualização 3D de navio, terminal, Gate, pátio e carga;
- aprofundar importação/exportação com rastreabilidade documental;
- usar Paranaguá, Santos e Itapoá como estudos de caso educacionais, sem cristalizar procedimentos locais não verificados;
- manter manutenção avançada como trilha complementar.

## Próxima onda sugerida — v0.30.x

1. Caminhão chegando fisicamente ao Gate em cena 3D com semáforo/cancela/OCR.
2. Balança rodoviária 3D com entrada e saída do conjunto.
3. Pátio de triagem / staging de caminhões.
4. Depot de vazios 3D com Reach Stacker.
5. Estufagem/desova com empilhadeira/paleteira e sequência de volumes.
6. Cargas especiais: Reefer, OOG, Flat Rack, Open Top e perigosas em rotas práticas.
7. Consolidação/desconsolidação e CFS/armazém.
8. Booking/cut-off/no-show/rollover na exportação.
9. Demurrage/detention/storage apenas como conceitos didáticos configuráveis, sem valores reais.
10. Missão integrada única que atravesse vários laboratórios mantendo a mesma unidade.


# v0.30.0 — OPERAÇÃO PORTUÁRIA PRÁTICA III — AMBIENTES 3D CONECTADOS

A v0.30.0 amplia a plataforma de **124 para 132 laboratórios funcionais** e transforma processos práticos já existentes em ambientes 3D/visuais conectados. O foco permanece na formação do Técnico em Portos, com manutenção avançada como trilha complementar.

## Novos serviços

- `truck-staging.js` — fila, vagas de staging, chamada ao Gate e liberação de caminhões.
- `cfs-warehouse.js` — recebimento, armazenagem, picking e ocupação por zona do CFS.
- `special-cargo-process.js` — requisitos didáticos para carga geral, Reefer, OOG, DG e carga de projeto.
- `continuous-port-mission.js` — missão de importação/exportação ponta a ponta com a mesma unidade e pré-requisitos ordenados.
- `visual-port-practical-kit.js` — componentes 3D procedurais reutilizáveis: portal OCR, cancela, semáforo, balança, empilhadeira e armazém.
- `practical-operation-state.js` migrou para `practical-operation:v030`, preservando o estado anterior e acrescentando `staging`, `depot`, `stuffing` e `warehouse` ao fluxo compartilhado.

## Novos laboratórios — 125 a 132

125. **Gate 3D — Caminhão, Cancela, OCR e Semáforo**.
126. **Balança Rodoviária 3D — Entrada, Tara e VGM**.
127. **Staging de Caminhões — Fila, Vagas e Chamada**.
128. **Depot 3D — Reach Stacker e Pilhas de Vazios**.
129. **Empilhadeira 3D — Estufagem e Desova no CFS**.
130. **CFS / Armazém — Recebimento, Armazenagem e Picking**.
131. **Cargas Especiais — OOG, DG, Reefer e Projeto**.
132. **Uma Unidade, Uma Jornada — Operação Ponta a Ponta**.

## Fluxo contínuo ampliado

A mesma unidade pode agora carregar contexto entre depot, estufagem, Pré-Gate, staging, OCR, balança, EIR, CFS, processo aduaneiro, pátio, cais, navio e destino. A missão integrada valida a ordem das etapas e pode ser reiniciada como exportação ou importação.

## Diretriz para a próxima onda

A próxima evolução deve continuar priorizando prática operacional, com candidatos como booking/cut-off/no-show/rollover, pátio de triagem 3D mais completo, inspeção física/aduaneira visual, cargas OOG em Flat Rack/Open Top, operação Reefer conectada à jornada, armazéns especializados e missões ponta a ponta específicas por Paranaguá, Santos e Itapoá.


# v0.31.0 — OPERAÇÃO PORTUÁRIA PRÁTICA IV — BOOKING, GATE MULTI-LANE, ADUANA, OOG, REEFER E MISSÕES REGIONAIS

A v0.31.0 amplia a plataforma de **132 para 141 laboratórios funcionais** e continua a mudança de foco para o núcleo prático do Técnico em Portos. A manutenção avançada permanece disponível, mas esta onda concentra o crescimento em operação de exportação/importação, Gate, aduana, CFS, contêineres especiais, cadeia Reefer e jornadas regionais.

## Novos serviços
- `booking-cutoff.js`: booking, relógio, cut-off, no-show e rollover.
- `multi-lane-gate.js`: quatro lanes, fila, capacidade e retenções usando a validação já existente do Gate.
- `customs-inspection-visual.js`: inspeção documental, scanner e física.
- `special-container-operations.js`: Open Top, Flat Rack, OOG e Reefer.
- `reefer-journey.js`: sequência contínua do booking ao embarque com energia/temperatura.
- `cfs-advanced-operations.js`: docas, recebimento, put-away e picking integrado ao CFS existente.
- `regional-continuous-missions.js`: missões contínuas educacionais por porto.

## Novos laboratórios — 133 a 141
133. **Booking → Cut-off → No-show → Rollover**.
134. **Gate 3D — Múltiplas Lanes e Fila Animada**.
135. **Inspeção Física / Aduaneira Visual**.
136. **Open Top / Flat Rack / OOG — Planejamento 3D**.
137. **Reefer Integrado — Da Estufagem ao Navio**.
138. **CFS Avançado — Docas, Put-away e Picking**.
139. **Paranaguá — Missão Ponta a Ponta**.
140. **Santos — Missão Ponta a Ponta**.
141. **Itapoá — Missão Ponta a Ponta**.

## Integrações
- `PracticalOperationState` migra para `practical-operation:v031`, preservando v030/v028 e adicionando `booking`, `inspection` e `reefer` aos passos compartilhados.
- `ContinuousPortMission` migra para `practical:continuous-mission:v031`, preservando v030 e adicionando Booking e Inspeção às jornadas.
- As missões regionais abrem os laboratórios reais da plataforma e sincronizam o progresso pelo estado compartilhado.
- Cenários de Paranaguá, Santos e Itapoá continuam explicitamente educacionais/configuráveis, sem congelar procedimento oficial atual.

# v0.32.0 — RENDERIZAÇÃO ADAPTATIVA, BENCHMARK E REALISMO PROGRESSIVO

A v0.32.0 foi priorizada antes da próxima expansão operacional para consolidar a infraestrutura gráfica da plataforma. O objetivo é permitir que o LAB PORTOS 360 rode em celulares, notebooks, desktops e projetores com capacidades muito diferentes sem manter experiências 3D separadas por dispositivo.

## Configuração gráfica legível

A interface não deve apresentar Q1/Q2/Q3/Q4 como escolha principal para o usuário. Esses códigos permanecem apenas internamente para compatibilidade com os módulos antigos. As opções visíveis são:

- **Automático** — usa a recomendação local do dispositivo;
- **Mínimo** — compatibilidade e desempenho;
- **Médio** — equilíbrio entre qualidade e fluidez;
- **Alto** — maior realismo, IBL, LOD alto e detalhes adicionais;
- **Ultra** — maior nível de detalhe disponível na base atual.

A seleção manual sempre prevalece. Um novo benchmark pode atualizar a recomendação, mas nunca deve trocar Mínimo/Médio/Alto/Ultra escolhido manualmente. Apenas o modo Automático acompanha a recomendação.

## Benchmark local

Novo `graphics-benchmark.js`:

- memória estimada via navegador quando disponível;
- quantidade de núcleos lógicos;
- resolução e devicePixelRatio;
- WebGL 1/2;
- renderer/vendor de GPU quando exposto pelo navegador;
- limite de textura/renderbuffer/MSAA;
- probe matemático de CPU;
- probe WebGL leve;
- recomendação persistente Mínimo/Médio/Alto/Ultra.

O benchmark é diagnóstico e aproximado. Temperatura, bateria, navegador, resolução e aplicativos em segundo plano podem alterar o desempenho real.

## Escalonamento efetivo

O `quality-manager.js` passa a mapear as opções visíveis para Q1–Q4 internamente. O `three-engine.js` passa a controlar por configuração:

- pixel ratio;
- antialias;
- sombras;
- resolução do shadow map;
- IBL;
- LOD de assets;
- anisotropia;
- decals/efeitos;
- detalhe de animação;
- densidade de elementos ambientais;
- visibilidade de geometrias marcadas com nível mínimo de qualidade.

Isso permite que um mesmo laboratório contenha geometria de alto detalhe sem obrigar dispositivos fracos a renderizá-la.

## Realismo compartilhado

Os kits procedurais compartilhados foram ampliados para que a melhoria se espalhe por vários laboratórios ao mesmo tempo:

- `port-scene-kit.js`: cavalo mecânico/caminhão, contêiner, Reach Stacker e navio com mais componentes visuais e detalhes progressivos;
- `road-vehicle-kit.js`: cavalos, porta-contêiner, sider/reefer, graneleira, tanque, lowbed e cegonha com mais elementos reconhecíveis;
- `visual-port-practical-kit.js`: portal OCR, câmera/leitores, cancela, semáforo, balança, empilhadeira e CFS/armazém mais detalhados.

Detalhes pequenos como espelhos, faróis, hubs, tanques, barras, cabos, scanners, grooves da balança, racks, luminárias e elementos de convés podem ser ocultados em níveis menores e ativados em Alto/Ultra.

## Novo laboratório

- **Configuração Gráfica e Benchmark** — diagnóstico completo, comparação das configurações e controle manual.

A plataforma passa de **141 para 142 laboratórios funcionais**.

## Sequência de desenvolvimento após v0.32

A v0.32 não muda a prioridade estratégica definida anteriormente: **Operação Portuária Prática continua sendo o foco principal**. A sequência recomendada passa a ser:

1. **v0.32 — infraestrutura gráfica e realismo progressivo**;
2. **v0.33 — chegada de navio, praticagem, rebocadores, aproximação e atracação 3D**;
3. **v0.34 — operação de berço e fluxo STS → Terminal Tractor → RTG/Pátio**;
4. **v0.35 — importação visual Navio → Terminal → Gate Out → Caminhão → Destino**;
5. ondas seguintes — aprofundar Paranaguá, Santos e Itapoá, documentos, CFS, Reefer, OOG e destinos/modais, sempre reutilizando a configuração gráfica adaptativa.

A partir da v0.32, todo novo ambiente 3D deve nascer preparado para Mínimo/Médio/Alto/Ultra e usar detalhes progressivos/lazy assets sempre que possível.

---

## Atualização v0.33.0 — Chegada do Navio, Praticagem, Rebocadores e Atracação 3D

A v0.33.0 retoma a prioridade **Operação Portuária Prática** sobre a infraestrutura gráfica adaptativa da v0.32. O catálogo passa de 142 para **149 laboratórios funcionais**.

### Novo estado operacional
- `assets/js/services/port-arrival-operation.js`
- Persistência: `port-arrival:v033`.
- Estado compartilhado: navio, berço, calado didático, velocidade, rumo, distância, prático a bordo, quantidade de rebocadores, distância lateral, offset longitudinal, distribuição de espias, status e log.
- Etapas: `anchorage`, `pilot`, `tugs`, `turning`, `berthApproach`, `mooring`, `berthed`.
- Ao concluir amarração, atualiza `PracticalOperationState` com localização em berço/navio atracado, preparando a operação de cais da próxima versão.

### Novo kit visual náutico
- `assets/js/services/nautical-scene-kit.js`
- Lancha de praticagem procedural.
- Rebocador procedural com defensas e detalhes progressivos.
- Berço com cabeços, defensas e faixa de borda.
- Boias laterais de canal.
- Espias visuais de amarração.
- Base de cena reaproveitando navio porta-contêineres e água do `port-scene-kit.js`.
- Detalhes condicionados aos níveis Mínimo/Médio/Alto/Ultra via `minQuality`.

### 7 novos laboratórios
1. `chegada-navio-3d` — Chegada do Navio — Canal e Estação de Praticagem 3D.
2. `praticagem-3d` — Praticagem Didática — Embarque e Condução 3D.
3. `rebocadores-atracacao-3d` — Rebocadores — Assistência à Atracação 3D.
4. `manobra-giro-3d` — Manobra de Giro — Bacia de Evolução 3D.
5. `aproximacao-berco-3d` — Aproximação ao Berço — Velocidade e Alinhamento 3D.
6. `amarracao-navio-3d` — Amarração do Navio — Espias e Cabeços 3D.
7. `missao-atracacao-completa` — Missão Completa — Chegada e Atracação do Navio.

### Fluxo integrado
```text
APROXIMAÇÃO / CANAL
        ↓
ESTAÇÃO DE PRATICAGEM
        ↓
PRÁTICO A BORDO
        ↓
REBOCADORES
        ↓
BACIA DE EVOLUÇÃO / GIRO
        ↓
APROXIMAÇÃO AO BERÇO
        ↓
AMARRAÇÃO
        ↓
NAVIO ATRACADO
```

A missão integrada não duplica a operação: ela abre o laboratório real correspondente à próxima etapa e lê o mesmo `PortArrivalOperation` ao retornar.

### Diretriz pedagógica
Os valores de velocidade, distância, quantidade de rebocadores e distribuição de espias utilizados nesta fase são simplificações **didáticas**, para ensinar sequência, dependências e tomada de decisão. Não devem ser interpretados como limites oficiais ou procedimentos universais; manobras reais dependem de navio, terminal, porto, condições ambientais, praticagem e autoridades competentes.

### Próxima fase definida
A v0.34.0 deve partir do estado `berthed` e aprofundar a operação de cais: **STS → Terminal Tractor → RTG → posição no pátio**, com descarga sequência por sequência, fila interna, produtividade e movimentação visual da mesma unidade.

## Atualização v0.34.0 — Operação de Cais: STS → Terminal Tractor → RTG → Pátio

A v0.34.0 ampliou o LAB PORTOS 360 de 149 para 156 laboratórios funcionais, usando o navio atracado da v0.33 como ponto de partida para uma cadeia integrada de descarga. Foram criados `quay-yard-operation.js`, que mantém estado persistente da mesma unidade entre Bay/navio, STS, Terminal Tractor, fila/deslocamento interno, RTG e endereço Block/Bay/Row/Tier, e `quay-yard-scene-kit.js`, com Terminal Tractor procedural e composição compartilhada de cais/pátio. Entraram sete laboratórios: “Operação de Berço — Navio, STS e Fluxo para o Pátio”, “Ciclo STS — Retirada da Unidade do Navio 3D”, “Terminal Tractor — Cais → Pátio 3D”, “Fila Interna de Terminal Tractors”, “Transferência RTG — Terminal Tractor → Slot de Pátio 3D”, “Descarga Sequencial por Bay — Plano × Realizado” e “Missão Completa — Navio → STS → Terminal Tractor → RTG → Pátio”. O posicionamento final ocupa de verdade o `YardOccupancyState`, atualiza o `PracticalOperationState` com localização/endereço de pátio e registra um movimento em `QuayProductivity`. Todos os ambientes novos respeitam Automático/Mínimo/Médio/Alto/Ultra. Próxima prioridade: importação visual saindo do pátio até inspeção/liberação, Gate Out, caminhão rodoviário e destino final.

## Atualização v0.35.0 — Importação Visual: Pátio → Gate Out → Caminhão → Destino

A v0.35.0 continua diretamente a cadeia criada na v0.34 e amplia o LAB PORTOS 360 de 156 para **164 laboratórios funcionais**. O objetivo é preservar a mesma unidade descarregada do navio e posicionada em Block/Bay/Row/Tier até a entrega final ao importador.

### Novos serviços
- `assets/js/services/import-delivery-operation.js`
  - Persistência `import-delivery:v035`.
  - Reconhece automaticamente a unidade já posicionada no pátio via `QuayYardOperation`/`PracticalOperationState`.
  - Etapas: `yardReady`, `inspection`, `documents`, `released`, `appointment`, `truckLoaded`, `eirOut`, `gateOut`, `roadTransit`, `delivered`.
  - Ao carregar o caminhão, libera de verdade o slot no `YardOccupancyState`.
  - Gate Out usa a mesma placa, contêiner e lacre do estado prático.
  - A viagem possui distância/progresso e a entrega final registra recebedor e conferências.
- `assets/js/services/road-delivery-scene-kit.js`
  - Cena de retirada no pátio.
  - Rodovia procedural com caminhão porta-contêiner.
  - Destino/importador com doca e área de recebimento.

### Estado compartilhado
- `PracticalOperationState` migra para `practical-operation:v035`, preservando `v031`, `v030` e `v028`.
- Novas etapas: `pickupAppointment`, `pickupLoaded`, `gateOut`, `roadTransit`, `importerReceipt`.
- `GateCycle` passa a registrar `gateOut` em saída, sem marcar `delivery` antes do destino final.

### 8 novos laboratórios
1. `liberacao-importacao-patio` — Importação — Inspeção e Liberação da Unidade no Pátio.
2. `documentos-entrega-importacao` — Documentos da Liberação — Navio → Retirada.
3. `agendamento-retirada-importacao` — Agendamento de Retirada — Caminhão e Janela.
4. `retirada-patio-caminhao-3d` — Retirada do Pátio — Reach Stacker / RTG → Caminhão 3D.
5. `gate-out-importacao-3d` — Gate Out Importação 3D — EIR, OCR e Liberação.
6. `viagem-rodoviaria-importacao-3d` — Viagem Rodoviária — Porto → Destino 3D.
7. `recebimento-importador` — Recebimento no Importador — Conferência e Entrega.
8. `missao-importacao-navio-destino` — Missão Completa — Navio → Terminal → Gate Out → Destino.

### Fluxo integrado
```text
NAVIO / DESCARGA v0.34
        ↓
PÁTIO
        ↓
INSPEÇÃO
        ↓
DOCUMENTOS / LIBERAÇÃO
        ↓
AGENDAMENTO
        ↓
PÁTIO → CAMINHÃO
        ↓
EIR / GATE OUT
        ↓
RODOVIA
        ↓
IMPORTADOR / DESTINO FINAL
```

### Diretriz gráfica
Todos os novos ambientes 3D usam a infraestrutura Automático/Mínimo/Médio/Alto/Ultra e os kits compartilhados. A prioridade continua sendo aumentar realismo sem perder compatibilidade com celulares e computadores mais fracos.

### Próxima prioridade
A próxima onda recomendada é a exportação visual completa no sentido inverso: exportador/coleta → documentos fiscais/logísticos → depot/vazio → estufagem/lacre → VGM → Gate In → pátio/cut-off → STS → navio, preservando a mesma unidade.


## Atualização v0.36.0 — Exportação Visual: Exportador → Navio

- Catálogo ampliado de 164 para **172 laboratórios funcionais**.
- Novo `export-shipment-operation.js` integra origem/exportador, coleta, documentos, depot/vazio, estufagem, lacre, VGM, Pré-Gate, Gate In, pátio, cut-off/rollover e embarque.
- Novo `export-shipment-scene-kit.js` fornece cenas procedurais reutilizáveis para a jornada.
- 8 laboratórios novos: Exportador/Documentos; Coleta Rodoviária 3D; Depot/Vazio 3D; Estufagem+Lacre+VGM 3D; Pré-Gate+Gate In 3D; Pátio+Cut-off/Rollover; Embarque STS→Navio 3D; Missão Completa Exportador→Navio.
- `PracticalOperationState` migra para `practical-operation:v036` preservando v035/v031/v030/v028.
- `YardOccupancyState` é alterado de verdade: Gate In/pátio ocupa slot; embarque libera o slot.
- `BookingCutoff` e `GateCycle` são reutilizados, evitando lógica paralela.
- O embarque registra 1 movimento em `QuayProductivity`.
- Todos os novos ambientes respeitam Automático/Mínimo/Médio/Alto/Ultra.

## Atualização v0.37.0 — Fechamento da Escala: Plano de Carga → Saída do Navio

A v0.37.0 amplia o LAB PORTOS 360 de 172 para **180 laboratórios funcionais** e fecha o primeiro ciclo visual do navio após a exportação. A unidade embarcada na v0.36 continua referenciada no plano de carga e o navio só pode sair depois das verificações finais.

### Novos serviços
- `assets/js/services/vessel-departure-operation.js`
  - Persistência `vessel-departure:v037`.
  - Estado compartilhado de plano Bay/Row/Tier, movimentos Terminal Tractor→STS, hatch covers, lashing, manifesto, fechamento, espias e afastamento do berço.
  - Cada movimento adicional registra `QuayProductivity`.
- `assets/js/services/vessel-departure-scene-kit.js`
  - Cenas procedurais para plano de carga/cais, hatch covers, lashing, conferência documental e desatracação com navio/rebocadores.

### Estado prático
- `PracticalOperationState` migra para `practical-operation:v037`, preservando v036/v035/v031/v030/v028.
- Novas etapas: `exportLoadPlan`, `exportHatchCovers`, `exportLashingFinal`, `exportManifest`, `vesselClosed`, `vesselUnmoored`, `vesselDeparted`.

### 8 novos laboratórios
1. `plano-carga-navio-exportacao` — Plano de Carga — Bay / Row / Tier.
2. `sequencia-tractor-sts-exportacao` — Sequência Terminal Tractor → STS → Navio 3D.
3. `hatch-covers-operacao-3d` — Hatch Covers — Fechamento dos Porões 3D.
4. `lashing-final-navio-3d` — Lashing Final — Conferência de Travamento 3D.
5. `conferencia-manifesto-embarque` — Manifesto de Embarque — Plano × Realizado.
6. `fechamento-operacao-navio` — Fechamento da Operação do Navio.
7. `desatracacao-saida-navio-3d` — Desatracação e Saída do Porto 3D.
8. `missao-navio-saida-completa` — Missão Completa — Embarque → Fechamento → Saída.

### Fluxo integrado
```text
PLANO BAY/ROW/TIER
      ↓
TERMINAL TRACTOR → STS
      ↓
CARGA CONCLUÍDA
      ↓
HATCH COVERS
      ↓
LASHING FINAL
      ↓
MANIFESTO
      ↓
FECHAMENTO OPERACIONAL
      ↓
LIBERAÇÃO DAS ESPIAS
      ↓
REBOCADORES / AFASTAMENTO
      ↓
NAVIO EM SAÍDA
```

Todos os valores e posições são cenários didáticos. Operações reais dependem de plano de carga, terminal, armador, tripulação, praticagem, autoridades e condições locais. Todos os ambientes novos respeitam **Automático/Mínimo/Médio/Alto/Ultra**.

### Próxima prioridade recomendada
A v0.38 pode aprofundar a operação marítima e documental após a saída: **pilot disembark, outbound channel, ETA próximo porto, fechamento de escala, Port Call Report, indicadores completos da escala e replay da operação navio chegada→saída**.



## Atualização v0.38.0 — Port Call Completo: Saída → Report → Replay

A v0.38.0 amplia o LAB PORTOS 360 de 180 para **187 laboratórios funcionais** e fecha formalmente a escala marítima depois da saída construída na v0.37.

### Novos serviços
- `port-call-completion.js`: desembarque do prático, canal outbound, ETA do próximo porto, fechamento formal, Port Call Report e KPIs.
- `port-call-replay.js`: reconstrução de 18 marcos da chegada à saída a partir dos estados persistentes.
- `outbound-voyage-scene-kit.js`: cenas procedurais de canal outbound, lancha de praticagem e passagem marítima.

### Novos laboratórios
1. Desembarque do Prático — Saída 3D.
2. Canal de Saída — Navegação Outbound 3D.
3. Próximo Porto — Distância, Velocidade e ETA.
4. Fechamento Formal da Escala Portuária.
5. Port Call Report — Relatório Completo da Escala.
6. Indicadores da Escala — Tempo, Produtividade e Aderência.
7. Replay da Escala — Chegada → Atracação → Operação → Saída.

### Estado compartilhado
`PracticalOperationState` migra para `practical-operation:v038`, preservando v037/v036/v035/v031/v030/v028 e adicionando `pilotDisembarked`, `outboundChannel`, `nextPortETA`, `portCallClosed`, `portCallReport`, `portCallKPIs` e `portCallReplay`.

### Regra didática
O fechamento da escala exige navio em saída, prático desembarcado, canal outbound concluído e ETA do próximo porto. Distâncias, velocidades e tempos são parâmetros educacionais, não regras oficiais.

## Atualização v0.39.0 — Port Call Analytics: Histórico, Turnaround, Eventos e Dashboard

A v0.39.0 amplia o LAB PORTOS 360 de 187 para **194 laboratórios funcionais** e transforma o port call completo da v0.38 em uma camada de análise de múltiplas escalas.

### Novos serviços
- `assets/js/services/port-call-history.js`
  - Persistência `port-call-history:v039`.
  - Arquiva a escala atual somente depois do fechamento formal.
  - Mantém registros do usuário separados de cenários sintéticos `DEMO`.
  - Consolida turnaround, espera por berço, permanência, produtividade, aderência e tempos de fase.
- `assets/js/services/port-call-events.js`
  - Persistência `port-call-events:v039`.
  - Eventos didáticos: vento, visibilidade, chuva, ondulação, equipamento, pátio, documentação e Gate.
  - Separa atraso meteorológico e operacional e pode vinculá-los a uma escala arquivada.
- `assets/js/services/port-call-analytics.js`
  - Comparação entre escalas/navios.
  - Turnaround ranking.
  - Espera por berço.
  - Produtividade por escala.
  - Tempo médio por fase.
  - Resumo executivo.

### 7 novos laboratórios
1. `historico-escalas-portuarias` — Histórico de Escalas Portuárias.
2. `comparacao-escalas-navios` — Comparação entre Escalas e Navios.
3. `turnaround-time-escala` — Turnaround Time — Chegada → Saída.
4. `tempo-por-fase-port-call` — Tempo por Fase do Port Call.
5. `espera-por-berco` — Espera por Berço — ETA, ETB e ATB.
6. `eventos-port-call` — Eventos Meteorológicos e Operacionais da Escala.
7. `dashboard-executivo-port-calls` — Dashboard Executivo de Port Calls.

### Integração com a Central
A Central de Operações passa para estado vivo v0.39 e mostra:
- quantidade de escalas no histórico;
- turnaround médio;
- espera média;
- produtividade média;
- minutos acumulados de eventos;
- fase dominante do port call.

### Regra de dados
- Registros `USUÁRIO` vêm do estado local de escalas fechadas na plataforma.
- Registros `DEMO` são sintéticos, rotulados e removíveis.
- A decomposição de tempo por fase pode usar aproximações didáticas quando não existem timestamps granulares de todas as subfases; não deve ser interpretada como auditoria operacional real.
- Eventos meteorológicos e operacionais são cenários educacionais, não limites oficiais de porto/terminal.

### Próxima prioridade recomendada
A v0.40 pode levar o histórico para uma camada de **planejamento de escala**: ETA/ETB/ATB/ETD/ATD em Gantt marítimo, janela de berço, conflito entre navios, previsão de ocupação de berços, fila de fundeio futura, cenário de atraso e replanejamento do port call antes da chegada.
