// ============================================================
//  EDIÇÕES — edite aqui para adicionar ou atualizar edições
//
//  Campos obrigatórios:
//    number          → número da edição (inteiro)
//    title           → tema/título da edição
//    date            → data da apresentação   (YYYY-MM-DD)
//    period.start    → início do sprint/período (YYYY-MM-DD)
//    period.end      → fim do sprint/período    (YYYY-MM-DD)
//
//  Campos opcionais:
//    presentationUrl → "edition-01/spotlight.html" (apresentação local)
//                      ou link externo do PPTX/Slides (null = "Em breve")
//    cards           → lista de atividades apresentadas
//      .title        → nome da atividade
//      .description  → descrição do que foi feito
//      .tag          → categoria (ver TAG_COLORS abaixo)
// ============================================================

const EDITIONS = [
  {
    number: 1,
    title: "Pipelines & Infraestrutura",
    date: "2026-04-24",
    period: { start: "2026-04-10", end: "2026-04-24" },
    presentationUrl: "edition-01/spotlight.html", // ou link do PPTX
    cards: [
      { title: "Pipeline de CI configurado",        description: "Pipeline YAML no Azure DevOps com stages de build, test e publish.", tag: "CI/CD" },
      { title: "Deploy automático em staging",      description: "Release pipeline com artefato versionado e aprovação antes de prod.",  tag: "Deploy" },
      { title: "Infraestrutura como código",        description: "Terraform para App Service, Storage e Key Vault com state remoto.",    tag: "Infraestrutura" },
      { title: "Dashboard de monitoramento",        description: "Azure Monitor com alertas de falha de build e deploy.",                tag: "Monitoramento" },
      { title: "Secrets no Key Vault",              description: "Migração de credenciais hardcoded para Azure Key Vault.",              tag: "Segurança" },
    ],
  },
  {
    number: 2,
    title: "Migração do Ambiente",                              // tema da edição
    date: "2026-05-01",                     // data da apresentação
    period: { start: "2026-04-24", end: "2026-05-01" },
    presentationUrl: "edition-02/spotlight.html",
    cards: [
      { title: "Pipeline de CI configurado",        description: "Pipeline YAML no Azure DevOps com stages de build, test e publish.", tag: "CI/CD" },
      { title: "Deploy automático em staging",      description: "Release pipeline com artefato versionado e aprovação antes de prod.",  tag: "Deploy" },
      { title: "Infraestrutura como código",        description: "Terraform para App Service, Storage e Key Vault com state remoto.",    tag: "Infraestrutura" },
      { title: "Dashboard de monitoramento",        description: "Azure Monitor com alertas de falha de build e deploy.",                tag: "Monitoramento" },
      { title: "Secrets no Key Vault",              description: "Migração de credenciais hardcoded para Azure Key Vault.",              tag: "Segurança" },
    ],
  },
    {
    number: 3,
    title: "Segurança e Encerramento da migração",                              // tema da edição
    date: "2026-05-15",                     // data da apresentação
    period: { start: "2026-04-24", end: "2026-05-15" },
    presentationUrl: "edition-03/spotlight.html",
    cards: [
      { title: "Pipelines CMS, Front e API",        description: "Correção e ajuste dos pipelines de build no ambiente dev para CMS, Front e API Agrotrace.", tag: "CI/CD" },
      { title: "Migração Checkmilk e Checkwork",    description: "Migração dos serviços Checkmilk e Checkwork para o novo ambiente dev com backups automatizados.", tag: "Infraestrutura" },
      { title: "WireGuard VPN distribuída",         description: "Credenciais VPN geradas e distribuídas para Carlos, Elias, Matheus e Thielson. HiveMQ preparado via Terraform.", tag: "Segurança" },
      { title: "Integração PRODES/IBAMA",           description: "Importação de Cars, PRODES e IBAMA no Agroplus. Validação de dados e ajuste de Bioma no cadastro de propriedade.", tag: "Infraestrutura" },
      { title: "Laudos Biodiesel-Soja",             description: "Ajustes no card #11729 com nova regra de validação. Testes de autenticação CAR e variáveis numéricas concluídos.", tag: "Deploy" },
      { title: "App Mobile — 2 PRs mergeados",      description: "PR #10783 (remove temas sem perguntas) e PR #10788 (corrige listagem de propriedades no formulário dinâmico).", tag: "Deploy" },
    ],
  },
  {
    number: 4,
    title: "Segurança & Migração",
    date: "2026-06-19",
    period: { start: "2026-05-15", end: "2026-06-19" },
    presentationUrl: "edition-04/spotlight.html",
    cards: [
      { title: "Novos projetos, edições e novidades", description: "Melhorias no AproSoja (5 tickets), novo projeto Qualificação Leiteira Sergipe com Form Dinâmico, protocolo CheckMilk no Agrotrace e treinamentos AgroPlus.", tag: "Deploy" },
      { title: "Migração completa do ambiente dev",   description: "Deploy do Checkwork em dev validado, roteamento entre ambientes (VPN/DEV/OPS) e migração do PSONO para o Infisical.", tag: "Infraestrutura" },
      { title: "Implementação OPS TOOLS",             description: "Ferramenta de engenharia de plataforma/GitOps: backups do RDS, gestão de k8s e variáveis, acesso a containers e logs em tempo real.", tag: "Segurança" },
      { title: "Laudos Biodiesel-Soja & Citros",      description: "Ajustes nos laudos do Biodiesel-Soja e criação/edição dos formulários do projeto Sanidade Citros.", tag: "Deploy" },
      { title: "Auto-abertura de tickets no GLPI",    description: "Apresentação da abertura automática de tickets no GLPI.", tag: "Automação" },
    ],
  },
  {
    number: 5,
    title: "Projetos & Validações",
    date: "2026-07-10",
    period: { start: "2026-06-19", end: "2026-07-09" },
    presentationUrl: "edition-05/spotlight.html",
    cards: [
      { title: "Protocolo PCV — Biodiesel-Cacau",     description: "Cadastro e importação do Protocolo PCV em testes no dev e validação da coluna Protocolo na Forma de Cálculo do Ranking (#12753).", tag: "CI/CD" },
      { title: "Importação genérica & atendimentos",  description: "#12549 importação genérica de produtores e propriedades na tela de importações, fix de pipelines e atendimentos a usuários + alinhamentos 1:1.", tag: "Infraestrutura" },
      { title: "Lote de validações de cards",         description: "6 validações OK: reaproveitamento de respostas, Better Auth v2/MFA, comunicações com produtores, Atualizar Ranking, Bloco Repetível e coluna de preenchimento.", tag: "Deploy" },
      { title: "Novos projetos & protocolos",         description: "Protocolos CheckFoods e CheckMilk, novos projetos com form dinâmico e forms dinâmicos do Sartori (#12292, #12718, #12728, #12536, #12648).", tag: "CI/CD" },
      { title: "Relatórios, exportações e suporte",   description: "Ajustes nos relatórios Checksheep e JBS, filtro/exportação Excel do form dinâmico, auto-atendimento GLPI na home e suporte a impressoras/pipelines.", tag: "Monitoramento" },
      { title: "Formulário Dinâmico — blocos & padrão", description: "PR 11263 (blocos repetíveis), PRs 11252/11256 (resposta padrão) e correção do download de itens no Citros (#12757 / PR 11318).", tag: "Deploy" },
      { title: "Biodiesel — Soja & Cacau",            description: "Ajustes de perfil e recibo (#12621, #12780), laudos e Propriedade Info do Cacau (#12724, #12747) e travamento de tipos de atendimento na Soja (#12761).", tag: "Geral" },
      { title: "Citros, suporte e tickets",           description: "Formulários Sanidade Citros, cadastro de município, atendimentos remotos, coluna de justificativa 3S (Ticket 302) e renovação do certificado GLPI.", tag: "Segurança" },
      { title: "Ambiente, 2FA e VPN",                 description: "Alinhamento do ambiente de desenvolvimento, código/fluxo de 2FA e testes de conexão na VPN.", tag: "Infraestrutura" },
    ],
  },
  {
    number: 6,
    title: "Citros, PEC & Protocolos",
    date: "2026-07-31",
    period: { start: "2026-07-10", end: "2026-07-30" },
    presentationUrl: "edition-06/spotlight.html",
    cards: [
      { title: "Citros — Dashboards & Painel Sanitário", description: "#12977 filtro de variedade e #12962 semântica visual do comparativo do Painel Sanitário validados, #12861 carregamento de dashboards e #12943 consolidação do Dashboard Sanitário + relatórios de Citros.", tag: "CI/CD" },
      { title: "Protocolos, Ranking & respostas dinâmicas", description: "#12854 ranking de medalhas por protocolo no CMS, #12881 editabilidade mobile em protocolos importados, parametrização NCP/PCV entregue e #12869/#12872 respostas dinâmicas + painel de sessões (#12794).", tag: "Deploy" },
      { title: "Infra, custos & importações", description: "Ajustes de ingress/cache, proxy nginx AWS, revisão de custos Azure & AWS, migração de banco p/ Azure e importação genérica de produtores/propriedades (#12753, #12549).", tag: "Infraestrutura" },
      { title: "Módulo PEC — variáveis, justificativas & RAT", description: "#12971 variáveis da descrição de atendimento, #12831 justificativas PEC, #12840 melhorias, #12817 liberação p/ projeto e correções de RAT (#12902, #12888) + perfis CheckMilk no Pectrace (#12959).", tag: "CI/CD" },
      { title: "Relatórios, 2FA & CheckMilk", description: "Relatório de DG Boas Práticas, #12863 blocos repetíveis, #12882 recomendação automática, capa Aprosoja (#12913), 2FA/Magic Link (#12963, #12857) e sincronização CheckMilk (#12954, #12914).", tag: "Monitoramento" },
      { title: "Usuários, acessos & treinamentos", description: "Criação/ajuste de usuários e senhas (#12982, #12987, #12827), atendimentos (#12988, #12921, #12923, #12890) e treinamentos 3S, Norte Pioneiro PR e Biodiesel-Cacau.", tag: "Deploy" },
      { title: "Biodiesel-Cacau & Releases", description: "#12802 cálculo de área (HA) + perfil PCV e ajustes Débora, recibo safra 24/25 (#12903), Releases 104 (entregue) e 106 (aguardando design) e PR 11406 protocolo p/ animais lactantes.", tag: "Geral" },
      { title: "Pull Requests & QA — mobile", description: "15 PRs: MFA (11471), envio PEC erro 409 (11451), tabela de qualidade do leite no RAT (11482), sync de dados (11313), módulo financeiro (11398) e form dinâmico (11381, 11433) + Test Cases.", tag: "Deploy" },
      { title: "Suporte, atendimentos & Citros", description: "Ajustes no Form Viveiros e acessos do Citros (#12967, #12972, #12968), configuração de impressoras/celulares, erros de impressão (CheckMilk) e credenciais/reset de senha (AgroPlus, Citros, Minerva, CheckWork).", tag: "Segurança" },
      { title: "Ambiente, Infisical & migrações", description: "Atualização do MySQL em Produção/Dev (RDS) e implantação na Azure, worker Infisical no AKS de produção + integração OPS-TOOLS, migração de DNS do projecttrace.com.br e rotas do proxy para Cloudflare/AKS.", tag: "Infraestrutura" },
    ],
  },
  {
    number: 7,
    title: "Safra 26/27, QA & Validações",
    date: "2026-08-21",
    period: { start: "2026-07-31", end: "2026-08-20" },
    presentationUrl: "edition-07/spotlight.html",
    cards: [
      { title: "18 validações entregues", description: "Formulários Dinâmicos via Excel (#12956), perguntas geométricas (#13025), CAPTCHA configurável (#12929), visibilidade por grupos/filiais (#13089), pins nos mapas (#13005) e blocos repetíveis no Dashboard Citros (#13128).", tag: "CI/CD" },
      { title: "Infra, builds & esteiras de deploy", description: "Setup de build e publicação do check-talent e do agrofit, esteira de deploy do Edital Fit, fix dos pipelines Agrotrace dev e permissões Class Solutions na Azure.", tag: "Infraestrutura" },
      { title: "Reuniões & alinhamentos", description: "Lançamento Biodiesel MS, Agroplus (ACL, protocolo e formulários por grupos com Douglas), Formulário Citros com Cláudio, demandas Agrotrace com Sartori e Painel de Gestão com Thayse e Débora.", tag: "Geral" },
      { title: "Relatório DG Boas Práticas", description: "#12830 construído ao longo do sprint, #13129 texto de conclusão do relatório DG Agroplus, #13020 disponibilização de relatórios e testes de parâmetros com Elias.", tag: "Monitoramento" },
      { title: "Treinamentos, perfis & projetos", description: "Treinamentos Biodiesel MS (#13179), Cacau-Biodiesel/Nestlé (#13119) e Paisagens Sustentáveis (#13120, #13103), perfis CheckMilk no Pectrace (#12959) e na Qualificação Sergipe (#13041).", tag: "Deploy" },
      { title: "App, envio de dados & sincronização", description: "Fila de envio e anexos (#13047, #13073, #13074), sincronismo Agrotrace/CheckMilk (#13015, #13014), performance (#13191), teclado (#13163) e agenda automática ao filtrar (#13034).", tag: "Deploy" },
      { title: "Suporte, WhatsApp & acessos", description: "Novos chips e números de suporte (#13130, #13139, #13122), acessos CheckWork e Cacau-Biodiesel (#13190, #13150, #13094), backup mensal do Jasper (#13186) e investigações de dados.", tag: "Segurança" },
      { title: "Biodiesel-Soja — Safra 26/27", description: "Virada de safra Centerplan: acompanhamento consolidado (#13185), croqui e perfil 25→26 em progresso (#13178, #13180), modelo de recibo (#13116, Ticket 308) e laudos (Ticket 296).", tag: "CI/CD" },
      { title: "16 PRs mergeados & QA mobile", description: "Form dinâmico (11509, 11630, 11632), estabilidade do app no croqui e anexos (11692, 11698, 11743), módulo PEC (11539, 11562), DG do animal (11621, 11547) e Test Case 13024.", tag: "Deploy" },
      { title: "Importações, Citros & Releases", description: "Importação Checksheep (#13161) e planilha Citros (#13100), correção de dados importados (#13095, #13101), Form Viveiros (#13087), Release 107 aguardando design (#13110) e suporte a celulares/impressoras.", tag: "Monitoramento" },
      { title: "Novo ambiente de produção — redes & VPN", description: "Implantação do novo ambiente com segregação de redes, configuração dos túneis VPN, regras de rede e DNS e validação da comunicação entre a rede de aplicação e o banco de dados.", tag: "Infraestrutura" },
      { title: "Infisical & Paisagens Sustentáveis", description: "Infisical implantado no novo ambiente de produção, app Paisagens Sustentáveis migrado do GitHub para o Azure DevOps com pipelines e leitura de variáveis de ambiente via Infisical.", tag: "Segurança" },
    ],
  },
  {
    number: 8,
    title: "Solo, Safra 26/27 & Relatórios",
    date: "2026-09-11",
    period: { start: "2026-08-21", end: "2026-09-10" },
    presentationUrl: "edition-08/spotlight.html",
    cards: [
      { title: "Validações do sprint", description: "Módulo Solo & Nutrição com importação de laudos, semáforo e recomendações de calagem/adubação (#13275), filtro por Certificadora (#13305), pergunta Talhão (#13256), controle de peso em lote (#13217) e fixes de blocos repetíveis e rotas inexistentes (#13264, #13266).", tag: "CI/CD" },
      { title: "Novos produtos, builds & ambientes", description: "Check-Talent (build, variáveis e pipeline) e Check-Tenders (build e migração de usuários para o novo banco), investigação dos erros de deploy do EditalFit, ajustes de memória no cluster de dev e fechamento da Sprint Mobile 108 → 110.", tag: "Infraestrutura" },
      { title: "Reuniões, atendimentos & alinhamentos", description: "Apresentação do sistema para a ICA (Priscila), reuniões Biodiesel MS/GO, alinhamento de demandas JBS e feats de Solo e Nutrição com Ronaldo, roadmap DevOps com Lucas e atendimentos Agroplus, Minerva e Citros.", tag: "Geral" },
      { title: "Relatórios, procedures & Jasper", description: "Relatório de Diagnóstico de Boas Práticas concluído (#12830) e publicado no Jasper (#13215), proteção contra divisão por zero na procedure getRankingPorImportancia (#13384), relatório Paisagens Sustentáveis (#13351, #13387) e ajustes nos DG 3S, Agroplus e Aprosoja.", tag: "Monitoramento" },
      { title: "Projetos, ambientes & publicações", description: "Projeto Deodápolis MS 2026 com form dinâmico (#13282), novo ambiente Pecuária e Genética (#13349), preparativos do módulo PEC para a Cargill Pro Leite (#13296), nova API em Python de imagens de satélite (#13206) e correção do deploy do Agrotrace (#13225).", tag: "Deploy" },
      { title: "Treinamentos, suporte & canais", description: "Treinamentos Biodiesel Soja/BrasilBio (#13261, #13279) e de relatórios (#13237), novos chips de suporte e troca do número no Agrotrace/CheckMilk (#13208, #13210), configuração de impressoras e celulares e acompanhamento de envio de dados.", tag: "Segurança" },
      { title: "Biodiesel — Safra 26/27 & Recibo", description: "Virada de safra 25 → 26 concluída no Biodiesel Soja (croqui #13178 e perfil #13180), ajuste do croqui do Cacau (#13200), importação de grupos (#13319), conteúdo do Recibo desenvolvido (#12911) e Releases 108 (#13221) e 109 (#13364).", tag: "CI/CD" },
      { title: "16 PRs mergeados & QA mobile", description: "Anexos e assinatura (11864, 11853, 11838), recibo e relatórios PDF (11757, 11832), coordenadas e GPS (11814, 11745), cadastro de Lote e Animal (11795, 11869), módulo PEC (11836) e formulários (11734, 11717, 11686, 11665, 11751) + 7 Test Cases.", tag: "Deploy" },
      { title: "Suporte, notebooks & atendimentos", description: "Configuração de notebooks (#13386, #13383, #13339), acessos e logins (#13363, #13367, #13385, #13267), investigação de atendimentos sem respostas (#13196), coordenadas sumindo (#13239, #13156) e app fechando no croqui (#13160).", tag: "Segurança" },
      { title: "Wizard de aplicações, VPN & plataforma", description: "Wizard de provisionamento padronizado de novas aplicações no novo ambiente de produção (pendência herdada da #07), suporte à VPN one-client, conexão do cluster de dev, processos de pontuação no Azure DevOps e validação do roadmap DevOps.", tag: "Infraestrutura" },
    ],
  },
  {
    number: 9,
    title: "Citros, Biodiesel & Assinatura Digital",
    date: "2026-10-02",
    period: { start: "2026-09-11", end: "2026-10-01" },
    presentationUrl: "edition-09/spotlight.html",
    cards: [
      { title: "20 validações do sprint", description: "Score oficial e filtros do Dashboard Citros (#13430), painéis Abates e JBS (#13460), dashboard SICAR com aba CAF (#13507, #13540), vínculo automático produtor-técnico (#13484), unicidade de protocolo (#13601) e limite de requisições por usuário (#13606).", tag: "CI/CD" },
      { title: "VPN, ambientes & segurança", description: "Validação dos usuários da VPN e VPN do servidor de Marília, ajustes no deploy do Agrotrace LP, variáveis de ambiente com Ops Tools + Infisical, revisão de segurança nos repositórios de infra e conformidade com a ISO/IEC 27001.", tag: "Infraestrutura" },
      { title: "Reuniões, atendimentos & alinhamentos", description: "Melhorias Citros com Cláudio e Luciano, feats e indicadores JBS, apresentação Digi Agro para o Sicredi, reuniões Biodiesel GO, novo protocolo Agroplus com Douglas e atendimentos 3S, Emater MG e Biodiesel.", tag: "Geral" },
      { title: "Relatórios, protocolo & indicadores", description: "Relatório DG Biodiesel-Soja (#13287), plano de ação de boas práticas (#13375), ranking 3S (#13541), extrato Aprosoja (#13510, #13511), relatório de protocolo (#13497, #13498), dashboard de esforços gerais (#13195) e indicadores de projetos (#13488).", tag: "Monitoramento" },
      { title: "Paisagens Sustentáveis & form dinâmico", description: "Paisagens Sustentáveis publicado no novo cluster e em prod (#13402, #13436), form dinâmico da Fundação BB (#13569), função de não editar no mobile (#13609), demandas Pectrace (#13437) e aumento do limite de anexos (#13495).", tag: "Deploy" },
      { title: "Treinamentos, suporte & dispositivos", description: "Treinamentos Biodiesel, Aprosoja, Agrotrace e Cacau-Biodiesel (#13422, #13423, #13486), nova impressora portátil (#13459), celulares e impressoras novas (#13610), permissões e resgate de usuários e apoio na abertura e conclusão de atendimentos.", tag: "Segurança" },
      { title: "Biodiesel, protocolo PCV & assinatura", description: "Protocolo PCV do Cacau Biodiesel (#13487, Ticket 312), assinatura digital no recibo (#13469), consolidação da safra 25/26 → 26/27 (#13532), laudos 1 e 2 em andamento (Ticket 314) e Release 110 aguardando aprovação (#13512).", tag: "CI/CD" },
      { title: "15 PRs mergeados & QA mobile", description: "Módulo Solo & Nutrição (11960), assinatura digital segregada por documento (12016), SDK Android 36 (11886), PEC e CAF (12004, 12056, 12064), RAT e protocolo (12027, 12054, 11888) e desempenho do form dinâmico (11899), mais 5 Test Cases.", tag: "Deploy" },
      { title: "Suporte, cadastros & envio de dados", description: "Itens pendentes de envio e erros de anexos (#13426, #13588), vínculos de produtores e projetos (#13439, #13526, #13550), criação de logins, desativação de duplicados e suporte a impressoras, notebooks, CheckWork e CheckMilk.", tag: "Segurança" },
      { title: "Ops Tools, Infisical & painel de status", description: "Estruturação do ambiente Ops Tools e do painel de status das aplicações, variáveis de ambiente via Infisical e continuidade da migração para o novo cluster com o Paisagens Sustentáveis em prod.", tag: "Infraestrutura" },
      { title: "Roadmap — metas da próxima sprint", description: "Avançar nas normalizações para certificações como a ISO/IEC 27001, aprimorar o uso de variáveis via Infisical em projetos novos, apresentar as melhorias à equipe do Citros e validar o novo protocolo Agroplus (possivelmente multi-protocolo).", tag: "Geral" },
    ],
  },
  {
    number: 10,
    title: "A definir",
    date: "2026-10-23",
    period: { start: "2026-10-02", end: "2026-10-22" },
    presentationUrl: null, // "Em breve" — apresentação ainda não publicada
    // sem cards → botões desabilitados e status "planejada"
  },
];

