import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../Screens/Inicio';
import { ImgUno } from '../Screens/ImgUno';
import { ImgDos } from '../Screens/ImgDos';
import { MayorIgual } from '../Screens/MayorIgual';
import { MenorIgual } from '../Screens/MenorIgual';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="ImgUno" component={ImgUno} />
      <Stack.Screen name="ImgDos" component={ImgDos} />
      <Stack.Screen name="MayorIgual" component={MayorIgual} />
      <Stack.Screen name="MenorIgual" component={MenorIgual} />
    </Stack.Navigator>
  );
}