import { Button, Chip, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CssTextFlied = styled(TextField)({
  "& fieldset": {
    height: 56,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});

export const BlackButton = styled(Button)({
    height: 56,
    backgroundColor: 'black',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,

    '&:hover': {
        backgroundColor: 'red',
    },
});

export const BlackTags = styled(Chip)({
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'red',
        height: 26,
    },
});