// ============================================================
//  TAGS — adicione cores para novas categorias aqui
// ============================================================

const TAG_COLORS = {
  "CI/CD":          "#0078d4",
  "Pipeline":       "#0ea5e9",
  "Deploy":         "#7c3aed",
  "Infraestrutura": "#059669",
  "Monitoramento":  "#d97706",
  "Segurança":      "#dc2626",
  "Automação":      "#8b5cf6",
  "Azure":          "#0078d4",
  "Kubernetes":     "#326ce5",
  "Docker":         "#2496ed",
  "Terraform":      "#623ce4",
  "Geral":          "#4b5563",
};

// ──────────────────────────────────────────────────────────
//  Internals — não precisa editar abaixo
// ──────────────────────────────────────────────────────────

const STATUS_META = {
  hoje:        { label: "Hoje",        css: "hoje"        },
  apresentado: { label: "Apresentado", css: "apresentado" },
  proxima:     { label: "Próxima",     css: "proxima"     },
  planejada:   { label: "Planejada",   css: "planejada"   },
};

function parseLocalDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function computeStatuses(editions) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTs = today.getTime();

  const futureTimes = editions
    .map(ed => parseLocalDate(ed.date).getTime())
    .filter(t => t > todayTs);
  const nextTs = futureTimes.length ? Math.min(...futureTimes) : null;

  return editions.map(ed => {
    const ts = parseLocalDate(ed.date).getTime();
    const status =
      ts === todayTs ? "hoje"        :
      ts < todayTs   ? "apresentado" :
      ts === nextTs  ? "proxima"     :
                       "planejada";
    return { ...ed, status };
  });
}

