import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '375px', 
  lg: '1360px', 
  xl: '1440px', 
}

const Theme = extendTheme({
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    components:{
      FormLabel: {
        baseStyle: {
          color: '#2D3748',
        }
      }
    },
    breakpoints
})

export default Theme 