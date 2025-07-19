import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Styles } from '../../Styles';
import { Icon } from '@rneui/themed';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
  Styles();

let list = [
  { name: 'Home', icon: 'home' },
  { name: 'Favourite', icon: 'star' },
];

const BottomTab = ({ selected = 0 }) => {
  const navigation = useNavigation();

  return (
    <View style={[{ ...styles.Bottom }]}>
      {list.map((mo, i) => {
        return (
          <Pressable
            key={i}
            style={styles.items}
            onPress={() => {
              navigation.navigate(mo.name);
            }}
          >
            <Icon
              color={Colors.Color_Black}
              size={iconSizes_1}
              name={mo.icon}
              type="feather"
              containerStyle={
                selected === i + 1 ? styles.selected : styles.notSelected
              }
            />
            <Text style={[{ ...style2.text }, { ...styles.text }]}>
              {mo.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  Bottom: {
    ...style2.flexBox,
    backgroundColor: Colors.Color_Brown,
    width: Width,
    padding: (Width / 100) * 2,
    paddingLeft: (Width / 100) * 12,
    paddingRight: (Width / 100) * 12,
  },
  text: {
    color: Colors.Color_White,
  },

  selected: {
    backgroundColor: Colors.Color_White2,
    borderRadius: (Width / 100) * 14,
    height: (Height / 100) * 7,
    justifyContent: 'center',
    width: (Width / 100) * 14,
  },
  items: {
    width: (Width / 100) * 25,
    alignItems: 'center',
  },
  notSelected: { height: (Height / 100) * 7, justifyContent: 'center' },
});
