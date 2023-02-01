// import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import useAuth from '../../hooks/queries/useAuth';
import DevDropDown from './DevDropDown';
import NavDefault from './NavDefault';
import NavStudent from './NavStudent';
import NavTherapist from './NavTherapist';

export default function Navbar() {
  const { useStudentCheck, useTherapistCheck } = useAuth();
  const { data: student } = useStudentCheck();
  const { data: therapist } = useTherapistCheck();
  return (
    <S.NavHeader>
      <S.LogoLink to="/">
        <h1>마르마르</h1>
      </S.LogoLink>
      <DevDropDown />
      {!student && !therapist && <NavDefault />}
      {student && <NavStudent />}
      {therapist && <NavTherapist />}
    </S.NavHeader>
  );
}
const S = {
  NavHeader: styled.header`
    ${tw`flex justify-between border-b border-gray-300 p-2`}
  `,
  LogoLink: styled(Link)`
    ${tw`flex items-center text-4xl text-brand`}
  `,
};