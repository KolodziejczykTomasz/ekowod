import React from 'react';
import { Divider } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '80%',
  margin: '20px auto',
  height: '1.5px',
});

const DividerLine = () => <DividerColor />;

export default DividerLine;
