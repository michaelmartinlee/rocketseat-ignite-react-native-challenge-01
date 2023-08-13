import { View } from "react-native";

export default function TaskRoot({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex flex-row items-center px-1 py-2 mx-4 my-1 overflow-y-auto bg-gray-500 border border-gray-400 rounded-md bg-g">
      {children}
    </View>
  )
}