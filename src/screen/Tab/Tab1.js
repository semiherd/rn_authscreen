import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { useAuthState } from '../../context/AuthContext';
import styles from '../Style/TabStyles';

const Tab1 = () => {
  const user = useAuthState();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tab1</Text>
      <Text style={styles.header}>{user.userData}</Text>
    </View>
  );
};


export default Tab1;