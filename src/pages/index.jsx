import React from 'react'
import { Box, Flex, VStack, Heading, Text, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

export default function Contacts() {
  return (
    <Box background='#F7FAFC'> 
        <Flex>
            <VStack alignItems='start' background='#FFFFFF' spacing='24px' m='12' p='6' borderRadius='15'>
                <Heading color='#1A202C' fontSize='3xl'>Let’s Connect</Heading>
                <Text color='#4A5568' fontSize='20' >FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</Text>

                <FormControl isRequired>
                    <FormLabel color='#2D3748'>Name</FormLabel>
                    <Input type='text' mb='10'/>

                    <FormLabel color='#2D3748'>Company Name</FormLabel>
                    <Input type='text' mb='10'/>

                    <FormLabel color='#2D3748'>Email</FormLabel>
                    <Input type='email' mb='10'/>

                    <FormLabel color='#2D3748'>Phone Number</FormLabel>
                    <Input type='text' mb='10'/>

                    <FormLabel color='#2D3748'>Subject</FormLabel>
                    <Input type='text' mb='10'/>

                    <Text color='#2D3748'>Your Message</Text>
                    <Textarea isInvalid maxHeight='70' mb='10'/>
                </FormControl>
            </VStack>
        </Flex> 
    </Box>
  )
}
