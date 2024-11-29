import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import WithAuthenticatedWrapper from "../../component/HOC's/withAuthenticatedWrapper";
import CustomText from '../../component/CustomText';
import {colors} from '../../common/GlobalStyles';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/victorBalogun.png')}
        style={styles.image}
      />
      <CustomText
        text="Victor Balogun"
        size={24}
        weight={700}
        color={colors.dark_grey}
        style={styles.name}
      />
      <CustomText
        text="Software Developer"
        size={18}
        weight={500}
        color={colors.text_grey}
        style={styles.title}
      />
      <View style={styles.section}>
        <CustomText
          text="About Me"
          size={20}
          weight={600}
          color={colors.dark_grey}
          style={styles.heading}
        />
        <CustomText
          text=" I am experienced in developing secure and dynamic applications. I love using my skill set to simplify work for enterprises and improve the lives of people around me."
          size={16}
          weight={400}
          color={colors.text_grey}
          style={styles.description}
        />
      </View>
      <View style={styles.section}>
        <CustomText
          text="Skills"
          size={20}
          weight={600}
          color={colors.dark_grey}
          style={styles.heading}
        />
        <CustomText
          text={
            '- React Native, React.js, Next.js\n- Redux, Zustand, React Query\n- TypeScript, JavaScript, HTML, CSS\n- Node.js, MongoDB'
          }
          size={16}
          weight={400}
          color={colors.text_grey}
          style={styles.description}
        />
      </View>
      <View style={styles.section}>
        <CustomText
          text="Contact"
          size={20}
          weight={600}
          color={colors.dark_grey}
          style={styles.heading}
        />
        <CustomText
          text={
            'Email: balogunmoyinoluwav@gmail.com\nLinkedIn: www.linkedin.com/in/balogun-victor-moyinoluwa\nGitHub: github.com/balogunvictor'
          }
          size={16}
          weight={400}
          color={colors.text_grey}
          style={styles.description}
        />
      </View>
    </ScrollView>
  );
};

const ProfileWithAuthenticatedWrapper = WithAuthenticatedWrapper(Profile, true);

export default ProfileWithAuthenticatedWrapper;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.light_grey,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    marginBottom: 10,
  },
  description: {
    lineHeight: 24,
  },
});
