import React, { useContext, useMemo, DragEvent } from "react";

import { List, Paper } from "@mui/material";

import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces/";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  //El useMemo esta esperando una función que regrese un valor, y en el arreglo de dependencias se le indica cuando debe memorizarse nuevamente la función, es decir que cada vez que el valor del arreglo de dependencias cambie (similar al useEffect)
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find((e) => e._id === id)!; //Con el signo de ! al final le indicamos a TS que le aseguramos que siempre se va a recibir un valor.
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all 0.2s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
