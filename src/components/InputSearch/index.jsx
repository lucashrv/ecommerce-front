import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import {
  Input,
  ButtonIcon,
  ContainerSearch
} from './styled';
import './style.css'
import colors from './../../styles/colors';

export default function InputSearch(props) {
  const {
    onSubmit = () => { },
    onChange = () => { },
    value,
    loading
  } = props

  return (
    <ContainerSearch className='paper-search'>
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        height: 30,
        borderRadius: 15,
      }}
      onSubmit={onSubmit}
    >
      <Input
        spellCheck="false"
        type='text'
        value={value}
        onChange={onChange}
        disabled={loading}
      />
      {!loading && <>
        <ButtonIcon onSubmit={onSubmit} type="submit">
          <SearchIcon
            className='button-icon'
          />
        </ButtonIcon>
      </>}
      {loading && <>
        <ButtonIcon>
          <CircularProgress style={{ color: '#e00c0c', width: '20px', height: '20px' }} />
        </ButtonIcon>
      </>}

    </Paper >
    </ContainerSearch>
  )
}