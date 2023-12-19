#!/bin/bash
dnf -y update



#instalação do pacote samba:
dnf install -y samba

#instalação do pacote cups:
dnf install -y cups


echo "Entre com o seu username UFABC (sem o @ufabc.edu...):" 
read usuario
echo "Entre com a sua senha (a senha do email UFABC):" 
read -s senha


senha="${senha//\%/%25}"       





senha="${senha//!/%21}"
senha="${senha//\"/%22}"
senha="${senha//\#/%23}"
senha="${senha//$/%24}"
senha="${senha//\&/%26}"
senha="${senha//\'/%27}"
senha="${senha//\(/%28}"
senha="${senha//\)/%29}"
senha="${senha//\*/%2A}"
senha="${senha//\+/%2B}"
senha="${senha//,/%2C}"
senha="${senha//-/%2D}"
senha="${senha//./%2E}"
senha="${senha//\//%2F}"




senha="${senha//\:/%3A}"
senha="${senha//;/%3B}"
senha="${senha//\</%3C}"
senha="${senha//=/%3D}"
senha="${senha//\>/%3E}"
senha="${senha//\?/%3F}"
senha="${senha//@/%40}"



senha="${senha//\[/%5B}"

senha="${senha//\\/%5C}"

senha="${senha//\]/%5D}"
senha="${senha//\^/%5E}"
senha="${senha//_/%5F}"
senha="${senha//\`/%60}"




senha="${senha//\{/%7B}"
senha="${senha//\|/%7C}"
senha="${senha//\}/%7D}"
senha="${senha//\~/%7E}"




