import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Contacts() {
  return (
    <Box background='#F7FAFC'> 
        <Flex>
            <VStack alignItems='start' background='#FFFFFF' spacing='24px' m='12' p='6' borderRadius='15'>
                <Heading color='#1A202C' fontSize='3xl'>Let’s Connect</Heading>
                <Text color='#4A5568' fontSize='20' >FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</Text>

                {/* Form */}
            </VStack>
        </Flex> 
    </Box>
  )
}
