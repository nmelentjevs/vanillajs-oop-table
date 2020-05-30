const makeModalContainerStyles = {
  display: 'none',
  ['justify-content']: 'center',
  ['align-items']: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  ['z-index']: 10,
};

const makeModalStyle = {
  display: 'flex',
  ['justify-content']: 'center',
  ['align-items']: 'center',
  ['flex-direction']: 'column',
  position: 'fixed',
  width: '400px',
  height: '400px',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  ['overflow-y']: 'hidden',
  ['background-color']: '#fff',
  ['border-radius']: '10px',
  ['box-shadow']: '2px 1px 30px 0px rgba(0,0,0,0.75)',
};

const makeModalCloseButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  border: 'none',
  ['font-size']: '1em',
  cursor: 'pointer',
};

const makeModalConfirmButtonStyle = {
  display: 'flex',
  color: 'green',
  border: '1px solid green',
  padding: '5px 10px',
  ['font-size']: '1.2em',
  cursor: 'pointer',
  ['border-radius']: '5px',
  background: 'white',
};

const createStyles = (style) => {
  let styleString = '';
  Object.keys(style).forEach((s) => {
    styleString += `${s}: ${style[s]};`;
  });
  return styleString;
};

const modalContainerStyles = createStyles(makeModalContainerStyles);
const modalStyle = createStyles(makeModalStyle);
const modalCloseButtonStyle = createStyles(makeModalCloseButtonStyle);
const modalConfirmButtonStyle = createStyles(makeModalConfirmButtonStyle);

export {
  modalContainerStyles,
  modalStyle,
  modalCloseButtonStyle,
  modalConfirmButtonStyle,
};
