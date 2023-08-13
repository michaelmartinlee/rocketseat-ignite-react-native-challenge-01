import { TouchableOpacity, Image } from "react-native";

export default function TaskDelete({ action }: { action: () => void }) {
  return (
    <TouchableOpacity className="w-5 h-5 mt-1 ml-2 mr-1" onPress={() => action()}>
      <Image source={require('../../assets/icon-trash.png')} />
    </TouchableOpacity>
  )
}