# Arquitectura Backend ECommerce

Para comenzar, me centraria en arquitectura pensada en el dominio de la aplicacion y la responsabilidad unica de cada componente, modulo, etc.

Separaria las carpetas de la siguiente forma

- /src
  - /controllers # Son el punto de entrada a la aplicacion, se encargaran de recibir peticiones
  - /models # El punto central de nuestra aplicacion, toda la informacion de los modelos necesarios
    - /collections # En caso de que se use NoSQL vamos a querer segmentar nuestros modelos
  - /repositories # Se almacena el acceso a los datos, para que el punto de acceso a la aplicacion y sus servicios sea agnostico a la tecnologia que usamos
  - /services # Logica de negocio, aqui se procesaran todos los cambios, agregacion, actualizacion y demas cosas necesarias
  - /middlewares # Aqui podremos guardar ya sean interceptors o middlewares customs que requiramos
  - /utils # Todos los pequenos scripts que pueden ser reutilizados a lo largo de la aplicacion, como un logger, manejador de listas, etc.
  - /interfaces # Todos los contratos de la aplicacion necesario para organizar nuestras respuestas, recibir parametros, etc.
  - /validators # Almacena todos los validadores que se usan en los bodys y params de los controllers
  - /classes # Todas las clases necesarias que pueden ser reutilizados a lo largo de la aplicacion
  - /server # Carpeta que almacena nuestro inicio del servidor
    - server.ts # Archivo que permite crear una instancia de la aplicacion y correrla
  - /workers # En esta carpeta podemos manejar todo lo que tiene que ver con colas de mensajeria y procesamiento de mensajes
  - index.ts # Inicio de nuestra aplicacion.
  - app.ts # La aplicacion en si, con todas las librerias o configuraciones, morgan, logger, swagger, prometheus, etc.
- /secrets # Almacena los secretos, public keys, certificates
- /logs # Logs de la aplicacion

Esta arquitectura esta bien distribuida para mantener un orden y coherencia a la hora de desarrollar nuevas features, que permita ser facil de leer y hacerle seguimiento a como esta construido el servicio.

Aqui se piensa totalment SOLID, pensando mucho en el principio de unica responsabilidad, la inversion de dependencias, tratando de aplicar inyeccion de dependencias y segregacion de interfaces, permitiendo crear contratos que nos permitan crear clases apartir de ellos y no tener que modificar muchas veces una misma clase, haciendola extensa.

Esta arquitectura la realizo pensando en como se ve el framework NestJS, sin embargo es perfectamente aplicable a Express.

Que haria para cumplir con todos los requisitos?

Usaria claramente TypeScript, nos permite un desarrollo mas ordenado, legible y podemos evitar muchos errores en tiempo de desarrollo. De la mano de esta, van muchas dependencias super utiles:

- Routing controllers: Una potente libreria que nos permite crear controllers a base de decoradores y tambien crear una aplicacion de express rapido.
- typedi: una libreria liviana que nos permite aplicar la inyeccion de dependencias
- class-transformer: Nos permite manejar objetos como si fueran clases
- class-validator: Libreria que se enfoca en el uso de decoradores para validar objetos javascript
- typeorm: Potente libreria que hace como ORM, de aqui nace la base para crear conexiones a distintas bases de datos
- morgan: Nos permite ver de manera clara y sencilla los logs de nuestra aplicacion
- winston: libreria que nos permite crear archivos logs o guardarlos en bases de datos
