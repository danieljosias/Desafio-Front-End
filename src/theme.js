import { extendTheme } from '@chakra-ui/react'
import '@fontsource/Inter/800.css'
import '@fontsource/Inter/500.css'

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
    }
})

export default Theme 