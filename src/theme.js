import { extendTheme } from '@chakra-ui/react'
import '@fontsource/Inter/800.css'
import '@fontsource/Inter/500.css'

const breakpoints = {
  sm: '375px', 
  md: '48em', 
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