function fmt(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function fmtPeriod(p) {
  return `${fmt(p.start).slice(0, 5)} – ${fmt(p.end)}`;
}

function tagColor(tag) {
  return TAG_COLORS[tag] ?? "#4b5563";
}

function cardHTML(ed) {
  const { number, title, date, period, presentationUrl, cards, status } = ed;
  const num      = String(number).padStart(2, "0");
  const hasUrl   = Boolean(presentationUrl);
  const hasCards = Array.isArray(cards) && cards.length > 0;
  const isPlanned = status === "planejada";

  const openBtn = hasUrl
    ? `<a class="btn btn-primary" href="${presentationUrl}" target="_blank" rel="noopener">▶ Abrir Spotlight</a>`
    : `<button class="btn btn-disabled" disabled>▶ Em breve</button>`;

  const cardsBtn = hasCards
    ? `<button class="btn btn-secondary" onclick="openModal(${number})">≡ Ver Cards</button>`
    : isPlanned
      ? `<button class="btn btn-disabled" disabled>≡ Em breve</button>`
      : "";

  return `
    <div class="edition-card" tabindex="0"
         data-number="${number}"
         data-url="${presentationUrl ?? ""}">
      <div class="card-header">
        <span class="edition-number">#${num}</span>
        <span class="status-badge status-${STATUS_META[status].css}">
          ${STATUS_META[status].label}
        </span>
      </div>
      ${title ? `<p class="edition-title">${title}</p>` : ""}
      <div class="edition-date">${fmt(date)}</div>
      <div class="edition-period">Período: ${fmtPeriod(period)}</div>
      <div class="card-actions">${openBtn}${cardsBtn}</div>
    </div>`;
}

function render() {
  const editions = computeStatuses(EDITIONS);
  const sorted   = [...editions].sort((a, b) => new Date(b.date) - new Date(a.date));
  document.getElementById("editions-grid").innerHTML = sorted.map(cardHTML).join("");
  initKeyboardNav();
}

// ─── Modal ────────────────────────────────────────────────

function openModal(number) {
  const ed = EDITIONS.find(e => e.number === number);
  if (!ed?.cards?.length) return;

  document.getElementById("modal-title").textContent =
    `#${String(ed.number).padStart(2, "0")} — ${ed.title ?? fmt(ed.date)}`;

  document.getElementById("modal-cards").innerHTML = ed.cards.map(c => {
    const color = tagColor(c.tag);
    return `
      <div class="work-card">
        <span class="work-card-tag"
              style="background:${color}22; color:${color}; border-color:${color}44">
          ${c.tag ?? "Geral"}
        </span>
        <div class="work-card-title">${c.title}</div>
        <div class="work-card-desc">${c.description}</div>
      </div>`;
  }).join("");

  document.getElementById("modal").hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").hidden = true;
  document.body.classList.remove("modal-open");
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal").addEventListener("click", e => {
  if (e.target === document.getElementById("modal")) closeModal();
});

