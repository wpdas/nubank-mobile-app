import styled from 'styled-components/native';
import { ThemeProps } from '@theme';

const CardContainer = styled.View`
  flex: 1;
  background: ${(props: ThemeProps) => props.theme.current.secondaryColor};
  border-radius: 4px;
  margin: 0 20px;
  height: 86%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export default CardContainer;
