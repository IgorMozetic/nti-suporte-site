#!/bin/bash


dataHora=$(date +'%d-%m-%Y-%H-%M-%S')
nomeArquivoDeteste=arquivoTeste$dataHora'.txt'
echo teste $(date +'%d/%m/%Y') às $(date +'%H:%M:%S')  > $nomeArquivoDeteste
chmod 755 $nomeArquivoDeteste



# log em modo normal
cupsctl --no-debug-logging
sudo launchctl stop org.cups.cupsd
sudo launchctl start org.cups.cupsd
lp -d Impressora-de-Rede-UFABC $nomeArquivoDeteste
dataHora=$(date +'%d-%m-%Y-%H-%M-%S')
cp /var/log/cups/error_log logErrosModoNormal$dataHora.txt
chmod 755 logErrosModoNormal$dataHora.txt


sleep 2

# log em modo de depuração
cupsctl --debug-logging
sudo launchctl stop org.cups.cupsd
sudo launchctl start org.cups.cupsd
lp -d Impressora-de-Rede-UFABC $nomeArquivoDeteste
cupsctl --no-debug-logging
sudo launchctl stop org.cups.cupsd
sudo launchctl start org.cups.cupsd
dataHora=$(date +'%d-%m-%Y-%H-%M-%S')
cp /var/log/cups/error_log logErrosModoDebug$dataHora.txt
chmod 755 logErrosModoDebug$dataHora.txt


#exclui arquivo de teste:
rm $nomeArquivoDeteste




