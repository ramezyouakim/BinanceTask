import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

type SearchBarProps = {
  placeholder: string;
  onTextChange: (text: string) => void;
  containerProps?: {};
};

const SearchBar = ({
  placeholder,
  onTextChange,
  containerProps,
}: SearchBarProps) => {
  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    setValue(text);
    onTextChange(text);
  };

  return (
    <View {...containerProps}>
      <Input
        placeholder={placeholder}
        onChangeText={handleChange}
        value={value}
      />
    </View>
  );
};

const Input = styled(TextInput)(({theme}) => ({
  paddingHorizontal: theme.rems.x2,
}));

export default SearchBar;
