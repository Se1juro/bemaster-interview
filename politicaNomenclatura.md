# Políticas de nomenclatura

## Base de datos

1. **Nombres de Tablas**: Utilizar nombres descriptivos y en plural. Preferir el uso de minúsculas y guiones bajos para separar palabras (**`snake_case`**).
   - Ejemplo: **`usuarios`**, **`productos`**, **`ordenes_de_compra`**.
2. **Nombres de Columnas**: Utilizar nombres descriptivos y en minúsculas. Preferir el uso de guiones bajos para separar palabras (**`snake_case`**).
   - Ejemplo: **`nombre_usuario`**, **`precio_producto`**, **`fecha_creacion`**.
3. **Nombres de Claves Primarias y Foráneas**: Utilizar nombres explícitos que indiquen su relación con la tabla y la columna a la que hacen referencia.
   - Ejemplo: **`usuario_id`** (clave foránea en la tabla **`productos`** que hace referencia al **`id`** en la tabla **`usuarios`**).
4. **Nombre de indices:** Utilizar nombres descriptivos haciendo referencia a la tabla en la que se encuentra y a la columna a la que se le aplica el indice.
   - Ejemplo: `index_post_on_user_id` (Indice que hace referencia al usuario que creo un post)

## **Variables y Funciones**

1. **Variables**: Utilizar nombres descriptivos y en minúsculas. Usar formato camelCase.
   - Ejemplo: **`userName`**, **`price`**, **`createdAt`**.
2. **Funciones y Métodos**: Utilizar verbos que describan la acción que realiza la función, seguidos de un nombre descriptivo en camelCase.
   - Ejemplo: **`calcTotalPurchase`**, `getNameUsers`, `getTopScoredRepos`.

## Clases

Para las clases usaremos el formato UpperCase, todas las clases deben ir en singular.

Ejemplo: `video`, `user`, `comment`

## Git

Para Git se usara la metodologia git flow. Existiran dos ramas principales `main` y `development` .

A partir de estas ramas naceran nuevas ramas como por ejemplo:

- feature
- release
- hotfix
- fix

Cada rama debe ir en el formato `tiporama/<id-task>-nombre-rama`

### Commits

Utilizar mensajes de commit claros y descriptivos que indiquen los cambios realizados.

Los commits deben ir en el siguiente formato:

`tipo-cambio: mensaje claro y descriptivo`

Ejemplo

`feat: Creacion endpoint para obtener el top 10 de repositorio de un usuario`

`fix: Solucionado Bug 73483, corregir error de validacion de email en el registro`
