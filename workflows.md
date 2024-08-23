# Understand workflows

Fluxos de trabalho para trabalhar com o git de forma colaborativa. 

### Gitflow

Criam-se branchs dependentes da branch que reflete o ambiente de desenvolvimento, com prefixos que designam seus objetivos, se é introduzir uma nova funcionalidade (feature) ou mesmo corrigir algum bug (fix).

A branch principal, normalmente é designada para produção.
As branchs de fix ou feature serão integradas a ramificação que designa o ambiente de desenvolvimento, geralmente dev.

Em algum momento a branch de desenvolvimento vai ser promovida a se tornar uma nova versão, para no futuro ser integrada ao ambiente de produção, mas antes passará por um ambiente intermediário, onde é gerada ali uma nova versão de release, e o nome da branch geralmente é release. 

Na ramificação de release, esse código é passado pelos estágios de qualidade para ser então promovido a integrar uma nova versão para a branch principal e gerar uma nova versão da aplicação produtiva. 

Caso haja algum problema descoberto em ambiente de produção, é criada uma nova ramificação descendnte da branch principal que está relacionada ao ambiente produtivo, e então, é feita sua correção em uma branch com prefixo hotfix. 

Ao corrigir o bug, a branch com prefixo hotfix é mesclada com a branch principal e se houver necessidade, também será mesclada com o ambiente de desenvolvimento, isso evita que as próximas entregas substituam alguma correção já realizada em ambiente produtivo. 
