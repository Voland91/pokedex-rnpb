import React from 'react';
import {View, TextInput} from 'react-native';

export const ListHeader = props => {
  return (
    <View>
      <TextInput
        value={props.value}
        placeholder="search"
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
