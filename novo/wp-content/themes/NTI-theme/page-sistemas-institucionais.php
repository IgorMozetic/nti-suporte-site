<?php
get_header(); ?>
<div id="content" class="wrap">
  <div id="primary" class="content-area">
    <main id="main" class="container">
      <div id="sistemas-institucionais" class="row">
        <div class="col-sm-12 col-md-12">
          <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
          <h1>Sistemas Institucionais</h1>
          <div class="row py-4">
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/acesso.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Acesso</h5>
                  <p class="card-text">Sistema de Controle de Usuários da UFABC. Este sistema cadastra e gerencia os usuários da UFABC para o acesso aos sistemas, e-mail, wifi e utilização de computadores da instituição.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://acesso.ufabc.edu.br/site/login" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/moodle.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Ambiente Virtual de Aprendizagem - Moodle</h5>
                  <p class="card-text">Ambiente Virtual para realização de cursos a distância que substituirá o Tidia. Ele está sendo usado de forma experimental para um pequeno grupo de disciplinas. Atualmente existem três ambientes do moodle na UFABC.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://moodle.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/tidia.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Ambiente Virtual de Aprendizagem - Tidia</h5>
                  <p class="card-text">Ambiente Virtual para realização de cursos a distância.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://tidia4.ufabc.edu.br/portal" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/atributos-docente.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Atributos Docentes</h5>
                  <p class="card-text">Sistema de Gestão da Produção docente.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://atributosdocentes.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-nti.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Avaliações SUGEPE</h5>
                  <p class="card-text">Sistema de Avaliação Funcional de Servidores Técnicos-Administrativos.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://avaliacoes-sugepe.ufabc.edu.br/login" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/central.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Central de Serviços</h5>
                  <p class="card-text">Sistema de abertura de solicitações de serviços da instiuição. Este sistema disponibiliza aos usuários a carta de serviços de vários setores da UFABC para que a comunidade acadêmica possa requisitar ou reportar algum problema com algum serviço.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://servicos.ufabc.edu.br" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/limesurvey.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Formulários (Contato) - Limesurvey</h5>
                  <p class="card-text">Sistema para Geração de Formulários de Contato para sites e portais.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://formularios.ufabc.edu.br/admin" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-nti.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Geração de Ficha Catalográfica</h5>
                  <p class="card-text">Ferramenta para geração de Ficha Catalográfica.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://portal.biblioteca.ufabc.edu.br/ficha_catalografica/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/g-suite.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Google Suite</h5>
                  <p class="card-text">Conjunto de ferramentas do Google para que os servidores da UFABC possam trabalhar em home office, realizando reuniões por webconferência, organizando tarefas do setor, conversando com a equipe através de chat, entre outras possibilidades.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://google.com.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/levantamento-ufabc.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Levantamento - Limesurvey</h5>
                  <p class="card-text">Sistema para Criação de Questionários de pesquisa de opinião.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://levantamento.ufabc.edu.br/admin" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/portal-aluno-graduacao.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Portal do Aluno da Graduação</h5>
                  <p class="card-text">Portal que disponibiliza informações da vida acadêmica do aluno da graduação.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://aluno.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-nti.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Portal Público Acadêmico</h5>
                  <p class="card-text">Portal público acadêmico onde é possível encontrar informações sobre projetos de extensão e pesquisa, docentes da instituição, além de realizar inscrições em processos seletivos de pós-graduação e cursos de extensão.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://sig.ufabc.edu.br/sigaa/public" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sie.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">SIE - Sistema de Informações para o Ensino</h5>
                  <p class="card-text">Sistema de Gerenciamento Acadêmico-administrativo que abrange alunos, servidores, bolsas e patrimônio da instituição.</p>
                </div>
                <div class="card-footer">
                  <p><small>Sistema com acesso local apenas</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sigaa.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">SIGAA</h5>
                  <p class="card-text">Sistema Integrado de Gestão Acadêmica. Sistema desenvolvido pela Rede de Cooperação de Universidades e Institutos Federais liderados pela UFRN para a realização da Gestão Acadêmica de todos os níveis de ensino das instituições. Este sistema administra turmas e matrículas em aulas presenciais e semi-presenciais.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://sig.ufabc.edu.br/sigaa" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sigrh.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">SIGRH</h5>
                  <p class="card-text">Sistema Integrado de Gestão de Recursos Humanos. Sistema desenvolvido pela Rede de Cooperação de Universidades e Institutos Federais liderados pela UFRN para a realização da Gestão de Pessoas das instituições. Este sistema administra as ações de pessoal de servidores e estagiários.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://sig.ufabc.edu.br/sigrh" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-nti.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">SISGP</h5>
                  <p class="card-text">Sistema do Programa de Gestão (teletrabalho) na UFABC.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://sisgp.ufabc.int.br" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sistema-alocacao.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Alocações</h5>
                  <p class="card-text">Sistema de Montagem da Grade das turmas ofertadas por período.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://alocacao-turmas.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-nti.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Associações</h5>
                  <p class="card-text">Sistema de vinculação de cursos e disciplinas para utilização de espaços físicos. O sistema também realiza o controle das convalidações da graduação.</p>
                </div>
                <div class="card-footer">
                  <p><small>Sistema com acesso local apenas</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/aval-prograd.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Avaliações da PROGRAD</h5>
                  <p class="card-text">Sistema que realiza a avaliação dos cursos e disciplinas da UFABC.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://avaliacoes.ufabc.edu.br/login" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sistema-inscricao.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Inscrições em Cursos</h5>
                  <p class="card-text">Sistema para realizar a inscrição em cursos específicos da graduação.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://inscricao-cursos.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/matriculas-graduacao.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Matrícula da Graduação</h5>
                  <p class="card-text">Sistema de Matrícula em disciplinas dos alunos da graduação.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://matricula.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/wekan.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Projetos - Kanban</h5>
                  <p class="card-text">Sistema de Gerenciamento de Projetos simples através de metodologia ágil.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://kanban.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/redmine.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sistema de Projetos - Redmine</h5>
                  <p class="card-text">Sistema de Gerenciamento de Projetos complexos e com equipes distribuídas.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://projetos.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-biblioteca.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Sophia - Biblioteca</h5>
                  <p class="card-text">Sistema para controle de empréstimo de livros da biblioteca.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="http://biblioteca.ufabc.edu.br" class=" btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-ufabc.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">UFABC</h5>
                  <p class="card-text">Aplicativo móvel para alunos da UFABC que disponibiliza: Notícias, Eventos, Cardápio do RU, Linhas e rotas dos fretados, Agenda de contatos, Minhas Disciplinas da Graduação.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.ufabc.gudeidea&hl=pt_BR" class="btn btn-success">Android</a>
                  <a target="_blank" href="https://apps.apple.com/br/app/ufabc/id1417961758" class="btn btn-success">IOS</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/sig-eleicao.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Votação - SigEleição</h5>
                  <p class="card-text">Sistema desenvolvido pela Rede de Cooperação de Universidades e Institutos Federais liderados pela UFRN para a realização de eleições.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://votacao.ufabc.edu.br/sigeleicao/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/logo-ufabc.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">VPN</h5>
                  <p class="card-text">Ferramenta para acesso aos sistemas e rede interna da universidade quando fora desta.</p>
                </div>
                <div class="card-footer">
                  <p><small>Consultar a seção “Tutoriais” para uso.</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4 py-2">
              <div class="card h-100">
                <div class="w-100 d-flex justify-content-center align-items-center div-image-sistemas">
                  <img class="card-img-top" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais-fundo/webmail.png" alt="Card image cap">
                </div>
                <hr class="m-0">
                <div class="card-body">
                  <h5 class="card-title">Webmail</h5>
                  <p class="card-text">Sistema de gerenciamento de e-mails dos usuários da UFABC.</p>
                </div>
                <div class="card-footer">
                  <a target="_blank" href="https://webmail.ufabc.edu.br/" class="btn btn-success">Acessar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
<?php get_footer(); ?>