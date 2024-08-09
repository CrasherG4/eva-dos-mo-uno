import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { NavButton } from '../Components/NavButton'

export const Inicio = () => {
  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.textH1}>Bienvenido</Text>
      <View style={styles.contBotonesInicio}>
        <NavButton text='Imagen Uno' direccion='ImgUno'/>
        <NavButton text='Imagen Dos' direccion='ImgDos'/>
      </View>
      <View style={styles.contBotonesInicio}>
        <NavButton text='>=' direccion='MayorIgual'/>
        <NavButton text='<=' direccion='MenorIgual'/>
      </View>
    </View>
  )
}
