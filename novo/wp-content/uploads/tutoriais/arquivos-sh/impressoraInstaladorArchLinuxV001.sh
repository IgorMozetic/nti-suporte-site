#!/bin/bash

#update:
pacman -Syu


#instalação do pacote samba:
pacman -S --noconfirm samba


systemctl enable smbd nmbd
systemctl restart smbd nmbd


#instalação do pacote cups:
pacman -S --noconfirm cups


systemctl restart cups


#instalação do pacote wget:
pacman -S --noconfirm wget


echo "Digite seu username UFABC (sem o @ufabc.edu...), e em seguida pressione Enter:" 
read usuario
echo "Digite sua senha (a senha do email UFABC), e em seguida pressione Enter:" 
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
senha="${senha//\]/%5D}"
senha="${senha//\^/%5E}"
senha="${senha//_/%5F}"
senha="${senha//\`/%60}"




senha="${senha//\{/%7B}"
senha="${senha//\|/%7C}"
senha="${senha//\}/%7D}"
senha="${senha//\~/%7E}"




wget https://nti.ufabc.edu.br/images/manuais/impressao/drivers-linux/Lexmark_X656de.ppd
lpadmin -p Impressora-de-Rede -o printer-is-shared=true -v smb://$usuario:$senha@172.17.3.227/Lexmark%20Server -P "Lexmark_X656de.ppd" -E

systemctl stop cups
systemctl start cups




