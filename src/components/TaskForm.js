import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues ? initialValues.name : '');
  const [description, setDescription] = useState(initialValues ? initialValues.description : '');
  const [dueDate, setDueDate] = useState(initialValues ? initialValues.dueDate : '');
  const [priority, setPriority] = useState(initialValues ? initialValues.priority : '');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
      />
      <Button
        title="Save Task"
        onPress={() => onSubmit({ name, description, dueDate, priority })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default TaskForm;
