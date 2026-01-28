import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';
import top100Films from './film';

export default function ComboBox() {
  return (
    <AutoComplete
  
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
