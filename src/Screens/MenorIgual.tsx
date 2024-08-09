import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { InputComponents } from '../Components/InputComponents';
import { NavButton } from '../Components/NavButton';

interface FormMIgual{
  numUno: number;
  numDos: number;
}

export const MenorIgual = () => {
  const texto: string = "<=";

  const [formMIgual, setFormMIgual] = useState<FormMIgual>({
    numUno: 0,
    numDos: 0
  });

  const [resultadoMayor, setResultadoMayor] = useState<number>(0);
  const [resultadoMenor, setResultadoMenor] = useState<number>(0);
  const [resultadoIgual, setResultadoIgual] = useState<boolean>(true);

  const handleSetValues = (name: string, value: number) => {
    setFormMIgual({ ...formMIgual, [name]: value })
    console.log(name);
    console.log(value);
  }

  // Mi función del MenorIgual
  const funMenorIgual = ({numUno, numDos}: FormMIgual) => {
    setResultadoIgual(false)

    if (numUno < numDos) {
      setResultadoMayor(numDos)
      setResultadoMenor(numUno)
    }
    else if (numDos < numUno) {
      setResultadoMayor(numUno)
      setResultadoMenor(numDos)
    }
    else {
      setResultadoIgual(true)
    }
  }

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.textH1}>Menor o Igual</Text>
      <View style={styles.contForm}>
        <InputComponents placeholder='Coloca el Primer Número' handleSetValues={handleSetValues} name='numUno'/>
        <InputComponents placeholder='Coloca el Segundo Número' handleSetValues={handleSetValues} name='numDos'/>
      </View>
      <TouchableOpacity onPress={() => funMenorIgual(formMIgual)} style={styles.boton}>
          <Text style={styles.textBoton}>{texto}</Text>
      </TouchableOpacity>
      {
        !resultadoIgual && (
          <Text>El número {resultadoMenor} es menor a {resultadoMayor}</Text>
        )
      }
      {
        resultadoIgual && (
          <Text>Los números son iguales</Text>
        )
      }
      <NavButton text='Atrás' direccion='Inicio'/>
    </View>
  )
}
