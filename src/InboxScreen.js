import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Modal, TouchableOpacity, Button, TextInput } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';


const InboxScreen = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get('https://helpdesk.productdemourl.com/mobile/deepak/public/v3/api/agent/ticket-list?category=&filter_id=16');
        setData(response.data);
        setLoading(false);
        
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Fetch Error',
          text2: 'Unable to fetch data. Please try again later.',
        });
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


  const openDrawer = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
    Toast.show({
      type: 'info',
      text1: 'User Selected',
      text2: `${user.name} has been selected.`,
    });
  };

  const closeDrawer = () => {
    setModalVisible(false);
    setSelectedUser(null);
    Toast.show({
      type: 'info',
      text1: 'Profile Closed',
      text2: 'You have closed the profile.',
    });
  };

  const handleTicketAction = (action) => {
    Toast.show({
      type: 'success',
      text1: `${action} Ticket`,
      text2: `You ${action.toLowerCase()}d the ticket.`,
    });
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

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          //data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )
      }
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
                    <Button title="Create Ticket" onPress={() => handleTicketAction('Create')} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Open Ticket" onPress={() => handleTicketAction('Open')} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Close Ticket" onPress={() => handleTicketAction('Close')} color="#3da6d7" />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Delete Ticket" onPress={() => handleTicketAction('Delete')} color="#3da6d7" />
                  </View>
                </View>
                <Button title="Close" onPress={closeDrawer} color="#3da6d7" />
              </View>
            )}
          </View>
        </View>
      </Modal>

      <Toast />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginTop: 100,
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
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default InboxScreen;

