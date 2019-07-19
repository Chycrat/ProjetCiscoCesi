#!/bin/bash
 # mdp ssh
#echo -n "Entrer le mot de passe de SSH"
# read -s -e password
# echo -ne '\n'
#echo -n "Entrer le mot de passe de ENABLE "
# read -s -e enable
# echo -ne '\n'
#Feed the expect script a device list & the collected passwords
for device in `cat device-list.txt`; do
./configurer-cisco.exp $device $password $enable ;
 done
