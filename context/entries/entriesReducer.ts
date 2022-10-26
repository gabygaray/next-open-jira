import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "[Entry] - Add-Entry"; payload: Entry }
  | { type: "[Entry] - Updated-Entry"; payload: Entry }
  | { type: "[Entry] - Refresh-Data"; payload: Entry[] };

//ES MALA PRACTICA UTILIZAR FUNCIONES EXTERNAS DENTRO DE UN REDUCER
export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] - Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entry] - Updated-Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          //Actualizamos la lista de entrys con el que hacemos el drop.
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case "[Entry] - Refresh-Data":
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};