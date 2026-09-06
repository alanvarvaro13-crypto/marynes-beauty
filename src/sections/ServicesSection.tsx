import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


import CategoryCard from "../components/CategoryCard";

import TreatmentModal from "../components/TreatmentModal";


import {
  treatments,
  type Treatment
} from "../data/treatments";



import lashesLogo from "../assets/logo/lashes-logo.png";
import browsLogo from "../assets/logo/brows-logo.png";
import skinLogo from "../assets/logo/skin-logo.png";
import lipsLogo from "../assets/logo/lips-logo.png";





const categories = [

{
title:"Lashes",

logo:lashesLogo,

description:
"eyelash extensions designed to enhance your eyes with elegance."

},


{
title:"Brows",

logo:browsLogo,

description:
"Semi-permanent eyebrow techniques for a perfect natural look."

},


{
title:"Skin",

logo:skinLogo,

description:
"Advanced facial treatments for radiant and healthy skin."

},


{
title:"Lips",

logo:lipsLogo,

description:
"Beautiful lip enhancement and pigmentation treatments."

}

];






function ServicesSection(){





const [selectedCategory,setSelectedCategory] =

useState<
"Lashes" | "Brows" | "Skin" | "Lips" | null
>(null);







const categoryTreatments:Treatment[] =


selectedCategory

?

treatments.filter(

(item)=>

item.category===selectedCategory

)

:

[];







return(




<section


id="services"


className="
relative
overflow-hidden
bg-[#faf4f2]
py-36
"

>





{/* BACKGROUND LIGHTS */}



<div

className="
absolute
top-10
left-0
h-96
w-96
rounded-full
bg-pink-200/40
blur-[140px]
"

/>





<div

className="
absolute
bottom-0
right-0
h-[450px]
w-[450px]
rounded-full
bg-[#b88686]/20
blur-[150px]
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



transition={{

duration:.8

}}



className="
mb-24
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


Premium Beauty Studio


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


Our Treatments


</h2>









<p


className="
mx-auto
mt-6
max-w-2xl
text-lg
leading-relaxed
text-gray-500
"


>


Discover beauty treatments
created specially to highlight your natural beauty.


</p>







</motion.div>













{/* CATEGORY CARDS */}



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



transition={{

duration:.8

}}



className="
grid
gap-10
md:grid-cols-2
lg:grid-cols-4
"


>






{

categories.map((item,index)=>(




<motion.div


key={item.title}


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



transition={{

delay:index*.15

}}



>


<CategoryCard



title={item.title}



logo={item.logo}



description={item.description}




onClick={()=>


setSelectedCategory(


item.title as

"Lashes" |

"Brows" |

"Skin" |

"Lips"


)


}



/>



</motion.div>






))


}





</motion.div>







</div>












{/* MODAL */}



<TreatmentModal



open={selectedCategory!==null}



close={()=>setSelectedCategory(null)}



title={`${selectedCategory} Collection`}



category={

selectedCategory ??

"Lashes"

}



treatments={categoryTreatments}



/>








</section>



)


}





export default ServicesSection; 