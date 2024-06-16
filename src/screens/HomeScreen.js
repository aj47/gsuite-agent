import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getAllTasks, addTask, updateTask, deleteTask } from '../api/tasks';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getAllTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await addTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Add Task" onPress={() => handleAddTask({ name: 'New Task', description: 'Description', dueDate: '2022-12-31', priority: 'High' })} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => handleUpdateTask(item.id, { ...item, name: 'Updated Task' })} />
            <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
