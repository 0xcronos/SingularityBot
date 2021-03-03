# SingularityBot
> Bot de Discord que muestra significados de palabras, entre otros.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

SingularityBot es un bot para servidores de Discord, el cual, entre varias otras utilidades, te permitirá consultar significados
de la RAE desde la comodidad de tu servidor.

![](https://i.ibb.co/3ktPqnS/meaning.png)

## Installation

Download dependencies.

```sh
npm install
```

Edit src/config.js.

```sh
{
    "prefix": "prefix-here",
    "token": "token-here",
    "defaultRole": "default-role-here"
}
```

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

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Diego Muñoz – [LinkedIn](linkedin.com/in/diegomuñozm) – 0xcronos@gmail.com

Distribuido bajo la licencia GNU General Public License v3.0. Mira ``LICENSE`` para mas información.

[https://github.com/0xCronos/](https://github.com/0xCronos/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
