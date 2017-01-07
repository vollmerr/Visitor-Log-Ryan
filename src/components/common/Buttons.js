import React, {PropTypes} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export const ButtonType = ({style, glyph, onClick, id}) => (
  <Button block bsStyle={style} bsSize="sm" className="outline" onClick={onClick} data-id={id}><Glyphicon glyph={glyph}/></Button>
);
