import { useEffect, useState } from "react";

import {
  Menu,
  X
} from "lucide-react";


import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";


import { motion } from "framer-motion";


import { business } from "../config/business";


import logo from "../assets/logo/marynes-logo.png";





function Navbar(){


const [scrolled,setScrolled]=useState(false);

const [open,setOpen]=useState(false);





useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY>60);

};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);






const links=[

{
name:"Home",
href:"#"
},

{
name:"Services",
href:"#services"
},

{
name:"Results",
href:"#results"
},

{
name:"Gallery",
href:"#gallery"
},

{
name:"Before & After",
href:"#before-after"
},

{
name:"About",
href:"#about"
},

{
name:"Contact",
href:"#contact"
}

];









return(



<motion.nav


initial={{
y:-120,
opacity:0
}}


animate={{
y:0,
opacity:1
}}


transition={{
duration:1
}}



className="
fixed
top-5
left-0
z-50
w-full
px-6
"



>



<div


className={`

mx-auto

max-w-7xl

rounded-full

transition-all

duration-500


${

scrolled

?

"bg-white/70 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.15)] border border-white/60"

:

"bg-black/20 backdrop-blur-xl border border-white/20 shadow-[0_0_60px_rgba(255,255,255,.1)]"

}


`}


>


<div


className="
flex
items-center
justify-between
px-6
py-3
"


>









{/* LOGO */}



<motion.a


href="#"


whileHover={{
scale:1.12
}}


className="
relative
"



>


<div

className="
absolute
inset-0
rounded-full
bg-pink-300
blur-xl
opacity-50
"

/>



<img


src={logo}


alt={business.name}


className="
relative
h-14
w-14
rounded-full
object-cover
shadow-xl
border
border-white/40
"


/>



</motion.a>















{/* DESKTOP MENU */}



<div


className="
hidden
items-center
gap-2
md:flex
"


>


{


links.map((link)=>(


<a


key={link.name}


href={link.href}



className={`


group

relative

rounded-full

px-3

py-2

text-sm

font-medium

transition-all

duration-300


hover:bg-white/20

hover:backdrop-blur-xl



${

scrolled

?

"text-gray-800"

:

"text-white drop-shadow-[0_2px_5px_rgba(0,0,0,.8)]"

}


`}



>


{link.name}



<span

className="
absolute
bottom-0
left-1/2
h-[2px]
w-0
-translate-x-1/2
rounded-full
bg-[#d99ca5]
transition-all
duration-300
group-hover:w-8
"

/>



</a>



))


}



</div>















{/* SOCIAL */}



<div


className="
hidden
items-center
gap-3
lg:flex
"


>


{


[

{
icon:<FaInstagram/>,
url:business.social.instagram
},

{
icon:<FaTiktok/>,
url:business.social.tiktok
},

{
icon:<FaFacebook/>,
url:business.social.facebook
}

].map((item,index)=>(


<motion.a


key={index}


href={item.url}


target="_blank"


rel="noreferrer"


whileHover={{
y:-5,
scale:1.15
}}



className={`


flex

h-9

w-9

items-center

justify-center

rounded-full



${

scrolled

?

"bg-gray-100 text-gray-700"

:

"bg-white/20 text-white"

}


`}


>


{item.icon}


</motion.a>



))


}



</div>














{/* WHATSAPP */}



<motion.a



href={
`https://wa.me/${business.whatsapp.number.replace("+","")}`
}



target="_blank"


rel="noreferrer"



whileHover={{
scale:1.08
}}



className="

hidden

md:flex

items-center

gap-2

rounded-full

bg-[#c89595]

px-6

py-3

text-white

shadow-[0_0_40px_rgba(200,149,149,.8)]

"



>


<FaWhatsapp size={20}/>


Book Appointment


</motion.a>















{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}



className={`


md:hidden

text-2xl



${

scrolled

?

"text-black"

:

"text-white"

}


`}



>


{


open

?

<X/>

:

<Menu/>

}



</button>









</div>


</div>












{/* MOBILE MENU */}



{


open &&



<motion.div


initial={{
opacity:0,
y:-20
}}


animate={{
opacity:1,
y:0
}}



className="
mt-3
rounded-3xl
bg-white/95
backdrop-blur-xl
p-8
shadow-2xl
md:hidden
"



>


<div


className="
flex
flex-col
gap-5
"


>


{


links.map((link)=>(


<a


key={link.name}


href={link.href}


onClick={()=>setOpen(false)}


className="
text-lg
font-semibold
text-gray-800
"



>


{link.name}



</a>



))


}



<div

className="
flex
gap-5
text-2xl
"


>


<FaInstagram/>

<FaTiktok/>

<FaFacebook/>


</div>



</div>



</motion.div>



}




</motion.nav>


)


}



export default Navbar;