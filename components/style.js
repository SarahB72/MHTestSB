import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["2xl"].fontSize};
  line-height: ${(props) => props.theme.typography["2xl"].lineHeight};
  color: ${(props) => props.theme.colors.neutral[800]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const InfoText = styled.div`
  color: ${(props) => props.theme.colors.neutral[800]};
  display: flex;
  font-size: ${(props) => props.theme.typography.l.fontSize};
  justify-content: space-between;
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.space.s};

  p {
    align-self: center;
    margin-bottom: ${(props) => props.theme.space.s};
    text-align: left;
    width: 50%;

    &:nth-of-type(2) {
      background-color: ${(props) => props.theme.colors.green.light};
      border-radius: ${(props) => props.theme.space.m};
      color: ${(props) => props.theme.colors.green.default};
      font-weight: ${(props) => props.theme.fonts.weights.bold};
      padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.s};
      text-align: center;
      width: 50%;
    }
    &:only-child {
      width: 100%;
    }
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;

export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const AccountListItem = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.s};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;
