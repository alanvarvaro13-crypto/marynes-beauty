import { useState } from "react";
import { motion } from "framer-motion";

import {
  X,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ZoomIn
} from "lucide-react";

import { business } from "../config/business";


interface Result {

  title:string;

  category:string;

  before:string;

  after:string;

  description:string;

}


interface Props {

  open:boolean;

  close:()=>void;

  result:Result|null;

}



export default function BeforeAfterModal({

  open,

  close,

  result

}:Props){


const [zoomImage,setZoomImage] = useState<string|null>(null);



if(!open || !result)
return null;



const message = encodeURIComponent(

`Hello ${business.name} ✨

I loved this beauty transformation:

💎 Treatment: ${result.title}

✨ Category: ${result.category}

Could you please provide more information about availability?

Thank you 💕`

);



const whatsapp =

`https://api.whatsapp.com/send?phone=${business.whatsapp.number.replace("+","")}&text=${message}`;



return(

<>


{/* MAIN MODAL */}

<div

className="
fixed
inset-0
z-[80]
flex
items-center
justify-center
bg-black/70
backdrop-blur-xl
p-3
overflow-y-auto
"

>


<motion.div


initial={{
opacity:0,
scale:.92
}}


animate={{
opacity:1,
scale:1
}}


transition={{
duration:.25
}}



onClick={(e)=>e.stopPropagation()}



className="
relative
w-full
max-w-6xl
max-h-[95vh]
overflow-y-auto
rounded-[35px]
bg-white
shadow-2xl
"

>





{/* CLOSE BUTTON */}


<button


onClick={close}


className="

sticky
top-4
float-right
mr-4
mt-4
z-[100]

flex
items-center
justify-center

rounded-full

bg-white

w-12
h-12

shadow-xl

hover:scale-110

transition

"

>


<X size={24}/>


</button>






{/* HEADER */}


<div

className="
bg-[#faf4f2]
p-6
md:p-10
text-center
clear-both
"

>


<div

className="
flex
justify-center
items-center
gap-3
uppercase
tracking-[5px]
text-xs
md:text-sm
text-[#b88686]
"

>

<Sparkles size={18}/>


{result.category}


</div>





<h2

className="
mt-4
text-3xl
md:text-5xl
font-black
text-gray-800
"

>


{result.title}


</h2>



</div>








{/* IMAGES */}



<div

className="

grid

grid-cols-1

md:grid-cols-2

gap-5

md:gap-8

p-5

md:p-8

"

>





{/* BEFORE */}


<div


onClick={()=>setZoomImage(result.before)}


className="

relative

cursor-pointer

overflow-hidden

rounded-[30px]

shadow-xl

group

"


>


<img


src={result.before}


alt="before"


className="

w-full

h-[260px]

md:h-[420px]

object-cover

group-hover:scale-105

transition

duration-500

"


/>





<div


className="

absolute

top-4

left-4

rounded-full

bg-black/70

px-5

py-2

text-white

font-bold

text-sm

"


>

BEFORE


</div>







<div


className="

absolute

bottom-4

right-4

rounded-full

bg-white

px-4

py-2

flex

gap-2

items-center

shadow-xl

text-sm

"


>


<ZoomIn size={16}/>


Zoom


</div>



</div>








{/* AFTER */}



<div


onClick={()=>setZoomImage(result.after)}


className="

relative

cursor-pointer

overflow-hidden

rounded-[30px]

shadow-xl

group

"


>


<img


src={result.after}


alt="after"


className="

w-full

h-[260px]

md:h-[420px]

object-cover

group-hover:scale-105

transition

duration-500

"


/>






<div


className="

absolute

top-4

right-4

rounded-full

bg-[#d59aa4]

px-5

py-2

text-white

font-bold

text-sm

"


>

AFTER


</div>





<div


className="

absolute

bottom-4

right-4

rounded-full

bg-white

px-4

py-2

flex

gap-2

items-center

shadow-xl

text-sm

"


>


<ZoomIn size={16}/>


Zoom


</div>




</div>





</div>









{/* DESCRIPTION */}



<div


className="

px-6

md:px-10

pb-8

"


>



<p


className="

text-base

md:text-lg

leading-relaxed

text-gray-600

"


>


{result.description}


</p>







<motion.a


href={whatsapp}


target="_blank"


rel="noreferrer"



whileHover={{
scale:1.05
}}



className="


mt-8


flex

justify-center

items-center

gap-3


rounded-full


bg-green-500


px-8

py-4


text-white


font-semibold


shadow-xl


"


>


<MessageCircle/>


Book This Treatment


<ArrowRight/>


</motion.a>



</div>






</motion.div>


</div>









{/* ZOOM IMAGE */}



{

zoomImage && (


<div


onClick={()=>setZoomImage(null)}



className="

fixed

inset-0

z-[200]

flex

items-center

justify-center

bg-black/90

p-4

"


>



<button


onClick={()=>setZoomImage(null)}


className="

absolute

top-6

right-6

z-[210]

rounded-full

bg-white

p-3

shadow-xl

"


>


<X size={30}/>


</button>






<motion.img


initial={{

scale:.7,

opacity:0

}}



animate={{

scale:1,

opacity:1

}}



transition={{

duration:.3

}}



src={zoomImage}


alt="zoom"


className="

max-w-[95vw]

max-h-[85vh]

object-contain

rounded-3xl

shadow-[0_0_100px_rgba(255,255,255,.4)]

"


/>




</div>


)

}



</>

)

}