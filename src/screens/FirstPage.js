import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';


// Validation schema using Yup
import { validationSchema } from '../schemas/LoginSchema';

const FirstPage = () => {

  const navigation = useNavigation();
  const handleSubmit = (values) => {
    Alert.alert('Form Credentials:', JSON.stringify(values));
  };
  //for testing error boundary, throw it when needed
  //throw new Error("Testing Error Boundary");
  
  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <Button onPress={navigation.navigate('SecondPage')} title="Go to Second Page" />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default FirstPage;