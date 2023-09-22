
![Index app](./doc/assets/gRPC.png)

# gRPC_Youtube_Integration_CRUD_Nodejs
CRUD Rest gRPC app para integración de servicios de Youtube implementado con Nodejs, Expressjs, etc 

<br>

## Índice 📜

<details>
 <summary> Ver </summary>
 
 <br>
 
### Sección 1)  Descripción, configuración y tecnologías

 - [1.0) Descripción del Proyecto.](#10-descripción-)
 - [1.1) Ejecución del Proyecto.](#11-ejecución-del-proyecto-)
 - [1.2) Configuración del proyecto desde cero](#12-configuración-del-proyecto-desde-cero-)
 - [1.3) Tecnologías.](#13-tecnologías-)


### Sección 2) Endpoints y Ejemplos 
 
 - [2.0) EndPoints y recursos.](#20-endpoints-y-recursos-)

### Sección 3) Prueba de funcionalidad y Referencias
 
 - [3.0) Prueba de funcionalidad.](#30-prueba-de-funcionalidad-)
 - [3.1) Referencias.](#31-referencias-)


<br>

</details>



<br>

## Sección 1)  Descripción, configuración y tecnologías


### 1.0) Descripción [🔝](#índice-) 

<details>
  <summary>Ver</summary>
 <br>

### 1.0.0) Descripción General

  *  

 
 ### 1.0.1) Descripción Arquitectura y Funcionamiento
 
 * 

<br>

</details>


### 1.1) Ejecución del Proyecto [🔝](#índice-)

<details>
  <summary>Ver</summary>
  <br>
 
#### 1.1.0) Configuraciones iniciales
* Una vez creado un entorno de trabajo a través de algún ide, clonamos el proyecto
```git
git clone https://github.com/andresWeitzel/gRPC_Netflix_CRUD_Nodejs
```
* Nos posicionamos sobre el proyecto
```git
cd 'projectName'
```
* Instalamos la última versión LTS de [Nodejs(v18)](https://nodejs.org/en/download).
* Instalamos todas las librerías necesarias
```git
npm i
```
* Las variables de entorno utilizadas en el proyecto se mantienen para simplificar el proceso de configuración de las mismas. Es recomendado agregar el archivo correspondiente (.env) al .gitignore.
* El siguiente script configurado en el package.json del proyecto es el encargado de
   * Levantar el servidor con express (entorno productivo)
   * Levantar el servidor con express y nodemon (entorno local dev)
 ```git
 "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
```
* Ejecutamos la app desde terminal para entorno local.
```git
npm run dev
```
* Ejecutamos la app desde terminal para entorno productivo.
```git
npm start
```
* Si se presenta algún mensaje indicando qué el puerto 8080 ya está en uso, podemos terminar todos los procesos dependientes y volver a ejecutar la app
```git
npx kill-port 8080
npm run dev o npm start
```

 
<br>

</details>


### 1.2) Configuración del proyecto desde cero [🔝](#índice-)

<details>
  <summary>Ver</summary>
 <br>
 
#### 1.2.0) Configuraciones iniciales
* Una vez creado un entorno de trabajo a través de algún ide, clonamos el proyecto
```git
git clone https://github.com/andresWeitzel/gRPC_Netflix_CRUD_Nodejs
```
* Nos posicionamos sobre el proyecto
```git
cd 'projectName'
```
* Instalamos la última versión LTS de [Nodejs(v18)](https://nodejs.org/en/download)
* Abrimos una terminal desde vsc
* Inicializamos un proyecto nodejs
```git
npm init -y
```
* Creamos un archivo .gitignore y agregamos los files necesarios (por el momento node_modules)
```git
node_modules
```
* Creamos un direct source (src) para agregar toda la lógica de nuestra app
* Instalamos el plugin para [express (framework)](https://www.npmjs.com/package/express)
```git
npm i express
```
* Instalamos el plugin para [cors (gestión de recursos)](https://www.npmjs.com/package/cors)
```git
npm i cors
```
* Instalamos el plugin para [dotenv (variables de entorno)](https://www.npmjs.com/package/dotenv)
```git
npm i dotenv
```
* Instalamos el plugin para [morgan-middleware (errores, formatos, etc)](https://expressjs.com/en/resources/middleware/morgan.html)
```git
npm i morgan
```
* Instalamos el plugin para [nodemon (autoreload server)](https://www.npmjs.com/package/nodemon) de forma global
```git
npm i -g nodemon
```
* Instalamos el plugin para [nodemon (autoreload server)](https://www.npmjs.com/package/nodemon) para desarrollo
```git
npm i nodemon --save-dev
```
* Las variables de entorno utilizadas en el proyecto se mantienen para simplificar el proceso de configuración de las mismas. Es recomendado agregar el archivo correspondiente (.env) al .gitignore.
* El siguiente script configurado en el package.json del proyecto es el encargado de
   * Levantar el servidor con express (entorno productivo)
   * Levantar el servidor con express y nodemon (entorno local dev)
 ```git
 "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
```
* Ejecutamos la app desde terminal para entorno local.
```git
npm run dev
```
* Ejecutamos la app desde terminal para entorno productivo.
```git
npm start
```
* Si se presenta algún mensaje indicando qué el puerto 8080 ya está en uso, podemos terminar todos los procesos dependientes y volver a ejecutar la app
```git
npx kill-port 8080
npm run dev o npm start
```



<br>

</details>


### 1.3) Tecnologías [🔝](#índice-)

<details>
  <summary>Ver</summary>
 <br>

| **Tecnologías** | **Versión** | **Finalidad** |               
| ------------- | ------------- | ------------- |
| [SDK](https://www.serverless.com/framework/docs/guides/sdk/) | 4.3.2  | Inyección Automática de Módulos para Lambdas |
| [NodeJS](https://nodejs.org/en/) | 14.18.1  | Librería JS |
| [VSC](https://code.visualstudio.com/docs) | 1.72.2  | IDE |
| [Postman](https://www.postman.com/downloads/) | 10.11  | Cliente Http |
| [CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) | 10 | Símbolo del Sistema para linea de comandos | 
| [Git](https://git-scm.com/downloads) | 2.29.1  | Control de Versiones |

</br>


| **Plugin** | **Descripción** |               
| -------------  | ------------- |
| [Serverless Plugin](https://www.serverless.com/plugins/) | Librerías para la Definición Modular |

</br>


| **Extensión** |              
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

 

#### Documentación
* [Arquitectura protocolo gRPC](https://www2.deloitte.com/es/es/blog/todo-tecnologia/2021/grpc-vs-rest-api.html)
* [Web Api Spotify](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)
* [Implementación Arquitectura grpc part 1](https://netflixtechblog.com/practical-api-design-at-netflix-part-1-using-protobuf-fieldmask-35cfdc606518)
* [Implementación Arquitectura grpc part 2](https://netflixtechblog.com/practical-api-design-at-netflix-part-2-protobuf-fieldmask-for-mutation-operations-2e75e1d230e4)
* [Análisis de tiempo de ejecución protocolos Api's](https://www.youtube.com/watch?v=ryUIRdAgD00)

#### Ejemplos código
* [Crud grpc express-nodejs](https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/)
* [Videotutorial Crud grpc express-nodejs](https://www.youtube.com/watch?v=xBO7RohEhOY)


#### Librerías
* [Manejo de validaciones con express-validator](https://medium.com/dataseries/introduction-to-request-body-validation-in-express-apps-with-express-validator-7b9725ca780d)
* [Doc oficial express-validator](https://express-validator.github.io/docs/guides/getting-started)

<br>

</details>
