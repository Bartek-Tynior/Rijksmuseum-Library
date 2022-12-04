import React from 'react'
import { Oval } from  'react-loader-spinner'
import { motion } from "framer-motion"


function Loading() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
     className='oval_loader'>
      <Oval
      height={130}
      width={130}
      color="#CCB22E"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#CCB22E"
      strokeWidth={6}
      strokeWidthSecondary={6}
    />
    </motion.div>
    
  )
}

export default Loading