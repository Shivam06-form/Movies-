import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { Styles } from '../../Styles';

const Header = ({ title, Function }) => {
  const { Colors, Height, Width, style2, graidantLoaction, iconSizes_1 } =
    Styles();

  return (
    <View style={[{ ...style2.flexBox }]}>
      <Icon     
        name="arrow-back"
        color={Colors.Color_Black}
        size={iconSizes_1}
        onPress={() => {
          Function();
        }}
      />

      <Text style={[{ ...style2.title_2 }]}>{title.slice(0, 20)}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
