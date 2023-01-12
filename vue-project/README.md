<h1 align="center">Proyecto Final: <em>Frontend</em></h1>

<img align="center" src="https://www.visitvaldaran.com/wp-content/uploads/2017/03/logo-val_aran.png" />


## 1. Configuración recomendada para iniciar el entorno de desarrollo integrado
Para la creación de esta parte del proyecto se ha empleado *Visual Studio Code* un potente 
editor de código fuente. A continuación se puede acceder a su descarga a través de la siguiente
dirección de enlace

[VSCode](https://code.visualstudio.com/) 

Para dar formato al código se ha empleado la extensión *Prettier*. Si se desea usarlo, se puede descargar
accediendo a la pestaña de extensiones del editor de código. 

También se recomienda instalar la extensión de *Live Server*. Herramienta que permite lanzar un servidor 
de desarrollo local para previsualizar en el navegador los cambios efectuados en el editor de código.


## 2. Configuración del proyecto

Una vez se ha descargado el proyecto se debe de abrir la carpeta correspondiente con el editor de código, abrir un 
nuevo terminal y escribir los comandos que se adjuntan a continuación. Finalmente, la terminal avisará en qué puerto
vamos a poder visualizar el proyecto. 

```sh
npm install
```

```sh
npm run dev
```

Se recomienda al usuario también descargar el proyecto backend con objetivo de poder visualizar todo el proyecto
al completo. 

## 3. *Framework*
El *framework* de JavaScript escogido para la elaboración de este proyecto es VUE.js 3. Todos los proyectos
creados en este marco de trabajo tienen la misma estructura.

<img src=" https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/vue-intro.png"/>

Se destacan los siguientes apartados:

-1. *Router*: biblioteca de enrutamiento oficial del lado del cliente que ha proporcionado las herramientas 
necesarias para asignar las vistas de la aplicación a diferentes rutas del navegador.

-2. *Stores*: donde se guardan los archivos relacionados con la gestión del estado, dicho de otro 
modo en la store de esta parte del proyecto se encuentran aquellas variables y métodos que son globales. 
Mediante el uso de pinia se han empleado estas variables y métodos en las vistas o componentes que se ha deseado. 

-3. *Components*: todos los componentes diseñados para la creación de la página web así como del blog. 

-4. *Views*: las vistas son aquello que finalmente el usuario puede ver en el navegador. Para dar forma
a cada una de las vistas se importan los componentes. 

-5. *Assets*: en esta carpeta el usuario podrá encontrar todas las imágenes que se han empleado para la 
construcción de la página web.



## 4. Descripción genérica del proyecto
Creación de la página web turística del Valle de Arán, con integración de un blog. 
Para poder acceder a la aplicación web los usuarios deben de crear en primer lugar una cuenta. 

<img alt="navbar" src="./src/assets/Captura de pantalla 2023-01-12 a las 17.59.41.png" >

### 4.1 Integración del backend con el frontend
Como se ha explicado de forma genérica el proyecto backend se ha consumido desde el frontend en el 
apartado de blog. 

En primer lugar, todos los usuarios que se hayan registrado estarán guardados en la base de datos
correspondiente, de forma que solo ellos podrán acceder al apartado blog. El resto de visitantes de la
página web solo tendrá acceso al resto de vistas. Cada usuario debe de registrarse con un email, contraseña
y nombre, y se le asignará automáticamente un identificador. 

Dentro del propio blog, tenemos un catálogo con todos los posts escritos por todos los usuarios registrados.
Estos posts se obtienen a partir del empleo del servicio de los posts que a su vez está conectado con una base
de datos independiente. 

Cada uno de los posts podrá ser modificado o borrado solamente por su autor, además de que cada usuario va a
poder realizar un post nuevo desde dentro de la aplicación web. 

Además, dentro del propio blog hay un apartado donde, mediante una serie de tarjetas interactivas cada uno de los 
usuarios va a poder visualizar el resto de usuarios (nombre, dirección de correo y posts realizados). Esta información
se obtiene a partir del servicio de blog, que dependía a su vez del servicio de posts y de usuarios (ver README.md 
del backend para más información). 

## 5. Herramientas

1. *Visual Studio Code*: editor de código fuente
2. Vue.js 3: *framework* de JavaScript
3. *Vue Router*
4.  Pinia

## 6. Autores
Teresa Mira Colomer 






