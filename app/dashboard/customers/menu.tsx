import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('./path_to_dollar_sign_image.png')} style={styles.icon} />
        <Text style={styles.text}>DEALS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('./path_to_new_icon.png')} style={styles.icon} />
        <Text style={styles.text}>FEATURED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('./path_to_combo_image.png')} style={styles.icon} />
        <Text style={styles.text}>COMBOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('./path_to_family_meal_image.png')} style={styles.icon} />
        <Text style={styles.text}>FAMILY MEALS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  menuItem: {
    width: '50%', // Two items per row
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});

export default MenuScreen;
