import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';


interface Props {
    children: ReactNode
}
const GameCardContainer = ({children}:Props) => {
  return (
    <Box
      className="card"
     
      borderRadius={10}
      overflow="hidden" 
    >
      {children}
    </Box>
  );
}

export default GameCardContainer
