import { motion } from "framer-motion";

import {
  X,
  Sparkles,
  Clock,
  Gem
} from "lucide-react";

import { useState } from "react";


import type { Treatment } from "../data/treatments";


import TreatmentDetailModal from "./TreatmentDetailModal";


import lashesLogo from "../assets/logo/lashes-logo.png";
import browsLogo from "../assets/logo/brows-logo.png";
import skinLogo from "../assets/logo/skin-logo.png";
import lipsLogo from "../assets/logo/lips-logo.png";




interface Props {


open:boolean;


close:()=>void;


title:string;


category:
"Lashes" |
"Brows" |
"Skin" |
"Lips";


treatments:Treatment[];


}






const logos={


Lashes:lashesLogo,

Brows:browsLogo,

Skin:skinLogo,

Lips:lipsLogo


};








export default function TreatmentModal({


open,

close,

title,

category,

treatments


}:Props){





const [

selectedTreatment,

setSelectedTreatment

]=useState<Treatment|null>(null);






if(!open)

return null;







return(


<>


<div


className="
fixed
inset-0
z-50
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

y:40

}}



animate={{

opacity:1,

scale:1,

y:0

}}



transition={{

duration:.5

}}



className="
relative
max-h-[92vh]
w-full
max-w-7xl
overflow-y-auto
rounded-[50px]
bg-[#fffafa]
p-8
shadow-[0_30px_100px_rgba(0,0,0,.35)]
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
bg-black/10
p-3
transition
hover:rotate-90
hover:bg-black/20
"


>


<X/>

</button>









{/* HEADER */}



<div


className="
relative
mb-14
text-center
"


>





<div


className="
absolute
left-1/2
top-0
h-32
w-32
-translate-x-1/2
rounded-full
bg-pink-200/50
blur-3xl
"


/>





<img


src={logos[category]}


alt={category}


className="
relative
mx-auto
h-32
w-32
rounded-full
object-contain
shadow-2xl
"


/>






<h2


className="
mt-7
text-5xl
font-black
text-gray-800
"


>


{title}


</h2>







<div


className="
mt-4
flex
justify-center
items-center
gap-3
text-[#b88686]
font-medium
"


>


<Sparkles size={22}/>


Premium Beauty Collection


</div>






</div>









{/* SERVICES GRID */}




<div


className="
grid
gap-10
sm:grid-cols-2
lg:grid-cols-3
"


>







{

treatments.map((item,index)=>(



<motion.div



key={item.id}



initial={{

opacity:0,

y:40

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:index*.12

}}




whileHover={{

y:-15,

scale:1.04

}}



onClick={()=>setSelectedTreatment(item)}



className="
group
cursor-pointer
overflow-hidden
rounded-[35px]
bg-white
shadow-[0_20px_60px_rgba(182,134,134,.18)]
"



>







{/* IMAGE */}



<div


className="
relative
h-64
overflow-hidden
"


>



<img


src={item.image}


alt={item.name}



className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
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
font-bold
uppercase
tracking-widest
text-[#b88686]
"


>


{item.category}


</div>









<div


className="
absolute
bottom-5
right-5
rounded-full
bg-[#b88686]
px-5
py-2
font-bold
text-white
shadow-xl
"


>


{item.price}


</div>








</div>









{/* CONTENT */}



<div


className="
p-6
"


>



<h3


className="
text-2xl
font-black
text-gray-800
"


>


{item.name}


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


{item.description}


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
text-[#b88686]
"


>


<Clock size={16}/>


{item.duration}


</div>






<div


className="
flex
items-center
gap-1
text-sm
font-semibold
text-gray-700
"


>


<Gem size={16}/>


Details


</div>






</div>






</div>






</motion.div>



))


}





</div>








</motion.div>







</div>










<TreatmentDetailModal


open={selectedTreatment!==null}



close={()=>setSelectedTreatment(null)}



treatment={selectedTreatment}


/>





</>


)



}