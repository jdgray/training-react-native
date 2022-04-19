import React from 'react';
import { View } from 'react-native';

interface ListItemContainerProps {
  children: any;
}

const ListItemContainer = (props: ListItemContainerProps) => (
  <View style={{padding: 20}}>{props.children}</View>
);

export default ListItemContainer;