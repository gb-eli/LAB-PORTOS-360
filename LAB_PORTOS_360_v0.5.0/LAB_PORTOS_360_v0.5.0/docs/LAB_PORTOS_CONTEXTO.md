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
