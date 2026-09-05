import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";


interface Props {

title:string;

logo:string;

description:string;

onClick:()=>void;

}



export default function CategoryCard({

title,

logo,

description,

onClick

}:Props){



return(


<motion.div


initial={{

opacity:0,

y:60

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



whileHover={{

y:-18,

scale:1.05

}}



transition={{

duration:.5

}}



onClick={onClick}



className="

group

relative

cursor-pointer

overflow-hidden

rounded-[45px]

border

border-white/60

bg-white/80

p-8

text-center

shadow-[0_20px_60px_rgba(182,134,134,.18)]

backdrop-blur-xl

transition

duration-500

"



>


{/* GLOW */}



<div


className="

absolute

-inset-10

rounded-full

bg-[#e8b5bf]/20

blur-3xl

opacity-0

transition

duration-500

group-hover:opacity-100

"

/>








{/* LIGHT EFFECT */}



<motion.div


animate={{

rotate:360

}}



transition={{

duration:20,

repeat:Infinity,

ease:"linear"

}}



className="

absolute

right-[-40px]

top-[-40px]

h-32

w-32

rounded-full

bg-gradient-to-br

from-pink-200/40

to-transparent

blur-xl

"


/>









{/* LOGO */}



<div


className="

relative

mx-auto

flex

h-36

w-36

items-center

justify-center

rounded-full

bg-gradient-to-br

from-[#fff]

to-[#f8e8e8]

p-6

shadow-inner

"



>



<motion.img


src={logo}


alt={title}



animate={{

y:[0,-8,0],

rotate:[0,3,-3,0]

}}



transition={{

duration:5,

repeat:Infinity

}}



className="

h-full

w-full

object-contain

drop-shadow-xl

"



/>



</div>










<h3


className="

relative

mt-8

text-3xl

font-black

text-gray-800

"

>

{title}

</h3>









<p


className="

relative

mt-4

leading-relaxed

text-gray-500

"

>

{description}

</p>









<motion.button


whileHover={{

scale:1.08

}}



whileTap={{

scale:.95

}}



className="

relative

mt-8

flex

mx-auto

items-center

gap-2

rounded-full

bg-gradient-to-r

from-[#b88686]

to-[#d7a0a8]

px-8

py-3

text-white

font-semibold

shadow-lg

"



>


<Sparkles size={16}/>


Explore


</motion.button>






</motion.div>



)


}