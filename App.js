import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [valx, setValx] = useState(0);
  const [valy, setValy] = useState(1000000000);
  setInterval(() => {
    setValx(val => val + 1);
    setValy(val => val - 1);
  }, 1000);

  return (
    <SafeAreaView>
      <View>
        <Text>{'Hello I am valx, I am increasing ' + valx}</Text>
        <Text>{'Hello I am valy. I am decreasing ' + valy}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
