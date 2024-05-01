import { Box, Flex, Input, Button, VStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: inputValue, sender: 'You' };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const chatInputSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Flex direction="column" h="100vh" p={4}>
      <VStack flex="1" overflowY="auto" spacing={4} align="stretch">
        {messages.map((msg) => (
          <Box key={msg.id} bg="blue.100" p={3} borderRadius="lg" alignSelf="flex-end">
            <Text fontSize="md">{msg.text}</Text>
          </Box>
        ))}
      </VStack>
      <Flex mt={4}>
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
          size={chatInputSize}
        />
        <Button onClick={handleSendMessage} colorScheme="blue" px={8} ml={2}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default Index;