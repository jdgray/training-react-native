import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

interface ListItemProps {
  text: string;
  onClick(event: any): void;
}

const ListItem = (props: ListItemProps) => (
  <View
    style={{ borderWidth: 1, borderColor: '#999', width: 200, marginBottom: 10 }}
  >
    <TouchableHighlight
      onClick={props.onClick}
      underlayColor="#999"
    >
      <Text
        style={{ padding: 10, fontSize: 14, textAlign: 'center' }}

      >
        {props.text}
      </Text>
    </TouchableHighlight>
  </View>
);

export default ListItem;
