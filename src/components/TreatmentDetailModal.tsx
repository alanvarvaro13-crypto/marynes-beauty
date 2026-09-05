import { motion } from "framer-motion";

import {
  X,
  Clock,
  MessageCircle,
  Sparkles,
  Gem
} from "lucide-react";


import type { Treatment } from "../data/treatments";


import { business } from "../config/business";





interface Props {


open:boolean;


close:()=>void;


treatment:Treatment|null;


}







export default function TreatmentDetailModal({


open,

close,

treatment


}:Props){





if(!open || !treatment)

return null;







const message = encodeURIComponent(

`Hello ${business.name} ✨

I am interested in this beauty treatment:

💎 Treatment: ${treatment.name}

💰 Price: ${treatment.price}

⏱ Duration: ${treatment.duration}

Could you please provide more information about availability?

Thank you 💕`

);






const whatsapp =


`https://api.whatsapp.com/send?phone=${business.whatsapp.number.replace("+","")}&text=${message}`;









return(




<div


className="

fixed

inset-0

z-[70]

flex

items-center

justify-center

bg-black/70

backdrop-blur-xl

p-5

"


>










<motion.div



initial={{

opacity:0,

scale:.8,

y:50

}}



animate={{

opacity:1,

scale:1,

y:0

}}



transition={{

duration:.45

}}



className="

relative

max-h-[90vh]

w-full

max-w-2xl

overflow-hidden

rounded-[45px]

bg-white

shadow-[0_30px_100px_rgba(0,0,0,.4)]

"



>









{/* CLOSE */}




<button


onClick={close}



className="

absolute

right-6

top-6

z-20

rounded-full

bg-white/90

p-3

shadow-lg

transition

hover:rotate-90

"


>


<X/>

</button>









{/* IMAGE */}





<div


className="

relative

h-[420px]

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

"


/>







<div


className="

absolute

inset-0

bg-gradient-to-t

from-black/70

via-transparent

"

 />






<motion.div


animate={{

x:["-120%","200%"]

}}



transition={{

duration:4,

repeat:Infinity,

repeatDelay:4

}}



className="

absolute

inset-y-0

w-32

rotate-12

bg-white/30

blur-2xl

"

 />








<div


className="

absolute

bottom-7

left-7

text-white

"


>


<div className="

flex

items-center

gap-2

text-sm

uppercase

tracking-widest

text-white/80

"


>

<Sparkles size={16}/>

Premium Treatment


</div>







<h2


className="

mt-3

text-4xl

font-black

"


>


{treatment.name}


</h2>





</div>








</div>









{/* CONTENT */}





<div


className="

p-8

"


>









<p


className="

leading-relaxed

text-gray-600

"


>


{treatment.description}


</p>









{/* INFO */}





<div


className="

mt-8

grid

grid-cols-2

gap-5

"


>





<div


className="

rounded-3xl

bg-[#faf4f2]

p-5

"


>


<div className="flex items-center gap-2 text-[#b88686]">


<Gem size={18}/>


Price


</div>




<p className="mt-2 text-xl font-black text-gray-800">


{treatment.price}


</p>



</div>








<div


className="

rounded-3xl

bg-[#faf4f2]

p-5

"


>


<div className="flex items-center gap-2 text-[#b88686]">


<Clock size={18}/>


Duration


</div>





<p className="mt-2 text-xl font-black text-gray-800">


{treatment.duration}


</p>



</div>






</div>









{/* WHATSAPP */}





<motion.a



href={whatsapp}



target="_blank"



rel="noreferrer"




whileHover={{

scale:1.06

}}



whileTap={{

scale:.95

}}




className="

mt-8

flex

items-center

justify-center

gap-3

rounded-full

bg-gradient-to-r

from-green-500

to-green-600

px-8

py-5

font-bold

text-white

shadow-[0_0_50px_rgba(34,197,94,.5)]

"


>


<MessageCircle size={22}/>


Book Appointment via WhatsApp



</motion.a>









</div>






</motion.div>








</div>



)


}