import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  colors,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/GlobalStyles';
import BackButton from '../../component/BackButton';
import CustomButton from '../../component/CustomButton';
import Header from '../../component/Header';
import CustomTextInput from '../../component/Input/CustomTextInput';
import {loginUserAsync} from '../../store/Slice/UserSlice';

type Props = {
  navigation: any;
};

const SignIn = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const user = await dispatch(loginUserAsync({email, password})).unwrap();
      console.log('Login successful:', user);
      navigation.navigate('AuthenticatedStack');
    } catch (error) {
      Alert.alert('Input correct Email and Password');
      console.log('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <BackButton />

        <View style={styles.headerbox}>
          <Header
            title="Sign In"
            subtitle="Please enter your Email and Password,"
          />
        </View>

        <View style={styles.input}>
          <CustomTextInput
            value={email}
            setValue={setEmail}
            placeholder="Email"
          />
          <CustomTextInput
            value={password}
            setValue={setPassword}
            isPassword
            placeholder="Password"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={handleSignIn}
            bgColor={colors.dark_blue}
            text="Sign In"
            loading={loading}
            inactive={loading || !(email && password)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(20),
    marginTop: pixelSizeVertical(20),
  },
  headerbox: {
    marginTop: pixelSizeVertical(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: pixelSizeVertical(30),
    flexGrow: 1,
  },
  buttonWrapper: {
    paddingBottom: pixelSizeVertical(20),
    justifyContent: 'flex-end',
  },
});
