import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../Theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Props {
  text: string;
  direccion: string;
}

export const NavButton = ({ text, direccion }: Props) => {
  
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.boton} onPress={() => navigation.dispatch(CommonActions.navigate({name: direccion}))}>
      <Text style={styles.textBoton}>{text}</Text>
    </TouchableOpacity>
  )
}
