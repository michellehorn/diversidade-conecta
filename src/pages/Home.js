import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import Button from '../components/Button/Button';

export const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState('4c1130');
  const [style, setStyle] = useState({
    opacity: '1',
    position: 'absolute',
    bottom: '60%',
    left: '5%',
    height: '40%',
    transition: '1s width ease-in-out'
  });
  const [isFinished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (color) {
        case '4c1130':
          setColor('f1c40f');
          setStyle({ top: '1%', left: '10%', height: '35%' });
          break;
        case 'f1c40f':
          setColor('ef5b00');
          setStyle({ top: '30%', left: '-10%', height: '20%' });
          break;
        case 'ef5b00':
          setColor('f1c40e');
          setStyle({ top: '5%', height: '25%' });
          break;
      }
    }, 700);
    return () => clearInterval(interval);
  }, [color]);

  useEffect(() => {
    setTimeout(() => {
      if (color === 'f1c40e') {
        setStyle({
          ...style,
          top: '0%',
          left: '-0%',
          height: '40%',
          width: '100%'
        });
        setColor('4c1131');
        setFinished(true);
      }
    }, 200);
  }, [color]);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'transparent',
          paddingTop: '10%'
        }}
      >
        <Image {...style} source={require('../assets/logo-dc_new.png')} />
      </View>
      {isFinished && (
        <View
          style={{
            flex: 1,
            justifyContent: 'baseline',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'transparent',
            paddingTop: '0%'
          }}
        >
          <Button
            title='SOU TALENTO'
            width='80%'
            height='18%'
            bgColor='#ef5b00cc'
            onPress={() => navigation.navigate('Pessoa candidata')}
          />
          <Button
            title='SOU EMPRESA'
            width='80%'
            height='18%'
            bgColor='#4c1130cc'
            onPress={() => navigation.navigate('Empresa')}
          />
        </View>
      )}
    </>
  );
};
