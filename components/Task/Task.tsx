import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomText from '../CustomText';
import {TaskProps} from '../../interfaces/propsInterfaces';
import fontStyles from '../../styles/fontStyles';
import {format} from 'date-fns';

export default function Task({
  id,
  task,
  isCompleted,
  createdAt,
  updatedAt,
  handleDeleteTask,
}: TaskProps) {
  const [completed, setIsCompleted] = useState<boolean>(isCompleted);

  console.log({createdAt, updatedAt});

  return (
    <View style={styles.taskContainer}>
      <View style={styles.flexRow10}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => setIsCompleted(!completed)}
        />
        <CustomText
          children={task}
          style={[
            fontStyles.fontSize20,
            completed && styles.taskCompletedStyles,
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.circular}
        onPress={() => {
          handleDeleteTask(id);
        }}
      />
      <View style={styles.taskTimeContainer}>
        <CustomText
          style={styles.dateColor}
          children={
            updatedAt &&
            `on ${format(updatedAt, 'dd/mm/yy')} at ${format(
              updatedAt,
              "hh:mm aaaaa'm'",
            )}`
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  taskCompletedStyles: {
    textDecorationLine: 'line-through',
    color: 'green',
    fontStyle: 'italic',
    opacity: 0.5,
  },
  flexRow10: {
    flexDirection: 'row',
    gap: 10,
  },
  fontSize20: {
    fontSize: 20,
  },
  square: {
    width: 26,
    height: 26,
    backgroundColor: '#55bcf6',
    opacity: 0.8,
    borderRadius: 20,
  },
  circular: {
    width: 15,
    height: 15,
    backgroundColor: '#aad9fa',
    opacity: 0.8,
    borderRadius: 20,
  },
  taskTimeContainer: {
    position: 'absolute',
    bottom: -40,
    right: 5,
    backgroundColor: '#1174bf',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  dateColor: {
    color: 'white',
  },
});
