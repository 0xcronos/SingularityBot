# SingularityBot
> Bot de Discord multitarea conectado al sitio de la RAE.

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

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

Distribuido bajo la licencia GPL-3.0
<br/><br/>
Ve a ``LICENSE`` para mas información.

[https://github.com/0xCronos/](https://github.com/0xCronos/)

## Contributing

1. Fork it (<https://github.com/0xCronos/SingularityBot/fork>)
2. Crea tu propio branch (`git checkout -b feature/SingularityBot`)
3. Realiza los cambios (`git commit -am 'Add some fooBar'`)
4. Subelo a tu branch (`git push origin feature/SingularityBot`)
5. Crea una pull request


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/0xCronos/SingularityBot.svg?style=for-the-badge
[contributors-url]: https://github.com/0xCronos/SingularityBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/0xCronos/SingularityBot.svg?style=for-the-badge
[forks-url]: https://github.com/0xCronos/SingularityBot/network/members
[stars-shield]: https://img.shields.io/github/stars/0xCronos/SingularityBot.svg?style=for-the-badge
[stars-url]: https://github.com/0xCronos/SingularityBot/stargazers
[license-shield]: https://img.shields.io/github/license/0xCronos/SingularityBot.svg?style=for-the-badge
[license-url]: https://github.com/0xCronos/SingularityBot/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/diegomuñozm
