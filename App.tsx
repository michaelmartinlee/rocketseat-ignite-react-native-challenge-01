import "./styles/global.css"
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import useTaskController from "./hooks/useTaskController";
import Task from "./components/Task";

export default function App() {
  const { inputValue, setInputValue, handleSubmit, taskArry, changeStatus, removeTask, totalTaskCreate, totalTaskDone } = useTaskController()

  return (
    <View className='flex-1 bg-gray-700' >
      <View className="flex flex-row items-center justify-center mt-20 ">
        <Image source={require('./assets/favicon.png')} className="mr-2" />
        <Text className="text-3xl font-bold text-blue-neutral">to</Text>
        <Text className="text-3xl font-bold text-purple-dark">do</Text>
      </View>
      <View className="flex flex-row items-center w-full mx-5 my-5">
        <TextInput className="w-[75%] h-12 text-white bg-gray-400 px-3 py-2 text-whitea rounded-md "
          value={inputValue}
          onChangeText={setInputValue}
          maxLength={50}
        />
        <TouchableOpacity className="flex items-center justify-center w-12 h-12 mx-2 rounded-md bg-blue-neutral"
          onPress={() => handleSubmit()}
        >
          <Image source={require('./assets/icon-plus.png')} />
        </TouchableOpacity>
      </View>
      <StatusBar style="inverted" />
      <View className="flex flex-row justify-between mx-5">
        <View className="flex flex-row gap-2">
          <Text className="text-lg font-bold text-blue-neutral">Criadas</Text>
          <Text className="px-2 text-lg font-bold text-white bg-gray-400 rounded-xl">{totalTaskCreate}</Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="text-lg font-bold text-purple-neutral">Concluídas</Text>
          <Text className="px-2 text-lg font-bold text-white bg-gray-400 rounded-xl">{totalTaskDone}</Text>
        </View>
      </View>
      <View className="mt-6">
        {taskArry.length === 0 && (
          <View className="relative flex items-center justify-center py-4 mx-4 border-t-2 border-gray-400 rounded-t-lg">
            <Image source={require('./assets/clipboard.png')} className="w-12 h-12" />
            <Text className="mt-5 font-bold text-gray-300">Você ainda não tem tarefas cadastradas</Text>
            <Text className="text-gray-300 ">Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
        {taskArry?.map(({ id, completed, task }) => (
          <Task.Root key={id}>
            <Task.Check checked={completed} action={() => changeStatus(id)} />
            <Task.Content content={task} checked={completed} />
            <Task.Delete action={() => removeTask(id)} />
          </Task.Root>
        ))}
      </View>
    </View>
  );
}
