import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles
} from "lucide-react";


import type { Treatment } from "../data/treatments";




interface Props{

treatment:Treatment;

onClick:()=>void;

}





export default function TreatmentCard({

treatment,

onClick

}:Props){





return(



<motion.div



initial={{

opacity:0,

y:40

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



whileHover={{

y:-12,

scale:1.03

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

rounded-[35px]

bg-white

shadow-[0_20px_50px_rgba(182,134,134,.18)]

"



>









{/* IMAGE */}



<div

className="

relative

h-80

overflow-hidden

"

>





<img


src={treatment.image}


alt={treatment.name}



className="

h-full

w-full

object-cover

transition

duration-700

group-hover:scale-110

"



/>







{/* DARK GRADIENT */}



<div


className="

absolute

inset-0

bg-gradient-to-t

from-black/70

via-transparent

to-transparent

"

 />







{/* CATEGORY BADGE */}



<div


className="

absolute

left-5

top-5

rounded-full

bg-white/90

px-4

py-2

text-xs

font-semibold

uppercase

tracking-widest

text-[#b88686]

shadow-lg

"

>



{treatment.category}


</div>








{/* PRICE */}



<div


className="

absolute

bottom-5

right-5

rounded-full

bg-[#b88686]/90

px-5

py-2

font-bold

text-white

shadow-xl

backdrop-blur-md

"


>


{treatment.price}


</div>







</div>









{/* CONTENT */}




<div

className="
p-7
"

>









<h3


className="

text-2xl

font-black

text-gray-800

"


>


{treatment.name}


</h3>









<p


className="

mt-3

line-clamp-3

text-sm

leading-relaxed

text-gray-500

"

>


{treatment.description}


</p>









<div


className="

mt-6

flex

items-center

justify-between

"


>







<div


className="

flex

items-center

gap-2

text-sm

font-medium

text-[#b88686]

"


>


<Sparkles size={16}/>


Premium Treatment


</div>










<motion.div


whileHover={{

x:5

}}



className="

flex

items-center

gap-2

font-semibold

text-gray-700

"


>


View


<ArrowRight size={18}/>


</motion.div>








</div>






</div>








{/* GLOW EFFECT */}



<div


className="

pointer-events-none

absolute

inset-0

rounded-[35px]

border

border-transparent

transition

duration-500

group-hover:border-[#dca0aa]

group-hover:shadow-[0_0_50px_rgba(220,160,170,.35)]

"

 />





</motion.div>



)


}