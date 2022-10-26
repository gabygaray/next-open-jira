//Contexto creado con snipped => ctrl + shift + p => buscar snippeds => buscar react => seleccionar typescripts => configurar el snippet

import { createContext } from "react";

interface ContextProps {
  //States
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void; //Podemos obtener como definir el methods aquí observando el error eque nos arroja en el UIProvider.
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
