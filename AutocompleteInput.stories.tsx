import { useState } from 'react'
import { AutocompleteInput } from './AutocompleteInput'
import { YStack, Text } from 'tamagui'

export default {
  title: 'PaxUiComponents/AutocompleteInput',
  component: AutocompleteInput,
}

export const Default = () => {
  const [query, setQuery] = useState('')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]
  return (
    <YStack w={400} space="$4">
      <Text>Default with search icon on right, changes to clear icon when text is entered</Text>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        label="Destination"
        placeholder="Search by City"
      />
    </YStack>
  )
}

export const WithValue = () => {
  const [query, setQuery] = useState('Mumbai, India')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]
  return (
    <YStack w={400} space="$4">
      <Text>With pre-filled value showing clear (X) icon</Text>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        label="Destination"
        placeholder="Search by City"
      />
    </YStack>
  )
}

export const EmptyState = () => {
  const [query, setQuery] = useState('zzzz')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]
  return (
    <YStack w={400}>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        label="Destination"
        placeholder="Search by City"
      />
    </YStack>
  )
}

export const WithCustomRender = () => {
  const [query, setQuery] = useState('')
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Durian',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
  ]

  return (
    <YStack space="$4" w={400}>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Search fruits..."
        label="Custom Rendered Items"
        flatListProps={{
          keyExtractor: (_, idx) => idx.toString(),
          renderItem: ({ item }) => (
            <YStack
              padding="$2"
              hoverStyle={{ bg: '$gray3' }}
              pressStyle={{ bg: '$gray4' }}
              onPress={() => setQuery(item)}
            >
              <YStack flexDirection="row" alignItems="center">
                <YStack bg="$gray3" p="$1" borderRadius="$2" mr="$2">
                  {item.charAt(0)}
                </YStack>
                <YStack>{item}</YStack>
              </YStack>
            </YStack>
          ),
        }}
      />
    </YStack>
  )
}

export const WithError = () => {
  const [query, setQuery] = useState('')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]

  return (
    <YStack w={400}>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        placeholder="Search by City"
        label="With Error"
        errorMessage="Please select a valid city"
      />
    </YStack>
  )
}

export const Disabled = () => {
  const [query, setQuery] = useState('Mumbai, India')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]

  return (
    <YStack w={400}>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        placeholder="Search by City"
        label="Disabled State"
        disabled={true}
      />
    </YStack>
  )
}

export const WithOptionalLabel = () => {
  const [query, setQuery] = useState('')
  const data = [
    'Delhi, India',
    'Hyderabad, India',
    'Goa, India',
    'Mumbai, India',
    'Bangalore, India',
    'Pune, India',
    'Kolkata, India',
    'London, England',
    'Lucknow, India',
    'Dubai, UAE',
  ]

  return (
    <YStack w={400}>
      <AutocompleteInput
        data={data}
        value={query}
        onChangeText={setQuery}
        placeholder="Search by City"
        label="Optional Destination"
        isOptional={true}
      />
    </YStack>
  )
}
