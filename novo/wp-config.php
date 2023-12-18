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
define( 'DB_NAME', 'nti-novo' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         'k[T;SrL2K&O_gE2fC`-1ZWcJ|HKi ?40u[rhMhvh=n}oOIjE3i3.z0~`%A@s!I1n' );
define( 'SECURE_AUTH_KEY',  'oQkBsmZ~,?^j$U;VmR}SYueYWiQ,nF?7F)wyi6]5Qu6o2cto,UeNox^rO&0T](u1' );
define( 'LOGGED_IN_KEY',    'Z94cwQ4#%l*vbxWKJIbai?n`gQ>0=}]:ImUwjf(Q4%EV}<ufUH)he~qN@Ygt/,J^' );
define( 'NONCE_KEY',        'OV>3E{^ZeT &a;j{Eny&tjQf4Y,^i]3|T1?R?7;z;a3L?-A+kK+3aPF<Z&I0Jv^]' );
define( 'AUTH_SALT',        'inV&>. JbB9<}Gl:61Gst&AO&o9SVa*9usUq5b.d_?,e$Ds<G&Dy1[GV{9C+x1=D' );
define( 'SECURE_AUTH_SALT', 'w<;:,;12c6y;g.jv9`3!#0+y,+&+VF?OV:.?)l1HJ!7wo)t~U-G[kMZ@Qo9q9iA5' );
define( 'LOGGED_IN_SALT',   'b4=iV$/wY*IRDYLIrbV5^M;`nZ$=|crrXf_Ji[?+^nf@u., R(&>2~P*DULT2<WK' );
define( 'NONCE_SALT',       'I7(q0F(<9B+[<nZ-<S!kvZIl;u2|MOv X3FsXGyqq}8/kk`zzDEu%w,^r_YGDz>C' );

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
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
