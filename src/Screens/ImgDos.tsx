import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { IMAGEN_DOS } from '../Common/imgTheme'
import { NavButton } from '../Components/NavButton'

export const ImgDos = () => {
  return (
    <View style={styles.contenedorAll}>
      <Image style={styles.imgScreen} source={{uri: IMAGEN_DOS}}/>
      <NavButton text='Atrás' direccion='Inicio'/>
    </View>
  )
}
