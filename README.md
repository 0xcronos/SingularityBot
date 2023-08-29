# SingularityBot
> Consulta el significado de palabras en español desde la comodidad de tu servidor!
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

SingularityBot es un bot para servidores de Discord, cuya principal funcionalidad te permitirá consultar el significado
de palabras desde el sitio oficial de la RAE. Para lograr esto se realizó web scraping al sitio oficial de la RAE, por lo que las definiciones serán muy acertadas.
> IMPORTANTE: Este repositorio ha sido deprecado y no se asegura su correcto funcionamiento, si de todos modos deseas usarlo probablemente haya que arreglar algunos bugs!

![](https://i.ibb.co/3ktPqnS/meaning.png)

## Invita a Singularity a tu servidor
Añade a Singularity a tu servidor de discord mediante esta
[Invitación](https://discord.com/api/oauth2/authorize?client_id=741808912692543498&permissions=215104&scope=bot)

## Comandos disponibles

```sh
- meaning
- avatar
- server
- help
```

## Instalación para desarrolladores

1) Instala las dependencias:

```sh
npm install
```

2) Crea un archivo .env en la ruta SingularityBot/ y pega lo siguiente:
```sh
PREFIX=prefix-here
TOKEN=token-here
```

5) Crea un bot en https://discord.com/developers/applications

6) Copia el token de tu bot en .env y ponle un prefix a tus comandos (esto afecta como se llamarán tus comandos, ej: !meaning)
```sh
PREFIX=!
TOKEN=copia-el-token-de-tu-bot-aqui
```

4) Inicia la aplicación

```sh
npm run start
```

4) Añade el bot a tu servidor y disfrutar!

## Historial de versiones

* 1.0.0
    * Primera versión estable.

## Meta

Diego Muñoz – [LinkedIn](linkedin.com/in/diegomuñozm) – 0xcronos@gmail.com

Distribuido bajo la licencia GPL-3.0. Ve a ``LICENSE`` para obtener mas información.

[Ver licencia](https://github.com/0xCronos/SingularityBot/blob/master/LICENSE)

## Quiero contribuir

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
