import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {NavLink} from 'react-router-dom';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Menu desplegable
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <NavLink to="/home"  activeClassName="active" className="men"> <MenuItem onClick={handleClose} MenuItem>Inicio</MenuItem></NavLink>
        <NavLink to="/blog" activeClassName="active" className="men"><MenuItem onClick={handleClose} MenuItem>Blog</MenuItem></NavLink>
        <NavLink to="/formulario" activeClassName="active" className="men"><MenuItem onClick={handleClose} MenuItem>Formulario</MenuItem></NavLink>
        <NavLink to="/peliculas" activeClassName="active" className="men"><MenuItem onClick={handleClose} MenuItem>Peliculas</MenuItem></NavLink>
        <NavLink to="/ruta-prueba" activeClassName="active" className="men"><MenuItem onClick={handleClose} MenuItem>Pagina 2</MenuItem></NavLink>
      </Menu>
    </div>
  );
}