#senha="${senha// /%7F}"    #%7F             NAO FUNCIONA
senha="${senha//€/%E2%82%AC}"    #%80
#senha="${senha// /%81}"    #%81             NAO FUNCIONA
senha="${senha//‚/%E2%80%9A}"    #%82
senha="${senha//ƒ/%C6%92}"    #%83
senha="${senha//„/%E2%80%9E}"    #%84
senha="${senha//…/%E2%80%A6}"    #%85
senha="${senha//†/%E2%80%A0}"    #%86
senha="${senha//‡/%E2%80%A1}"    #%87
senha="${senha//ˆ/%CB%86}"    #%88
senha="${senha//‰/%E2%80%B0}"    #%89
senha="${senha//Š/%C5%A0}"    #%8A
senha="${senha//‹/%E2%80%B9}"    #%8B
senha="${senha//Œ/%C5%92}"    #%8C
#senha="${senha// /%C5%8D}"    #%8D             NAO FUNCIONA
senha="${senha//Ž/%C5%BD}"    #%8E
#senha="${senha// /%8F}"    #%8F             NAO FUNCIONA
#senha="${senha// /%C2%90}"    #%90             NAO FUNCIONA
senha="${senha//‘/%E2%80%98}"    #%91
senha="${senha//’/%E2%80%99}"    #%92
senha="${senha//“/%E2%80%9C}"    #%93
senha="${senha//”/%E2%80%9D}"    #%94
senha="${senha//•/%E2%80%A2}"    #%95
senha="${senha//–/%E2%80%93}"    #%96
senha="${senha//—/%E2%80%94}"    #%97
senha="${senha//˜/%CB%9C}"    #%98
#senha="${senha// /%E2%84}"    #%99             NAO FUNCIONA
senha="${senha//š/%C5%A1}"    #%9A
#senha="${senha// /%E2%80}"    #%9B             NAO FUNCIONA
senha="${senha//œ/%C5%93}"    #%9C
#senha="${senha// /%9D}"    #%9D             NAO FUNCIONA
senha="${senha//ž/%C5%BE}"    #%9E
senha="${senha//Ÿ/%C5%B8}"    #%9F
#senha="${senha// /%C2%A0}"    #%A0             NAO FUNCIONA
senha="${senha//¡/%C2%A1}"    #%A1
senha="${senha//¢/%C2%A2}"    #%A2
senha="${senha//£/%C2%A3}"    #%A3
senha="${senha//¤/%C2%A4}"    #%A4
senha="${senha//¥/%C2%A5}"    #%A5
senha="${senha//¦/%C2%A6}"    #%A6
senha="${senha//§/%C2%A7}"    #%A7
senha="${senha//¨/%C2%A8}"    #%A8
senha="${senha//©/%C2%A9}"    #%A9
senha="${senha//ª/%C2%AA}"    #%AA
senha="${senha//«/%C2%AB}"    #%AB
senha="${senha//¬/%C2%AC}"    #%AC
senha="${senha//­/%C2%AD}"    #%AD             NAO FUNCIONA
senha="${senha//®/%C2%AE}"    #%AE
senha="${senha//¯/%C2%AF}"    #%AF
senha="${senha//°/%C2%B0}"    #%B0
senha="${senha//±/%C2%B1}"    #%B1
senha="${senha//²/%C2%B2}"    #%B2
senha="${senha//³/%C2%B3}"    #%B3
senha="${senha//´/%C2%B4}"    #%B4
senha="${senha//µ/%C2%B5}"    #%B5
senha="${senha//¶/%C2%B6}"    #%B6
senha="${senha//·/%C2%B7}"    #%B7
senha="${senha//¸/%C2%B8}"    #%B8
senha="${senha//¹/%C2%B9}"    #%B9
senha="${senha//º/%C2%BA}"    #%BA
senha="${senha//»/%C2%BB}"    #%BB
senha="${senha//¼/%C2%BC}"    #%BC
senha="${senha//½/%C2%BD}"    #%BD
senha="${senha//¾/%C2%BE}"    #%BE
senha="${senha//¿/%C2%BF}"    #%BF
senha="${senha//À/%C3%80}"    #%C0
senha="${senha//Á/%C3%81}"    #%C1
senha="${senha//Â/%C3%82}"    #%C2
senha="${senha//Ã/%C3%83}"    #%C3
senha="${senha//Ä/%C3%84}"    #%C4
senha="${senha//Å/%C3%85}"    #%C5
senha="${senha//Æ/%C3%86}"    #%C6
senha="${senha//Ç/%C3%87}"    #%C7
senha="${senha//È/%C3%88}"    #%C8
senha="${senha//É/%C3%89}"    #%C9
senha="${senha//Ê/%C3%8A}"    #%CA
senha="${senha//Ë/%C3%8B}"    #%CB
senha="${senha//Ì/%C3%8C}"    #%CC
senha="${senha//Í/%C3%8D}"    #%CD
senha="${senha//Î/%C3%8E}"    #%CE
senha="${senha//Ï/%C3%8F}"    #%CF
senha="${senha//Ð/%C3%90}"    #%D0
senha="${senha//Ñ/%C3%91}"    #%D1
senha="${senha//Ò/%C3%92}"    #%D2
senha="${senha//Ó/%C3%93}"    #%D3
senha="${senha//Ô/%C3%94}"    #%D4
senha="${senha//Õ/%C3%95}"    #%D5
senha="${senha//Ö/%C3%96}"    #%D6
senha="${senha//×/%C3%97}"    #%D7
senha="${senha//Ø/%C3%98}"    #%D8
senha="${senha//Ù/%C3%99}"    #%D9
senha="${senha//Ú/%C3%9A}"    #%DA
senha="${senha//Û/%C3%9B}"    #%DB
senha="${senha//Ü/%C3%9C}"    #%DC
senha="${senha//Ý/%C3%9D}"    #%DD
senha="${senha//Þ/%C3%9E}"    #%DE
senha="${senha//ß/%C3%9F}"    #%DF
senha="${senha//à/%C3%A0}"    #%E0
senha="${senha//á/%C3%A1}"    #%E1
senha="${senha//â/%C3%A2}"    #%E2
senha="${senha//ã/%C3%A3}"    #%E3
senha="${senha//ä/%C3%A4}"    #%E4
senha="${senha//å/%C3%A5}"    #%E5
senha="${senha//æ/%C3%A6}"    #%E6
senha="${senha//ç/%C3%A7}"    #%E7
senha="${senha//è/%C3%A8}"    #%E8
senha="${senha//é/%C3%A9}"    #%E9
senha="${senha//ê/%C3%AA}"    #%EA
senha="${senha//ë/%C3%AB}"    #%EB
senha="${senha//ì/%C3%AC}"    #%EC
senha="${senha//í/%C3%AD}"    #%ED
senha="${senha//î/%C3%AE}"    #%EE
senha="${senha//ï/%C3%AF}"    #%EF
senha="${senha//ð/%C3%B0}"    #%F0
senha="${senha//ñ/%C3%B1}"    #%F1
senha="${senha//ò/%C3%B2}"    #%F2
senha="${senha//ó/%C3%B3}"    #%F3
senha="${senha//ô/%C3%B4}"    #%F4
senha="${senha//õ/%C3%B5}"    #%F5
senha="${senha//ö/%C3%B6}"    #%F6
senha="${senha//÷/%C3%B7}"    #%F7
senha="${senha//ø/%C3%B8}"    #%F8
senha="${senha//ù/%C3%B9}"    #%F9
senha="${senha//ú/%C3%BA}"    #%FA
senha="${senha//û/%C3%BB}"    #%FB
senha="${senha//ü/%C3%BC}"    #%FC
senha="${senha//ý/%C3%BD}"    #%FD
senha="${senha//þ/%C3%BE}"    #%FE
senha="${senha//ÿ/%C3%BF}"    #%FF








lpadmin -p Impressora-de-Rede -o printer-is-shared=true -v smb://$usuario:$senha@172.17.3.227/Lexmark%20Server -E
service cups restart





