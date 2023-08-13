import { Text } from 'react-native'

interface ITaskContentProps {
  content: string
  checked: boolean
}

export default function TaskContent(props: ITaskContentProps) {
  const { content, checked } = props

  return (
    <Text className={`  w-[80%] ${checked ? 'line-through text-gray-300' : ' text-white'}`}>{content} </Text>
  )
}