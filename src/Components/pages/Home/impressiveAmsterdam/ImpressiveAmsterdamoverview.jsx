 import { motion } from 'framer-motion';


const impressiveAmsterdamoverview = () => {
  return (
    <div className="impressiveAmsterdamoverview">
          <div data-scroll data-scroll-speed='0.2' className="Marquee">
<motion.h3 
  initial={{ x: '60vw' }} 
  animate={{ x: '-100vw' }} 
  transition={{
    ease: 'linear',
    repeat: Infinity,
    duration: 23, // slow scroll
    delay: 1,
  }}
>
  You know who I am Tobbaco &nbsp; You know who I am Tobbaco &nbsp; You know who I am Tobbaco  &nbsp;
    You know who I am Tobbaco &nbsp; You know who I am Tobbaco &nbsp; You know who I am Tobbaco
</motion.h3>
    </div>
    </div>

  )
}

export default impressiveAmsterdamoverview
