import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

interface NotifyMessage {
  _id: string;
  userID: string;
  message: string;
  timeStamps: string;
}
export default function MyNotification() {
  const [notificationList, setNotificationList] = useState<NotifyMessage[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Notifications</Text>

      {notificationList.length == 0 && (
        <Text style={styles.title1}>There is no Notification here.</Text>
      )}
      <View style={styles.notificationContainer}>
        {notificationList.map((item, key) => (
          <View style={styles.notificationItem} key={key}>
            <Text style={styles.notificationText}>{item?.message}</Text>

            <TouchableOpacity style={styles.deleteButton} key={key}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,

    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color: 'black',
  },
  title1: {
    fontSize: 28,

    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color: 'purple',
  },
  notificationContainer: {
    marginTop: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,

    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    fontFamily: 'serif',
    padding: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
