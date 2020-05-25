import React, { DragEventHandler } from 'react';
import styled from '@emotion/styled';
import { Theme } from '../../../styles/defaultTheme';

const StyledForm = styled.form(() => ({
  marginTop: `1rem`,
  marginBottom: `1rem`
}));

const StyledInput = styled.input(({ theme }: { theme: Theme }) => ({
  outline: 'none',
  fontSize: theme.dimensions.fontSize.regular,
  lineHeight: theme.dimensions.lineHeight.regular * 1.5,
  letterSpacing: 2,
  borderWidth: 1,
  borderColor: theme.colors.gray.calm
}));

const StyledButton = styled.button(({ theme }: { theme: Theme }) => ({
  fontSize: theme.dimensions.fontSize.regular,
  lineHeight: theme.dimensions.lineHeight.regular * 1.5,
  marginLeft: `1rem`,
  letterSpacing: 2,
  cursor: 'pointer'
}));

type FormValues = {
  value1: string;
};

type InputDragEventHandler = DragEventHandler<HTMLInputElement>;

const onDragEnter: InputDragEventHandler = (e) => {
  e.currentTarget.style.borderStyle = 'dashed';
  e.currentTarget.removeAttribute('readonly');
};

const onDragLeave: InputDragEventHandler = (e) => {
  e.currentTarget.style.borderStyle = 'solid';
  e.currentTarget.setAttribute('readonly', '');
};

export const Form = () => {
  const [values, setValues] = React.useState<FormValues>({ value1: '' });

  const resetValues = () => {
    setValues({ value1: '' });
  };

  // todo: abstraction
  const onDrop: InputDragEventHandler = (e) => {
    if (e.currentTarget) {
      const { currentTarget, dataTransfer } = e;
      currentTarget.setAttribute('readonly', '');
      currentTarget.style.borderStyle = 'solid';

      const text = dataTransfer.getData('text');

      setValues(({ value1 }) => {
        const vArray = value1.split('');
        // for now, just append to the end.
        // it seems impossible to know at what selection index the drop is occurring before it happens.
        // selectionStart and selectionEnd are not updated as the drag is happening.
        const cursor = currentTarget.value.length;
        const newVal = [...vArray.splice(0, cursor), text, ...vArray.splice(0, cursor)];
        return { ...values, value1: newVal.join('') };
      });
      setTimeout(() => {
        currentTarget.blur();
      }, 0);
    }
  };

  return (
    <StyledForm>
      <StyledInput
        type="text"
        onDrop={onDrop}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
        value={values.value1}
        readOnly
      />
      <StyledButton type="button">Submit</StyledButton>
      {/* todo: replace with backspace? */}
      <StyledButton type="button" onClick={resetValues}>
        Clear
      </StyledButton>
    </StyledForm>
  );
};
