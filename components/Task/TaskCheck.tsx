import { TouchableOpacity, Image } from "react-native";

interface ITaskCheckProps {
  checked: boolean
  action: () => void
}

export default function TaskCheck(props: ITaskCheckProps) {
  const { checked, action } = props

  return (
    <TouchableOpacity className="w-5 h-5 ml-1 mr-2" onPress={() => action()}>
      {checked ?
        <Image source={require('../../assets/icon-checked.png')} />
        : <Image source={require('../../assets/icon-check.png')} />}
    </TouchableOpacity>
  )
}