// ─── Keyboard Navigation ─────────────────────────────────

function initKeyboardNav() {
  document.addEventListener("keydown", handleKey);
}

function handleKey(e) {
  const modal = document.getElementById("modal");

  if (!modal.hidden) {
    if (e.key === "Escape") closeModal();
    return;
  }

  // 1–9 → focus card by edition number
  if (/^[1-9]$/.test(e.key)) {
    const target = document.querySelector(`.edition-card[data-number="${e.key}"]`);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  const cards   = [...document.querySelectorAll(".edition-card")];
  const focused = document.activeElement;
  const idx     = cards.indexOf(focused);

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const next = idx === -1 ? cards[0] : cards[Math.min(idx + 1, cards.length - 1)];
    next?.focus();
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const prev = idx <= 0 ? cards[0] : cards[idx - 1];
    prev?.focus();
  }

  if (e.key === "Enter" && focused?.classList.contains("edition-card")) {
    const url = focused.dataset.url;
    if (url) window.open(url, "_blank", "noopener");
  }
}

// ─── Shortcuts Bar ───────────────────────────────────────

function renderShortcuts(editions) {
  const navigable = editions
    .filter(e => e.status !== "planejada")
    .sort((a, b) => a.number - b.number);
  const planned = editions
    .filter(e => e.status === "planejada")
    .sort((a, b) => a.number - b.number);

  let html = "";

  if (navigable.length) {
    const kbds = navigable.map(e => `<kbd>${e.number}</kbd>`).join("");
    html += `<span class="shortcut-group">${kbds} Ir para edição</span>`;
  }

  planned.forEach(e => {
    const num = String(e.number).padStart(2, "0");
    html += `<span class="shortcut-group"><kbd>${e.number}</kbd> Edição #${num} (em breve)</span>`;
  });

  html += `<span class="shortcut-group"><kbd>←</kbd><kbd>→</kbd> Navegar cards</span>`;
  html += `<span class="shortcut-group"><kbd>Enter</kbd> Abrir Spotlight</span>`;
  html += `<span class="shortcut-group"><kbd>Esc</kbd> Fechar modal</span>`;
  html += `<a class="shortcut-team-link" href="team.html" target="_blank">// time &amp; galeria ↗</a>`;

  document.getElementById("shortcuts-inner").innerHTML = html;
}

render();
renderShortcuts(computeStatuses(EDITIONS));
