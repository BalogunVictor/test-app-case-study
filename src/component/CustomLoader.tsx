import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import CustomText from './CustomText';
import {colors, pixelSizeVertical} from '../common/GlobalStyles';
type Props = {
  visible: boolean;
  setVisible?: (value: boolean) => void;
  text?: any;
};

const CustomLoader = ({visible, text}: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.loadingbox}>
          <ActivityIndicator size={40} color={colors.semi_dark_grey} />
          <CustomText
            text={text}
            size={16}
            weight={500}
            color={colors.semi_dark_grey}
            style={styles.txt}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  loadingbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    marginTop: pixelSizeVertical(20),
  },
});
