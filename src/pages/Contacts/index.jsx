import React from 'react'
import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, HStack, VStack, Stack } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon  } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md' 
import Theme from '../../theme'

const Contacts = () => {
  return (
    <Box bg='#F7FAFC' boxShadow='0px 1px 2px #000000 0px 1px 2px #000000' display={{lg:'flex',xl:'flex'}} >
      <Box>
        {Theme.breakpoints.xl && 
          <Box px='50px' pt='30px'>
            <Heading color='#1A202C' fontSize='3xl' pb='5' display={{base: 'none', xl: 'block', lg: 'block'}}>Let’s Connect</Heading>
            <Text color='#4A5568' w={{lg:'600px'}} fontSize='20' display={{base: 'none', xl: 'block', lg: 'block'}}>FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</Text>
          </Box>
        }

        <Flex w={{lg: '600px', xl: '600px'}}>
          <VStack alignItems='start' bg='#FFFFFF' spacing='24px' m='12' p='6' borderRadius='15'>
            <Heading color='#1A202C' fontSize='3xl' display={{ xl: 'none', lg: 'none'}}>Let’s Connect</Heading>
            <Text color='#4A5568' fontSize='20' display={{ xl: 'none', lg: 'none'}}>FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</Text>
            
            <FormControl w={{lg: '600px', xl: '600px'}}>
              <Stack>
                <Box display={{lg:'flex', xl:'flex'}} gap={{lg:'50px'}}>
                  <Box>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' mb='10' w={{base:'100%',lg:'275px'}}/>
                  </Box>
                  <Box>
                    <FormLabel>Company Name</FormLabel>
                    <Input type='text' mb='10' w={{base:'100%',lg:'275px'}}/>
                  </Box>
                </Box>

                <Box display={{lg:'flex', xl:'flex'}} gap={{lg:'50px'}}>
                  <Box>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' mb='10' w={{base:'100%',lg:'275px'}}/>
                  </Box>
                  <Box>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type='text' mb='10' w={{base:'100%',lg:'275px'}}/>
                  </Box>
                </Box>
              </Stack>

              <FormLabel>Subject</FormLabel>
              <Input type='text' mb='10'/>

              <Text color='#2D3748' mb='2' fontWeight='medium'>Your Message</Text>
              <Textarea maxH='70' mb='10'/>

              <Button w={{base:'250px', lg: '110px', xl: '110px'}} bg='#EC7E83' _hover={{ bg: '#EC7E83' }} color='#FFFFFF' p='6' fontWeight='medium'>Submit</Button>
            </FormControl>
          </VStack>
        </Flex>
        </Box> 
        
      <Box display={{lg:'flex'}} flexDirection={{lg:'column'}} justifyContent={{lg:'center'}}>
        <Box w={{lg: '354px'}} bg='#F7FAFC' boxShadow='0px 1px 2px #000000 0px 1px 2px #000000' m='6'>
          <Heading as='h2' size='md' p='0px 25px'>Our Commitment</Heading>
          <Flex alignItems='start' bg='#FFFFFF' m='6' p='6' borderRadius='15'>
            <VStack >
              <Text color='#4A5568' fontSize='18' >Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius dictum</Text>
            </VStack>
          </Flex>
        </Box>

        <Box w={{lg: '354px'}} mb={{ lg: '110px'}} bg='#F7FAFC' boxShadow='0px 1px 2px #000000 0px 1px 2px #000000' m='6'>
          <Heading as='h2' size='md' p='0px 25px'>Art Directing</Heading>
          <Flex bg='#FFFFFF' m='6' p='6' borderRadius='15'>
            <VStack spacing='5'alignItems='flex-start'>
              <Text color='#4A5568' fontSize='18' >Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla.</Text>
              <Box display='flex' justifyContent='center' gap='10px' >
                <PhoneIcon color='#718096'/>
                <Text color='#718096'>+123 (4567) 8910</Text>
              </Box>
              <Box display='flex' justifyContent='center' gap='10px'>
                <EmailIcon color='#718096'/>
                <Text color='#718096'>hello@example.com</Text>
              </Box> 
              <Box display='flex' justifyContent='center' gap='10px' w='182px'>
                <Icon as={MdLocationOn} color='#718096'/>
                <Text color='#718096'>120 Street Lorem Ipsum Sit Amet</Text>
              </Box> 
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
export default Contacts
