import { StyleSheet } from "react-native";
import { COLOR_P, COLOR_S } from "../Common/ColoresTheme";

export const styles = StyleSheet.create({
  contenedorAll: {
    flex: 1,
    alignItems: 'center',
    margin: 60,
    gap: 20
  },
  textH1: {
    fontSize: 40,
    fontWeight: '600',
  },
  contBotonesInicio: {
    flexDirection: 'row',
    gap: 4,
  },
  contInput: {
    borderRadius: 4,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  boton: {
    backgroundColor: COLOR_S,
    borderRadius: 8,
    padding: 16
  },
  textBoton: {
    color: COLOR_P,
    fontSize: 20,
    fontWeight: '600',
  },
  imgScreen: {
    marginTop: 40,
    width: 400,
    height: 400,
    borderRadius: 8,
  },
  contForm: {
    gap: 4
  }
})