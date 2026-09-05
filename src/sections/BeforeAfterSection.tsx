import { useState } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  WandSparkles
} from "lucide-react";


import BeforeAfterModal from "../components/BeforeAfterModal";



import browBefore from "../assets/images/before-after/brow-before.png";
import browAfter from "../assets/images/before-after/brow-after.png";

import lashesBefore from "../assets/images/before-after/lashes-before.png";
import lashesAfter from "../assets/images/before-after/lashes-after.png";

import lipsBefore from "../assets/images/before-after/lips-before.png";
import lipsAfter from "../assets/images/before-after/lips-after.png";

import skinBefore from "../assets/images/before-after/skin-before.png";
import skinAfter from "../assets/images/before-after/skin-after.png";





interface Transformation {


title:string;

category:string;

before:string;

after:string;

description:string;


}






const transformations:Transformation[] = [



{
title:"Brow Transformation",

category:"Brows",

before:browBefore,

after:browAfter,

description:
"Natural eyebrow design enhancing symmetry and elegance."
},




{
title:"Lashes Enhancement",

category:"Lashes",

before:lashesBefore,

after:lashesAfter,

description:
"Beautiful lashes creating a more expressive and glamorous look."
},




{
title:"Lip Beauty",

category:"Lips",

before:lipsBefore,

after:lipsAfter,

description:
"Soft pigmentation and natural color restoration."
},




{
title:"Skin Renewal",

category:"Skin",

before:skinBefore,

after:skinAfter,

description:
"Advanced skincare treatments for healthier radiant skin."
}



];









function BeforeAfterSection(){



const [selectedResult,setSelectedResult] = 
useState<Transformation | null>(null);





return(



<section


id="before-after"


className="
relative
overflow-hidden
bg-[#faf4f2]
py-32
"


>





{/* BACKGROUND LIGHTS */}



<div

className="
absolute
top-20
left-0
h-96
w-96
rounded-full
bg-pink-200/30
blur-[120px]
"

/>



<div

className="
absolute
bottom-0
right-0
h-[500px]
w-[500px]
rounded-full
bg-[#d7b2a8]/30
blur-[140px]
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







{/* HEADER */}




<motion.div


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
gap-3
uppercase
tracking-[6px]
text-sm
text-[#b88686]
"

>


<Sparkles size={18}/>


Beauty Transformations


</div>







<h2

className="
mt-6
text-5xl
font-black
text-gray-800
md:text-6xl
"

>


Before & After


</h2>








<p

className="
mx-auto
mt-5
max-w-2xl
text-lg
text-gray-500
"

>


Discover the incredible results achieved
with our premium beauty treatments.


</p>





</motion.div>












{/* RESULTS */}



<div

className="
grid
gap-14
md:grid-cols-2
"

>



{

transformations.map((item,index)=>(





<motion.div



key={item.title}



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



transition={{

delay:index*0.15

}}



whileHover={{

y:-12,

scale:1.03

}}



className="
group
overflow-hidden
rounded-[45px]
bg-white
shadow-[0_30px_80px_rgba(0,0,0,.12)]
"

>








{/* IMAGES */}




<div

className="
relative
grid
grid-cols-2
h-[330px]
overflow-hidden
"

>







{/* BEFORE */}



<div

className="
relative
overflow-hidden
"

>


<img

src={item.before}

alt={`${item.title} before`}


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
left-5
top-5
rounded-full
bg-black/70
px-5
py-2
text-sm
font-semibold
text-white
backdrop-blur-xl
"

>


BEFORE


</div>



</div>









{/* AFTER */}



<div

className="
relative
overflow-hidden
"

>


<img

src={item.after}

alt={`${item.title} after`}


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
right-5
top-5
rounded-full
bg-[#d59aa4]
px-5
py-2
text-sm
font-semibold
text-white
backdrop-blur-xl
"

>


AFTER


</div>



</div>









{/* DIVIDER */}



<div

className="
absolute
left-1/2
top-0
h-full
w-[3px]
-translate-x-1/2
bg-white
shadow-[0_0_25px_white]
"

/>





</div>












{/* TEXT */}



<div

className="
p-8
"

>




<div

className="
flex
items-center
gap-2
text-xs
uppercase
tracking-[5px]
text-[#b88686]
"

>


<WandSparkles size={15}/>


{item.category}


</div>







<h3

className="
mt-4
text-3xl
font-black
text-gray-800
"

>


{item.title}


</h3>







<p

className="
mt-4
leading-relaxed
text-gray-500
"

>


{item.description}


</p>









<motion.button



whileHover={{

scale:1.08

}}



onClick={()=>setSelectedResult(item)}



className="
mt-7
flex
items-center
gap-3
rounded-full
bg-[#b88686]
px-7
py-3
text-white
shadow-lg
"

>


View Result


<ArrowRight size={18}/>


</motion.button>






</div>






</motion.div>




))


}



</div>






</div>









<BeforeAfterModal


open={selectedResult !== null}


close={()=>setSelectedResult(null)}


result={selectedResult}


/>







</section>



)

}





export default BeforeAfterSection;