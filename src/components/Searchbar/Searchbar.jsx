import React, { Component } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSpan,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <StyledButton type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledButton>

        <StyledInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
