context

1) uiReducer: 
 - Creamos la acción.
 - Definimos en un switch el case, donde retornamos todo el estado y agregamos el que se modifica.


2)UIProvider:
 - Definimos la interface
 - Definimos los valores iniciales

3) UIContext:
 - Definir la nueva propiedad en las ContextProps

4) UIProvider:
 - Creamos la funcion que ejecutara el payload
 - Le pasamos la funcion al UIContext.Provider

5) UIContext: 
 - Definimos en el UIContext el methods

6) Ya podemos utilizar el context