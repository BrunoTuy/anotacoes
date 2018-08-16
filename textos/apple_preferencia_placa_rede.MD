# Preferências placa de rede no Mac OSX

Acessar pasta que esta utilitario
Visualizar preferencias da placa en1
Mudar DisconnectOnLogout para NO na placa en1

```
cd /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources
./airport en1 prefs
sudo ./airport en1 prefs DisconnectOnLogout=NO
```

###### #apple
