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


{/* MODAL */}


<div

onClick={close}

className="
fixed
inset-0
z-[80]
flex
items-center
justify-center
bg-black/70
backdrop-blur-xl
p-5
"

>


<motion.div

onClick={(e)=>e.stopPropagation()}

initial={{
opacity:0,
scale:.85
}}

animate={{
opacity:1,
scale:1
}}

className="
relative
w-full
max-w-6xl
overflow-hidden
rounded-[45px]
bg-white
shadow-2xl
"

>



<button

onClick={close}

className="
absolute
right-6
top-6
z-20
rounded-full
bg-white
p-3
shadow-xl
"

>

<X/>

</button>





<div

className="
bg-[#faf4f2]
p-8
text-center
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
text-[#b88686]
"

>

<Sparkles size={18}/>

{result.category}

</div>



<h2

className="
mt-4
text-4xl
font-black
text-gray-800
"

>

{result.title}

</h2>


</div>








<div

className="
grid
gap-8
p-8
md:grid-cols-2
"

>





{/* BEFORE */}


<div

onClick={()=>setZoomImage(result.before)}

className="
relative
cursor-pointer
overflow-hidden
rounded-[35px]
shadow-xl
group
"

>


<img

src={result.before}

alt="before"

className="
h-[420px]
w-full
object-cover
group-hover:scale-105
transition
duration-500
"

/>



<div

className="
absolute
top-5
left-5
rounded-full
bg-black/70
px-6
py-3
text-white
font-bold
"

>

BEFORE

</div>



<div

className="
absolute
bottom-5
right-5
rounded-full
bg-white
px-5
py-3
flex
gap-2
items-center
shadow-xl
"

>

<ZoomIn size={18}/>

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
rounded-[35px]
shadow-xl
group
"

>


<img

src={result.after}

alt="after"

className="
h-[420px]
w-full
object-cover
group-hover:scale-105
transition
duration-500
"

/>



<div

className="
absolute
top-5
right-5
rounded-full
bg-[#d59aa4]
px-6
py-3
text-white
font-bold
"

>

AFTER

</div>



<div

className="
absolute
bottom-5
right-5
rounded-full
bg-white
px-5
py-3
flex
gap-2
items-center
shadow-xl
"

>

<ZoomIn size={18}/>

Zoom

</div>



</div>







</div>








<div

className="
px-10
pb-10
"

>


<p

className="
text-lg
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
px-10
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









{/* ZOOM CORREGIDO */}


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
"

>


<motion.div

initial={{
scale:.6,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:.35
}}

onClick={(e)=>e.stopPropagation()}

className="
relative
flex
items-center
justify-center
w-[80vw]
h-[80vh]
"

>


<img

src={zoomImage}

alt="zoom"

className="
w-full
h-full
object-contain
rounded-3xl
shadow-[0_0_100px_rgba(255,255,255,.4)]
"

/>



<button

onClick={()=>setZoomImage(null)}

className="
absolute
right-[-20px]
top-[-20px]
rounded-full
bg-white
p-4
shadow-xl
"

>

<X size={30}/>

</button>


</motion.div>


</div>


)

}



</>

)

}