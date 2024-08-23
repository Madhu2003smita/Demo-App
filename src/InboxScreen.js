import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Modal, TouchableOpacity, Button, TextInput } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Liana',
    email: 'liana@gmail.com',
    time: '1h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '2',
    name: 'Hazel',
    email: 'hazel@gmail.com',
    time: '1h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '3',
    name: 'John',
    email: 'john@gmail.com',
    time: '2h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '4',
    name: 'Jack',
    email: 'jack@gmail.com',
    time: '2h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '5',
    name: 'Mia',
    email: 'mia@gmail.com',
    time: '3h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '6',
    name: 'Aahan',
    email: 'aahan@gmail.com',
    time: '3h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '7',
    name: 'Aadav',
    email: 'aadav@gmail.com',
    time: '3h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
  {
    id: '8',
    name: 'Aman',
    email: 'aman@gmail.com',
    time: '3h',
    image: 'https://tse2.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&P=0&h=180',
  },
];

const InboxScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const openDrawer = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const closeDrawer = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openDrawer(item)}>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDrawer}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            {selectedUser && (
              <View>
                <Image source={{ uri: selectedUser.image }} style={styles.modalAvatar} />
                <Text style={styles.modalTitle}>{selectedUser.name}</Text>
                <Text style={styles.modalText}>{selectedUser.email}</Text>
                <View style={styles.buttonContainer}>
                  <View style={styles.buttonWrapper}>
                    <Button title="Create Ticket" onPress={() => {}} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Open Ticket" onPress={() => {}} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Closed Ticket" onPress={() => {}} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Delete Ticket" onPress={() => {}} color="#3da6d7" />
                  </View>
                  </View>
                  <Button title="Close" onPress={closeDrawer} color="#3da6d7" /> 
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginBottom: 10, 
  },
});

export default InboxScreen;

