import { Dimensions, StyleSheet } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Colors = {
  Color_Green: '#28A745',
  Color_lightGreen: '#E7FBFA',
  Color_lightGrey: '#737373',
  Color_lightGrey2: '#D9D9D9',
  Color_lightGrey3: '#73737340',
  Color_lightGrey4: '#f6f6f8',
  Color_lightGrey5: '#00000040',
  Color_lightGrey6: '#e3e3e3',
  Color_navyBlue: '#1D7885',
  Color_White: 'white',
  Color_White2: '#F6F6F8',
  Color_Black: '#333333',
  Color_Image: '#28A74533',
  Color_Orange: '#CE5100',
  Color_Orang2: '#FF9933',
  Color_Brown: '#E56032',
  Color_LightBlue: '#DFEEEA',
  Color_Yellow: '#D2C000',
};

const style2 = StyleSheet.create({
  text: {
    fontSize: (Width / 100) * 5,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontSize: (Width / 100) * 7,
    fontFamily: 'Poppins-Bold',
  },
  title_2: {
    fontSize: (Width / 100) * 7,
    fontFamily: 'Poppins-SemiBold',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    width: Width,
    backgroundColor: Colors.Color_White, // Optional: change/remove as needed
    justifyContent: 'space-between',
  },
  innerContainer: {
    width: Width * 0.95,
    // backgroundColor: 'red',
    height: (Height / 100) * 80,
    alignItems: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: (Width / 100) * 2,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  Border: {
    borderRadius: (Width / 100) * 2,
    borderStyle: 'solid',
    borderColor: Colors.Color_lightGrey,
    borderWidth: (Width / 100) * 0.5,
  },
  key_Card: {
    backgroundColor: Colors.Color_White,
    width: (Width / 100) * 46,
    borderStyle: 'solid',
    borderWidth: (Width / 100) * 0.5,
    height: (Height / 100) * 15,
    borderColor: Colors.Color_lightGrey2,
    borderRadius: (Width / 100) * 2.5,
    elevation: 3,
    padding: (Width / 100) * 2.5,
    justifyContent: 'space-between',
  },
});

export const Styles = () => {
  return {
    style2: style2,
    Width: Width,
    Height: Height,
    Colors: Colors,
    iconSizes_1: (Width / 100) * 8,
    fontFamily: 'poppins-SemiBold',
    iconColor_Pofile: '#CE5100',
    color_1: '#F6F6F8',
    color_2: '#FBFBFB',
    graidantLoaction: [0.4, 0.9],
  };
};
