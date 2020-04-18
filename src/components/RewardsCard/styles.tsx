import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const CardHeader = styled.View`
  align-items: center;
  padding: 25px;
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
  align-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  text-align: center;
  padding: 0 10%;
  line-height: 22px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px 0;
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

export const ActiveButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #832a9a;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 16px 20%;
  margin-top: 15px;
`;

export const ActiveButtonText = styled.Text`
  color: #832a9a;
  font-weight: bold;
  font-size: 13px;
`;
