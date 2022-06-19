<div align="center">
    <img src="./src/assets/img/torogoz.png" width="200px">
  <h1>Torogoz</h1>
</div>
<p align="center">
  Torogoz es una librería con herramientas reutilizables y comunes para programadores salvadoreños
</p>
<p align="center">
   <a href=""><img src="https://img.shields.io/github/issues/gerardofloresdev/Torogoz" alt="Issues"></a>
   <a href=""><img src="https://img.shields.io/github/forks/gerardofloresdev/Torogoz" alt="Forks"></a>
   <a href=""><img src="https://img.shields.io/github/stars/gerardofloresdev/Torogoz" alt="Stars"></a>
    <a href=""><img src="https://img.shields.io/npm/dm/Torogoz?style=flat-square" alt="Downloads"></a>
   <a href=""><img src="https://img.shields.io/github/license/gerardofloresdev/Torogoz" alt="License"></a>
   <a href=""><img src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fgerardofloresdev%2FTorogoz.git" alt="Twitter"></a>
</p>

## ¿Cómo se instala?

### npm (recomendado)

```bash
$ npm install torogoz --save
```

### yarn

```bash
$ yarn add torogoz
```

## ¿Cómo se utiliza?

### Validación de documentos

Tu puedes validar un Documento Único de Identidad (DUI)

```js
import Torogoz from './src/core/torogoz.js';
import TypeDocuments from './src/interfaces/typeDocuments.js';

Torogoz.validateDocument({
    typeDocument: TypeDocuments.DUI,
    document: '05834969-4'
});
```