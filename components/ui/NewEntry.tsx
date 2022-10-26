import React, { useState, ChangeEvent, useContext } from "react";

import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext);
  const { addNewEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState("");
  const [touch, setTouch] = useState(false);

  const onTextFieldChangees = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAddingEntry(false);

    setTouch(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={inputValue.length <= 0 && touch && "Ingrese un valor"}
            error={inputValue.length <= 0 && touch}
            value={inputValue}
            onChange={onTextFieldChangees}
            onBlur={() => setTouch(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
