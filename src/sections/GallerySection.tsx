import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  X,
  ZoomIn
} from "lucide-react";


import image01 from "../assets/images/gallery/result-01.jpeg";
import image02 from "../assets/images/gallery/result-02.jpeg";
import image03 from "../assets/images/gallery/result-03.jpeg";
import image04 from "../assets/images/gallery/result-04.jpeg";
import image05 from "../assets/images/gallery/result-05.jpeg";





const gallery = [

{
image:image01,
title:"Luxury Lashes",
category:"Lashes"
},

{
image:image02,
title:"Perfect Brows",
category:"Brows"
},

{
image:image03,
title:"Skin Transformation",
category:"Skin"
},

{
image:image04,
title:"Beauty Enhancement",
category:"Beauty"
},

{
image:image05,
title:"Premium Result",
category:"Lips"
}

];







export default function GallerySection(){



const [selected,setSelected]=useState<string|null>(null);




return(



<section

id="gallery"

className="
relative
overflow-hidden
bg-[#faf4f2]
py-32
"

>




{/* DECORATION */}


<div

className="
absolute
top-0
left-0
h-96
w-96
rounded-full
bg-pink-200/40
blur-[120px]
"

/>



<div

className="
absolute
bottom-0
right-0
h-96
w-96
rounded-full
bg-[#b88686]/20
blur-[130px]
"

/>










<div

className="
relative
mx-auto
max-w-7xl
px-6
"

>







{/* TITLE */}



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



className="
mb-20
text-center
"

>



<div

className="
flex
justify-center
items-center
gap-2
uppercase
tracking-[5px]
text-sm
text-[#b88686]
"

>


<Sparkles size={18}/>


Our Gallery


</div>






<h2

className="
mt-5
text-5xl
font-black
text-gray-800
"

>


Beauty Results


</h2>





<p

className="
mx-auto
mt-5
max-w-2xl
text-gray-500
"

>


Discover our latest beauty transformations
and premium treatments.


</p>



</motion.div>












{/* GRID */}



<div

className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>




{

gallery.map((item,index)=>(



<motion.div



key={item.image}




initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*.15

}}



whileHover={{

y:-12

}}




onClick={()=>setSelected(item.image)}



className="
group
relative
cursor-pointer
overflow-hidden
rounded-[40px]
bg-white
shadow-xl
"

>



<img


src={item.image}



alt={item.title}



className="
h-[420px]
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

 />








{/* OVERLAY */}



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
opacity-0
transition
duration-500
group-hover:opacity-100
"

/>









<div


className="
absolute
bottom-6
left-6
text-white
opacity-0
transition
duration-500
group-hover:opacity-100
"

>


<p className="
text-sm
uppercase
tracking-widest
text-white/70
">


{item.category}


</p>




<h3

className="
text-2xl
font-bold
"

>


{item.title}


</h3>



</div>









<div

className="
absolute
right-5
top-5
rounded-full
bg-white/80
p-3
opacity-0
transition
group-hover:opacity-100
"

>

<ZoomIn/>

</div>






</motion.div>



))

}




</div>






</div>









{/* LIGHTBOX */}



<AnimatePresence>


{

selected && (



<motion.div


initial={{

opacity:0

}}


animate={{

opacity:1

}}


exit={{

opacity:0

}}



className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/80
backdrop-blur-xl
p-5
"

onClick={()=>setSelected(null)}


>





<motion.img


initial={{

scale:.8

}}


animate={{

scale:1

}}


exit={{

scale:.8

}}



src={selected}



className="
max-h-[90vh]
max-w-5xl
rounded-[40px]
shadow-2xl
"




onClick={(e)=>e.stopPropagation()}



/>






<button


className="
absolute
right-8
top-8
rounded-full
bg-white
p-4
"


onClick={()=>setSelected(null)}


>


<X/>


</button>






</motion.div>



)


}



</AnimatePresence>










</section>



)


}