# Erro maldito react-native start

Erro que esta ocorrendo quando executa `npm start` ou `react-native start`

```
ERROR watch {_arquivo_} ENOSPC
```

Run the below command to avoid ENOSPC:
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

For Arch Linux add this line to /etc/sysctl.d/99-sysctl.conf:
`fs.inotify.max_user_watches=524288`

Then execute:
`sysctl --system`

This will also persist across reboots.


###### #react-native
