<?php

/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'nti');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'HL|5x/jDv@6]Me-NqQ2y-<<mMBP047dE7BKi#o$X!c]imUT%M*vMq@diiFAQ-=y&');
define('SECURE_AUTH_KEY',  'ouR#`Mp]^|*C3VVg>.a!BV,,+pU~~[;eYMXM:DDWt_(2jetMUx>D wOk8CHWMPI0');
define('LOGGED_IN_KEY',    '.Yy#]cq|5)|<g;_3(YDcT0bTKQ8I:)W&xQr}3|l) dDg{{3DW!7 MENKvV4l0iFw');
define('NONCE_KEY',        'aK3Z!Yo#oO`&w~/W#&19b;FX<bT5H}#ww1qMie-bGBwrkXz4@)[pxv:A>vM8Rh0d');
define('AUTH_SALT',        '7psWUK9F%4OWhNSWgX6YH:LB&zuF_RSLKldA2`@1>)hjc.bu;n/+V7F2w^o6Z 1I');
define('SECURE_AUTH_SALT', '>q#&;Dm:72gnb;RA8Nvn;uBNExWrKW6W-U[EYT<T+XdK/Pu7q{]Xv!M6LF`^)psh');
define('LOGGED_IN_SALT',   'zAdD+woctIuSiQ/wlg8A`j#&y0]*O{Efwyk_Nd|lB7<r#xdr$xO?E8@KuAsuuso$');
define('NONCE_SALT',       '$vt*tvC<~xV_U]n$]pwF-} 4 A~nm{$</Kunwu*%=xP1CMZ3gcH+t?wEMb*=QhSe');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if (!defined('ABSPATH')) {
        define('ABSPATH', __DIR__ . '/');
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
