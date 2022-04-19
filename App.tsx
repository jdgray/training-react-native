import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import List from './containers/List';
import ListItem from './components/ListItem';

interface ListItem {
  id: string;
  text: number;
}

export default function App() {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [listItems, setListItems] = useState<ListItem[]>([
    {
      id: 'test-1',
      text: 'Test Item 1'
    },
    {
      id: 'test-2',
      text: 'Test Item 2'
    },
    {
      id: 'test-3',
      text: 'Test Item 3'
    },
    {
      id: 'test-4',
      text: 'Test Item 4'
    }
  ]);

  const handleOnClose = () => {
    // do something cool
    Alert.alertText("Item clicked.");
  }

  const handleModalClose = () => {
    setOpenModal(false);
  }

  return (
    <View style={styles.container}>
      <Text class={styles.title}>Welcome to the react native training app!</Text>
      <Text class={styles.subTitle}>Congratulations you got the app running</Text>
      <List>
        {listItems.map((item: ListItem) => 
          <ListItem
            key={item.id}
            text={item.text} 
            onClick={handleOnClose}
          />
        )}
      </List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 18
  },
  subTitle: {
    marginBottom: 20,
    fontSize: 14
  }
});
