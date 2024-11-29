import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
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
import {registerUserAsync} from '../../store/Slice/UserSlice';

type Props = {
  navigation: any;
};

const SignUp = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const user = await dispatch(
        registerUserAsync({username, email, password}),
      ).unwrap();
      console.log('Registration successful:', user);
      navigation.navigate('AuthenticatedStack');
    } catch (error) {
      Alert.alert('Registration failed');
      console.log('Registration error:', error);
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
            title="Sign Up"
            subtitle="Please enter your Username, Email and Password"
          />
        </View>

        <View style={styles.input}>
          <CustomTextInput
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
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
            onPress={handleSignUp}
            bgColor={colors.dark_blue}
            text="Sign Up"
            loading={loading}
            inactive={loading || !(username && email && password)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
