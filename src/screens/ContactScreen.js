import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, Title } from 'react-native-paper';
import * as Contacts from 'expo-contacts';
import View from '../components/SafeAreaView';
import ContactItem from '../components/ContactItem';
import Searchbar from '../components/Searchbar';
// import { contactData } from '../utils/mockData';

export default ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    notFoundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      flex: 1,
      textAlign: 'left',
      width: Dimensions.get('window').width - 3,
    },
    text: {
      color: Colors.black,
    },
  });

  const [contacts, setContacts] = useState([]);
  const [renderContacts, setRenderContacts] = useState([]);
  const [paging, setPaging] = useState(0);
  const [search, setSearch] = useState('');

  const handleOnChangeTextSearch = query => {
    setSearch(query);
  };

  const handleSearch = useCallback(() => {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.includes(search);
    });
    setRenderContacts(filteredContacts);
  }, [search, contacts]);

  // const getMockContactList = () => {
  //   setContacts(contactData);
  //   setRenderContacts(contactData);
  // };

  const getContactList = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        sort: Contacts.SortTypes.FirstName,
      });

      if (data.length) {
        await AsyncStorage.setItem('@contacts', JSON.stringify(data));
        setContacts(data);
        setRenderContacts(data);
      }
    }
  };

  useEffect(() => {
    getContactList();
    // getMockContactList();
  }, []);

  useEffect(() => {
    if (search) {
      handleSearch();
    } else {
      setRenderContacts(contacts);
    }
  }, [search, contacts, handleSearch]);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="search"
        value={search}
        onChangeText={handleOnChangeTextSearch}
      />
      {renderContacts.length ? (
        <FlatList
          data={renderContacts}
          // onEndReached={onEndReached}
          renderItem={({ item, index }) => (
            <ContactItem
              elevation={5}
              name={item.name}
              key={item.key}
              onPress={() =>
                navigation.navigate('ContactDetail', {
                  name: item.name,
                  phoneNumbers: item.phoneNumbers,
                })
              }
            />
          )}
        />
      ) : !contacts.length ? (
        <View style={styles.notFoundContainer}>
          <Title>You don't have any contact(s).</Title>
        </View>
      ) : (
        <View style={styles.notFoundContainer}>
          <Title>Contact(s) not found.</Title>
        </View>
      )}
    </View>
  );
};
