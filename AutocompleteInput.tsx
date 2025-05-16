import { useState, useRef } from 'react'
import { YStack, XStack, Input, Text, View, getTokens } from 'tamagui'
import { Keyboard, Pressable } from 'react-native'
import { Search, X } from '@tamagui/lucide-icons'

export interface AutocompleteInputProps {
  data: string[]
  value: string
  onChangeText: (text: string) => void
  label?: string
  placeholder?: string
  isOptional?: boolean
  errorMessage?: string
  disabled?: boolean
}

export const AutocompleteInput = (props: AutocompleteInputProps) => {
  const {
    data = [],
    value = '',
    onChangeText,
    label,
    placeholder = 'Search by City',
    isOptional = false,
    errorMessage,
    disabled = false,
  } = props

  const [showDropdown, setShowDropdown] = useState(false)
  const inputRef = useRef(null)
  const tokens = getTokens()

  // Filter data based on input value
  const filteredData = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))

  const handleChange = (text: string) => {
    onChangeText(text)
    setShowDropdown(!!text)
  }

  const handleSelectItem = (item: string) => {
    onChangeText(item)
    setShowDropdown(false)
    Keyboard.dismiss()
  }

  const handleClear = () => {
    onChangeText('')
    if (inputRef.current) {
      // @ts-ignore - focus exists on input ref
      inputRef.current.focus()
    }
  }

  // Handle blur event to hide dropdown
  const handleBlur = () => {
    // Small delay to allow item selection to complete before hiding dropdown
    setTimeout(() => {
      setShowDropdown(false)
    }, 200)
  }

  return (
    <YStack>
      {label && (
        <Text mb="$2">
          {label} {isOptional && '(Optional)'}
        </Text>
      )}

      <XStack
        borderWidth={1}
        borderColor="$borderColor"
        borderRadius={30}
        height={48}
        px={16}
        alignItems="center"
        backgroundColor="$background"
      >
        <Input
          ref={inputRef}
          value={value}
          disabled={disabled}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor="$gray10"
          onFocus={() => setShowDropdown(!!value)}
          onBlur={handleBlur}
          backgroundColor="transparent"
          borderWidth={0}
          flex={1}
          height={46}
          px={8}
        />
        <Pressable onPress={value ? handleClear : undefined}>
          {value ? <X size={20} /> : <Search size={20} />}
        </Pressable>
      </XStack>

      {showDropdown && filteredData.length > 0 && (
        <YStack
          borderWidth={1}
          borderColor="$borderColor"
          borderRadius={12}
          marginTop={5}
          paddingVertical={8}
          overflow="hidden"
          zIndex={100}
          backgroundColor="$background"
          elevation={3}
        >
          <Text paddingHorizontal="$5" paddingVertical="$2.5" fontWeight="500">
            Suggested
          </Text>

          {filteredData.map((item, index) => (
            <XStack
              key={index}
              paddingHorizontal="$5"
              paddingVertical="$3"
              alignItems="center"
              pressStyle={{ backgroundColor: '$backgroundHover' }}
              onPress={() => handleSelectItem(item)}
            >
              <Text marginLeft="$1">{item}</Text>
            </XStack>
          ))}
        </YStack>
      )}
    </YStack>
  )
}
