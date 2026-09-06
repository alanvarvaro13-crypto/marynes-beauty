import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  Sparkles,
  MessageCircle,
  Star,
  Heart,
  ChevronDown,
  Gem
} from "lucide-react";


import { useLanguage } from "../hooks/useLanguage";
import { business } from "../config/business";


import logo from "../assets/logo/marynes-logo.png";
import heroVideo from "../assets/videos/hero-video.mp4";


import ParticlesBackground from "../components/ParticlesBackground";



function HeroSection(){


const {t}=useLanguage();



const titleWords=t.hero.title.split(" ");



const floatingParticles = useMemo(()=>{


return Array.from({length:18}).map((_,index)=>(

{

id:index,

left:`${(index*13)%90}%`,

top:`${10+(index*17)%80}%`,

size: index%3===0 ? 8 : 5,

duration:5+(index%5),

delay:index*0.2

}

))


},[]);





return(


<section

className="
relative
min-h-screen
overflow-hidden
flex
items-center
bg-[#211c1d]
"


>



{/* VIDEO BACKGROUND */}


<video

src={heroVideo}

autoPlay

muted

loop

playsInline

className="
absolute
inset-0
h-full
w-full
object-cover
scale-125
blur-[100px]
opacity-30
"

/>





{/* DARK PREMIUM OVERLAY */}


<div

className="
absolute
inset-0
bg-gradient-to-br
from-black/90
via-black/60
to-[#c89595]/50
"

/>





{/* AURORA */}


<motion.div

animate={{

x:[0,120,0],

y:[0,-80,0]

}}

transition={{

duration:14,

repeat:Infinity,

ease:"easeInOut"

}}

className="
absolute
top-10
left-10
h-[450px]
w-[450px]
rounded-full
bg-pink-300/30
blur-[160px]
"

/>



<motion.div

animate={{

x:[0,-100,0],

y:[0,80,0]

}}

transition={{

duration:16,

repeat:Infinity

}}

className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-yellow-200/20
blur-[170px]
"

/>





{/* PARTICLES */}


<div

className="
absolute
inset-0
z-10
pointer-events-none
"

>

<ParticlesBackground/>

</div>





{/* DIAMOND DUST */}


{

floatingParticles.map((particle)=>(


<motion.div

key={particle.id}


animate={{

y:[0,-50,0],

opacity:[0.2,1,0.2],

scale:[1,1.5,1]

}}


transition={{

duration:particle.duration,

repeat:Infinity,

delay:particle.delay

}}


style={{

left:particle.left,

top:particle.top,

width:particle.size,

height:particle.size

}}



className="
absolute
z-20
rounded-full
bg-white
shadow-[0_0_25px_white]
"

/>


))


}







{/* CONTENT */}



<div

className="
relative
z-30
mx-auto
grid
max-w-7xl
items-center
gap-20
px-6
py-32
md:grid-cols-2
"


>




{/* LEFT */}



<motion.div


initial={{

opacity:0,

x:-80

}}


animate={{

opacity:1,

x:0

}}


transition={{

duration:1

}}



className="
text-white
"

>




{/* LOGO */}


<div

className="
relative
mb-10
w-fit
"

>


<div

className="
absolute
inset-0
rounded-full
bg-pink-300/50
blur-[70px]
animate-pulse
"

/>


<motion.img


src={logo}


alt={business.name}



animate={{

y:[0,-15,0],

rotate:[0,5,-5,0]

}}



transition={{

duration:6,

repeat:Infinity

}}



className="
relative
h-36
w-36
rounded-full
border
border-white/40
shadow-[0_0_80px_rgba(255,220,230,.8)]
"

/>



</div>






<div

className="
flex
items-center
gap-3
uppercase
tracking-[7px]
text-xs
text-white/80
"

>

<Sparkles size={16}/>

Beauty Studio

</div>






<h1


className="
mt-6
text-5xl
font-black
leading-[1.05]
md:text-7xl
drop-shadow-[0_15px_40px_rgba(0,0,0,.5)]
"


>


{

titleWords.map((word,index)=>(


<motion.span


key={word}



initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.15

}}



className="
mr-3
inline-block
bg-gradient-to-r
from-white
via-[#ffe5eb]
to-[#dca0aa]
bg-clip-text
text-transparent
"

>


{word}


</motion.span>


))


}


</h1>






<p

className="
mt-7
max-w-xl
text-lg
leading-relaxed
text-white/90
drop-shadow-lg
"

>

{t.hero.description}

</p>







<motion.a


href={`https://wa.me/${business.whatsapp.number.replace("+","")}`}



whileHover={{

scale:1.08

}}



className="
mt-10
inline-flex
items-center
gap-3
rounded-full
bg-[#c89595]
px-10
py-5
text-white
shadow-[0_0_70px_rgba(200,149,149,.9)]
"

>


<MessageCircle/>

{t.hero.button}


</motion.a>





</motion.div>









{/* VIDEO 3D */}



<motion.div


initial={{

opacity:0,

scale:.7

}}


animate={{

opacity:1,

scale:1

}}


transition={{

duration:1.2

}}



className="
relative
flex
justify-center
"

style={{

perspective:"1200px"

}}



>



<div

className="
absolute
h-[500px]
w-[350px]
rounded-full
bg-pink-300/30
blur-[120px]
"

 />





<motion.div


animate={{

y:[0,-20,0],

rotateY:[0,5,0,-5,0],

rotateX:[0,3,0,-3,0]

}}


transition={{

duration:8,

repeat:Infinity,

ease:"easeInOut"

}}



className="
relative
rounded-[60px]
p-[5px]
bg-gradient-to-br
from-white
via-pink-300
to-[#b88686]
shadow-[0_0_120px_rgba(255,200,220,.9)]
"

>



<div

className="
group
relative
overflow-hidden
rounded-[55px]
"

>



<video

src={heroVideo}

autoPlay

muted

loop

playsInline


className="
h-[650px]
w-[370px]
object-cover
"

/>





<motion.div


animate={{

x:["-150%","250%"]

}}


transition={{

duration:5,

repeat:Infinity,

repeatDelay:3

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
inset-0
bg-gradient-to-tr
from-white/10
via-transparent
to-pink-200/20
"

/>





<div

className="
absolute
bottom-7
left-7
rounded-full
bg-white/30
border
border-white/30
px-6
py-3
text-white
backdrop-blur-xl
shadow-xl
"

>


<div className="flex items-center gap-2">


<Heart size={18}/>

Beauty Specialist


</div>


</div>




</div>



</motion.div>





{/* BADGES */}



<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:4,

repeat:Infinity

}}



className="
absolute
-left-12
top-20
rounded-2xl
bg-white/30
border
border-white/30
px-5
py-3
text-white
backdrop-blur-xl
"

>

<Star size={18}/>

5.0 Rating


</motion.div>






<motion.div

animate={{

y:[0,15,0]

}}

transition={{

duration:4,

repeat:Infinity

}}



className="
absolute
-right-12
bottom-28
rounded-2xl
bg-white/30
border
border-white/30
px-5
py-4
text-white
backdrop-blur-xl
"

>


<div className="flex items-center gap-2">


<Gem size={18}/>

Premium Care


</div>


</motion.div>




</motion.div>






</div>








<motion.div

animate={{

y:[0,10,0]

}}

transition={{

duration:2,

repeat:Infinity

}}



className="
absolute
bottom-8
left-1/2
z-40
-translate-x-1/2
text-white/70
"

>


<ChevronDown/>


</motion.div>





</section>


)


}


export default HeroSection;