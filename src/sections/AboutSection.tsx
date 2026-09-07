import { motion } from "framer-motion";

import {
  Sparkles,
  Award,
  Heart,
  Gem
} from "lucide-react";


import workingOne from "../assets/images/about/marynes-working-01.jpeg";
import workingTwo from "../assets/images/about/marynes-working-02.jpeg";



const features = [

{
icon:<Sparkles size={26}/>,
title:"Personalized Beauty",
text:
"Treatments designed specially for your unique features."
},


{
icon:<Award size={26}/>,
title:"Professional Techniques",
text:
"Advanced methods focused on quality and precision."
},


{
icon:<Heart size={26}/>,
title:"Natural Results",
text:
"Enhancing your beauty while preserving your essence."
},


{
icon:<Gem size={26}/>,
title:"Experience",
text:
"A comfortable and relaxing beauty environment."
}

];




const stats=[

{
number:"500+",
label:"Happy Clients"
},

{
number:"5.0",
label:"Rating ⭐"
},

{
number:"100%",
label:"Dedication"
}

];






function AboutSection(){


return(


<section

id="about"

className="
relative
overflow-hidden
bg-[#fffafa]
py-32
"


>


<div

className="
absolute
left-[-100px]
top-20
h-[500px]
w-[500px]
rounded-full
bg-pink-200/40
blur-[150px]
"

/>



<div

className="
absolute
right-[-100px]
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-[#d9b5ac]/40
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


<div

className="
grid
items-center
gap-16
lg:grid-cols-2
"

>



{/* IMAGES */}


<motion.div


initial={{
opacity:0,
x:-70
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


className="
relative
mx-auto
h-[600px]
w-full
max-w-[450px]
"


>



{/* MAIN IMAGE */}


<motion.div


whileHover={{
scale:1.03
}}


className="
absolute
left-0
top-0
h-[500px]
w-[360px]
overflow-hidden
rounded-[55px]
shadow-[0_40px_80px_rgba(0,0,0,.18)]
"


>


<img

src={workingOne}

alt="Marynes Beauty Studio"

className="
h-full
w-full
object-cover
"

/>


</motion.div>






{/* SMALL IMAGE */}



<motion.div


animate={{
y:[0,-10,0]
}}


transition={{
duration:5,
repeat:Infinity
}}



whileHover={{
scale:1.05
}}



className="
absolute
bottom-10
right-0
h-[200px]
w-[160px]
overflow-hidden
rounded-[35px]
border-[8px]
border-white
shadow-2xl
"


>


<img

src={workingTwo}

alt="Beauty treatment"

className="
h-full
w-full
object-cover
"

/>



</motion.div>







{/* LABEL */}



<motion.div


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



className="
absolute
bottom-0
left-5
rounded-full
bg-white/90
backdrop-blur-xl
px-7
py-4
shadow-xl
"


>


<p

className="
text-xs
uppercase
tracking-[5px]
text-[#b88686]
"

>

Beauty Studio

</p>


</motion.div>





</motion.div>








{/* TEXT */}



<motion.div


initial={{
opacity:0,
x:70
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


>



<div

className="
flex
items-center
gap-3
text-sm
uppercase
tracking-[6px]
text-[#b88686]
"

>


<Sparkles size={18}/>

About Our Studio


</div>







<h2

className="
mt-6
text-5xl
font-black
leading-tight
text-gray-800
md:text-6xl
"

>


Creating Beauty,

<br/>

Confidence & Elegance


</h2>








<p

className="
mt-8
text-lg
leading-relaxed
text-gray-600
"

>


At Marynes Beauty Studio, every treatment is created with precision,
care and passion.


<br/>
<br/>


We specialize in enhancing your natural beauty through personalized
beauty services designed to make you feel confident, elegant and radiant.


</p>







<div

className="
mt-10
grid
gap-5
sm:grid-cols-2
"

>


{

features.map((item)=>(


<motion.div


key={item.title}


whileHover={{
y:-10,
scale:1.03
}}


className="
rounded-[30px]
bg-white
p-6
shadow-lg
border
border-white
"

>


<div

className="
mb-4
text-[#b88686]
"

>

{item.icon}

</div>


<h3

className="
font-bold
text-gray-800
"

>

{item.title}

</h3>



<p

className="
mt-2
text-sm
leading-relaxed
text-gray-500
"

>

{item.text}

</p>


</motion.div>


))


}


</div>







<div

className="
mt-12
flex
flex-wrap
gap-5
"

>


{

stats.map((item)=>(


<div


key={item.label}


className="
rounded-[30px]
bg-white/90
px-7
py-5
shadow-xl
backdrop-blur-xl
"

>


<h3

className="
text-3xl
font-black
text-[#b88686]
"

>

{item.number}

</h3>


<p

className="
text-sm
text-gray-500
"

>

{item.label}

</p>


</div>


))


}


</div>





</motion.div>




</div>


</div>



</section>


)

}


export default AboutSection;