![Index app](./doc/assets/gRPC.png)

<div align="right">
    <a href="./translation/README.es.md" target="_blank">
      <img src="./doc/assets/translation/arg-flag.jpg" width="10%" height="10%" />
  </a> 
   <a href="./README.md" target="_blank">
      <img src="./doc/assets/translation/eeuu-flag.jpg" width="10%" height="10%" />
  </a>
</div>

<div align="center">

# gRPC\_IP\_Geolocation\_API\_Integration\_Nodejs

</div>  

gRPC protobuf api for the integration of IPWHOIS.IO services implemented with Nodejs, Expressjs, Jest, Testing, others.

*   [Playlist Prueba de Funcionalidad](https://www.youtube.com/playlist?list=PLCl11UFjHurD2RjD9OiBfyKpsgwEzZzBv)<a href="https://www.youtube.com/playlist?list=PLCl11UFjHurD2RjD9OiBfyKpsgwEzZzBv" target="_blank"> <img src="./doc/assets/social-networks/yt.png" width="5%" height="5%" /> </a>
*   [IPWHOIS.io api doc](https://ipwhois.io/documentation)

<br>

## Index 📜

<details>
 <summary> See </summary>

 <br>

### Section 1) Description, configuration and technologies

*   [1.0) Project Description.](#10-description-)
*   [1.1) Project Execution.](#11-project-execution-)
*   [1.2) Project setup from scratch](#12-project-setup-from-scratch-)
*   [1.3) Technologies.](#13-technologies-)

### Section 2) Endpoints and Examples

*   [2.0) EndPoints and resources.](#20-endpoints-and-resources-)

### Section 3) Functionality Testing and References

*   [3.0) Functionality test.](#30-functionality-test-)
*   [3.1) References.](#31-references-)

<br>

</details>

<br>

## Section 1) Description, configuration and technologies

### 1.0) Description [🔝](#index-)

<details>
  <summary>See</summary>
 <br>

### 1.0.0) General Description

*

### 1.0.1) Description Architecture and Operation

*

<br>

</details>

### 1.1) Project Execution [🔝](#index-)

<details>
   <summary>See</summary>
   <br>

#### 1.1.0) Initial settings

*   Once a work environment has been created through some IDE, we clone the project

```git
git clone https://github.com/andresWeitzel/gRPC_Netflix_CRUD_Nodejs
```

*   We position ourselves on the project

```git
cd 'projectName'
```

*   We install the latest LTS version of [Nodejs(v18)](https://nodejs.org/en/download).
*   We install all the necessary libraries

```git
npm i
```

*   The environment variables used in the project are maintained to simplify their configuration process. It is recommended to add the corresponding file (.env) to the .gitignore.
*   The following script configured in the project's package.json is responsible for
    *   Raise the server with express (productive environment)
    *   Raise the server with express and nodemon (local dev environment)

```git
"scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
```

*   We run the app from a terminal for a local environment.

```git
npm run dev
```

*   We run the app from a terminal for a productive environment.

```git
npm start
```

*   If a message appears indicating that port 8080 is already in use, we can terminate all dependent processes and run the app again

```git
npx kill-port 8080
npm run dev or npm start
```

<br>

</details>

### 1.2) Project configuration from scratch [🔝](#index-)

<details>
   <summary>See</summary>
  <br>

#### 1.2.0) Initial settings

*   Once a work environment has been created through some IDE, we clone the project

```git
git clone https://github.com/andresWeitzel/gRPC_Netflix_CRUD_Nodejs
```

*   We position ourselves on the project

```git
cd 'projectName'
```

*   We install the latest LTS version of [Nodejs(v18)](https://nodejs.org/en/download)
*   We open a terminal from vsc
*   We initialize a nodejs project

```git
npm init -y
```

*   We create a .gitignore file and add the necessary files (for the moment node\_modules)

```git
node_modules
```

*   We create a direct source (src) to add all the logic of our app
*   We install the plugin for [express (framework)](https://www.npmjs.com/package/express)

```git
npm i express
```

*   We install the plugin for [cors (resource management)](https://www.npmjs.com/package/cors)

```git
npm i cors
```

*   We install the plugin for [dotenv (environment variables)](https://www.npmjs.com/package/dotenv)

```git
npm i dotenv
```

*   We install the plugin for [morgan-middleware (errors, formats, etc)](https://expressjs.com/en/resources/middleware/morgan.html)

```git
npm i morgan
```

We install uuid for unique ids

```git
npm i uuid
```

*   We install the plugin for [nodemon (autoreload server)](https://www.npmjs.com/package/nodemon) globally

```git
npm i -g nodemon
```

*   We install the plugin for [nodemon (autoreload server)](https://www.npmjs.com/package/nodemon) for development

```git
npm i nodemon --save-dev
```

*   We install the libraries for the [gRPC compiler](https://www.npmjs.com/package/@grpc/proto-loader)

```git
npm i @grpc/proto-loader
```

*   The environment variables used in the project are maintained to simplify their configuration process. It is recommended to add the corresponding file (.env) to the .gitignore.
*   The following script configured in the project's package.json is responsible for
    *   Raise the server with express (productive environment)
    *   Raise the server with express and nodemon (local dev environment)

```git
"scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
```

*   We run the app from a terminal for a local environment.

```git
npm run dev
```

*   We run the app from a terminal for a productive environment.

```git
npm start
```

*   If a message appears indicating that port 8080 is already in use, we can terminate all dependent processes and run the app again

```git
npx kill-port 8080
npm run dev or npm start
```

<br>

</details>

### 1.3) Tecnologías [🔝](#índice-)

<details>
  <summary>Ver</summary>
 <br>

| **Tecnologías** | **Versión** | **Finalidad** |\
| ------------- | ------------- | ------------- |
| [SDK](https://www.serverless.com/framework/docs/guides/sdk/) | 4.3.2  | Inyección Automática de Módulos para Lambdas |
| [NodeJS](https://nodejs.org/en/) | 14.18.1  | Librería JS |
| [VSC](https://code.visualstudio.com/docs) | 1.72.2  | IDE |
| [Postman](https://www.postman.com/downloads/) | 10.11  | Cliente Http |
| [CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) | 10 | Símbolo del Sistema para linea de comandos |
| [Git](https://git-scm.com/downloads) | 2.29.1  | Control de Versiones |

</br>

| **Plugin** | **Descripción** |\
| -------------  | ------------- |
| [Serverless Plugin](https://www.serverless.com/plugins/) | Librerías para la Definición Modular |

</br>

| **Extensión** |\
| -------------  |
| Prettier - Code formatter |
| YAML - Autoformatter .yml (alt+shift+f) |

<br>

</details>

<br>

## Sección 2) Endpoints y Ejemplos.

### 2.0) Endpoints y recursos [🔝](#índice-)

<details>
  <summary>Ver</summary>
<br>

<br>

</details>

<br>

## Sección 3) Prueba de funcionalidad y Referencias.

### 3.0) Prueba de funcionalidad [🔝](#índice-)

<details>
  <summary>Ver</summary>
<br>

</details>

### 3.1) Referencias [🔝](#índice-)

<details>
  <summary>Ver</summary>
 <br>

#### IPWHOIS.io api doc

*   [Data Api](https://ipwhois.io/documentation)

#### Documentación

*   [Guía gRPC](https://www.ionos.es/digitalguide/servidores/know-how/que-es-grpc/)
*   [Arquitectura protocolo gRPC](https://www2.deloitte.com/es/es/blog/todo-tecnologia/2021/grpc-vs-rest-api.html)
*   [Web Api Spotify](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)
*   [Implementación Arquitectura grpc part 1](https://netflixtechblog.com/practical-api-design-at-netflix-part-1-using-protobuf-fieldmask-35cfdc606518)
*   [Implementación Arquitectura grpc part 2](https://netflixtechblog.com/practical-api-design-at-netflix-part-2-protobuf-fieldmask-for-mutation-operations-2e75e1d230e4)
*   [Análisis de tiempo de ejecución protocolos Api's](https://www.youtube.com/watch?v=ryUIRdAgD00)

#### Ejemplos código

*   [Ejemplo base](https://www.honeybadger.io/blog/building-apis-with-node-js-and-grpc/)
*   [Integración Api restful con rpc](https://blog.logrocket.com/communicating-between-node-js-microservices-with-grpc/)
*   [Crud grpc express-nodejs](https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/)
*   [Videotutorial Crud grpc express-nodejs](https://www.youtube.com/watch?v=xBO7RohEhOY)

#### Protocolo buffer (protobuf)

*   [Documentación recomendada](https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/)

*   [Crud grpc express-nodejs](https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/)

*   [Videotutorial Crud grpc express-nodejs](https://www.youtube.com/watch?v=xBO7RohEhOY)

#### Librerías

*   [Manejo de validaciones con express-validator](https://medium.com/dataseries/introduction-to-request-body-validation-in-express-apps-with-express-validator-7b9725ca780d)
*   [Doc oficial express-validator](https://express-validator.github.io/docs/guides/getting-started)

#### Remark-lint

*   [remark-lint-emphasis-marker](https://www.npmjs.com/package/remark-lint-emphasis-marker)
*   [remark-preset-lint-recommended](https://www.npmjs.com/package/remark-preset-lint-recommended)
*   [remark-reference-links](https://www.npmjs.com/package/remark-reference-links)

#### Jest

*   [Environment vars solution](https://stackoverflow.com/questions/48033841/test-process-env-with-jest)

<br>

<br>

</details>
