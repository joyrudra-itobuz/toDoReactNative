import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from './components/CustomText';
import Task from './components/Task/Task';
import {Task as TaskInterface} from './interfaces/propsInterfaces';

export default function App() {
  const [task, setTask] = useState<TaskInterface>();
  const [allTasks, setAllTask] = useState<Array<TaskInterface>>([]);

  function handleTask() {
    Keyboard.dismiss();

    if (task?.task) {
      setAllTask([...allTasks, task]);
      setTask({
        task: '',
        id: '',
        isCompleted: false,
        updatedAt: new Date(),
        createdAt: new Date(),
      });
    }
  }

  function handleDeleteTask(id: string) {
    const allTasksCopy = [...allTasks];

    const index = allTasksCopy.findIndex(data => data.id === id);

    console.log(index);
    allTasksCopy.splice(index, 1);

    setAllTask(allTasksCopy);
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <CustomText children={"Today's Tasks"} style={styles.customText} />

        <View style={styles.taskContainer}>
          {/* tasks Will be Here */}
          {allTasks.map(data => {
            return (
              <Task
                key={data.id}
                isCompleted={data.isCompleted}
                task={data.task}
                id={data.id}
                createdAt={data.createdAt}
                updatedAt={data.updatedAt}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.newTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a Task!"
          value={task?.task}
          onChangeText={text =>
            setTask({
              task: text,
              id: Date.now().toString(),
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            })
          }
        />

        <TouchableOpacity onPress={handleTask}>
          <View style={styles.taskAddContainer}>
            <CustomText style={styles.addIcon} children={'+'} />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#e3e5e8',
    height: '100%',
  },
  text: {
    padding: 32,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  customText: {
    padding: 16,
    // textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    // backgroundColor: '#89c6f0',
    color: '#0f0f0f',
  },
  taskContainer: {
    padding: 10,
    flexDirection: 'column',
    gap: 50,
  },
  inputContainer: {},
  newTaskContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textContainer: {},
  input: {
    padding: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  taskAddContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addIcon: {},
});
