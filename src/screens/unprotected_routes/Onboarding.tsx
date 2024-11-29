import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  colors,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/GlobalStyles';
import CustomButton from '../../component/CustomButton';
import CustomText from '../../component/CustomText';

const Onboarding = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomText
          color={colors.white}
          size={50}
          weight={800}
          text="Welcome!!"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          onPress={handleLogin}
          bgColor={colors.white}
          text="Sign In"
          color={colors.dark_blue}
          fontWeight="700"
          fontSize={17}
          height={pixelSizeVertical(56)}
        />
        <CustomButton
          onPress={handleSignUp}
          bgColor={colors.semi_dark_blue}
          text="Sign Up"
          color={colors.white}
          fontWeight="700"
          fontSize={17}
          height={pixelSizeVertical(56)}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark_blue,
  },
  buttonWrapper: {
    flexDirection: 'column',
    gap: 10,
    position: 'absolute',
    bottom: pixelSizeVertical(32),
    left: 0,
    right: 0,
    paddingHorizontal: pixelSizeHorizontal(24),
  },
});
