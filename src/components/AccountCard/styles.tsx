import styled from 'styled-components/native';

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const IconText = styled.Text`
  font-size: 15px;
  color: #898989;
  margin-left: 16px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #898989;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px 0;
  background: #f5f5f5;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AnnotationIconWrapper = styled.View`
  align-self: center;
  margin: 0 16px;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #555;
  width: 60%;
`;
