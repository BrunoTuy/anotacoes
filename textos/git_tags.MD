# git tags

Criar TAG
`git tag -a [nome da tag] -m "mensagem"`

Enviar TAG para repositório remoto
`git push --tags`

Remover TAG em repositório local
`git tag -d 12345`

Remover TAG em repositório remoto
`git push origin :refs/tags/12345`

Listar TAGs locais
`git tag -l`

Listar TAGs que estão no servidor remoto
`git ls-remote --tags`

Ir para determinada TAG
`git checkout [nome da tag]`

###### #git
