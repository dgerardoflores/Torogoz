<div align="center">
    <img src="./.github/torogoz.png" width="200px">
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

### Validación de DUI

Tu puedes validar un Documento Único de Identidad (DUI)

```js
import { Torogoz, TypeDocuments } from 'torogoz';

const isValid = Torogoz.validateDocument({
  typeDocument: TypeDocuments.DUI,
  document: '00160177-3' // El DUI fue tomado de Google para efectos de prueba
});

console.log(isValid);
```

### Validación de NIT

Tu puedes validar un Número de identificación tributaria, aunque ten en cuenta que este documento dejará de utilizarse debido a la nueva regulación el 24 de diciembre de 2021

```js
import { Torogoz, TypeDocuments } from 'torogoz';

const isValid = Torogoz.validateDocument({
  typeDocument: TypeDocuments.NIT,
  document: '0614-290209-000-0' // El NIT fue tomado de Google para efectos de prueba
});

console.log(isValid);
```

### Obtener departamentos

Puedes obtener todos los departamentos de El Salvador como un areglo de objetos de Javascript para que pueda ser utilizado en tus sistemas, como por ejemplo: un select o combobox, a continuación te mostramos un ejemplo de como se veria:
<br>
| id | name (Nombre) | departmentalCapital (Cabecera departamental) | ISO (Código ISO) | expansion (Extensión territorial) |
|----|---------------|----------------------------------------------|------------------|-----------------------------------|
| 01 | Ahuachapán    | departmentalCapital                          | SV-AH            | 1239.6                            |

```js
import { Torogoz, TypeDocuments } from 'torogoz';

const deparments = Torogoz.getDepartments();

console.log(deparments);
```

### Obtener municipios por departamento

Puedes obtener todos los municipios de un departamento utilizando el ID que obtuviste al listar los departamentos, con esto puedes crear facilmente selects o combobox dependientes, a cotinuación de mostramos un ejemplo de como se veria:

| id   | name (Nombre) | cantons (Cantones) | postalCode (Código postal) |
|------|---------------|--------------------|----------------------------|
| 0101 | Ahuachapán    | 29                 | 02101                      |
<br>
```js
import { Torogoz, TypeDocuments } from 'torogoz';

const municipalities = const deparments = Torogoz.getMunicipalities('01');

console.log(municipalities);
```