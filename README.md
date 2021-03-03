# SingularityBot
> Bot de Discord que muestra significados de palabras, entre otros.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

SingularityBot es un bot para servidores de Discord, el cual, entre varias otras utilidades, te permitirá consultar significados
de la RAE desde la comodidad de tu servidor.

![](https://i.ibb.co/3ktPqnS/meaning.png)

## Instalación

1) Primero descarga las dependencias:

```sh
npm install
```

2) Configura src/config.js:

```sh
{
    "prefix": "prefix-here",
    "token": "token-here",
    "defaultRole": "default-role-here"
}
```

3) Inicia el servidor de Nodejs:

```sh
npm run start
```

4) Añade al bot a tu servidor y disfruta!


## Comandos disponibles

```sh
- meaning
- help
- avatar
- cat
- server
- getroles
- setrole
- kick
- clear
- reload
```

## Historial de versiones

* 1.0.0
    * Primera versión estable.

## Meta

Diego Muñoz – [LinkedIn](linkedin.com/in/diegomuñozm) – 0xcronos@gmail.com

Distribuido bajo la licencia GNU General Public License v3.0.
<br />
Ve a ``LICENSE`` para mas información.

[License](https://github.com/0xCronos/SingularityBot/blob/master/LICENSE)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Crea tu propio branch (`git checkout -b feature/SingularityBot`)
3. Realiza los cambios (`git commit -am 'Add some fooBar'`)
4. Subelo a tu branch (`git push origin feature/SingularityBot`)
5. Crea una pull request
