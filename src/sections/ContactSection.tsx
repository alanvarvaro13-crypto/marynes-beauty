import { useState } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from "lucide-react";


import {
  FaTiktok,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";


import { business } from "../config/business";





function ContactSection(){


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [message,setMessage]=useState("");





const whatsappMessage = encodeURIComponent(

`Hello ${business.name} ✨


I would like to book a beauty appointment.


👤 Name:
${name}


📧 Email:
${email}


💬 Message:
${message}


Thank you 💕`

);





const whatsapp =

`https://api.whatsapp.com/send?phone=${business.whatsapp.number.replace("+","")}&text=${whatsappMessage}`;







return(


<section


id="contact"


className="
relative
scroll-mt-32
overflow-hidden
bg-[#171214]
py-32
"


>





<div

className="
absolute
left-0
top-20
h-[400px]
w-[400px]
rounded-full
bg-pink-500/20
blur-[150px]
"

/>



<div

className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-[#c89595]/20
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
gap-3
text-sm
uppercase
tracking-[6px]
text-[#e0aeb5]
"

>

<Sparkles size={18}/>

Contact Us

</div>




<h2

className="
mt-6
text-5xl
font-black
text-white
md:text-6xl
"

>

Ready To Enhance

<br/>

Your Natural Beauty?

</h2>




<p

className="
mx-auto
mt-6
max-w-2xl
text-gray-300
"

>

Book your appointment today and experience a beauty treatment designed especially for you.

</p>



</motion.div>









<div

className="
grid
gap-10
lg:grid-cols-2
"

>









{/* LEFT */}



<motion.div


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


className="
rounded-[45px]
border
border-white/10
bg-white/10
p-10
backdrop-blur-xl
"

>



<h3

className="
text-3xl
font-bold
text-white
"

>

Marynes Beauty Studio

</h3>





<div

className="
mt-8
space-y-7
"

>




<div className="flex gap-4">


<div className="
rounded-full
bg-[#c89595]
p-3
text-white
">

<MapPin/>

</div>


<div>

<p className="font-semibold text-white">
Location
</p>


<p className="text-gray-300">
{business.location.address}
</p>


<p className="text-gray-300">
{business.location.city}
</p>


</div>


</div>








<div className="flex gap-4">


<div className="
rounded-full
bg-[#c89595]
p-3
text-white
">

<Clock/>

</div>



<div>

<p className="font-semibold text-white">
Hours
</p>


<p className="text-gray-300">
{business.hours.days}
</p>


<p className="text-gray-300">
{business.hours.time}
</p>


</div>


</div>





</div>







<div

className="
mt-10
flex
gap-4
"

>


<a
href={business.social.instagram}
target="_blank"
rel="noreferrer"
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-white/10
text-white
hover:bg-[#c89595]
transition
"
>

<FaInstagram/>

</a>




<a
href={business.social.tiktok}
target="_blank"
rel="noreferrer"
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-white/10
text-white
hover:bg-[#c89595]
transition
"
>

<FaTiktok/>

</a>




<a
href={business.social.facebook}
target="_blank"
rel="noreferrer"
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-white/10
text-white
hover:bg-[#c89595]
transition
"
>

<FaFacebook/>

</a>



</div>






</motion.div>














{/* RIGHT */}





<motion.div


initial={{
opacity:0,
x:50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


className="
rounded-[45px]
bg-white
p-10
shadow-2xl
"

>




<h3

className="
text-3xl
font-black
text-gray-800
"

>

Book Appointment

</h3>





<p

className="
mt-3
text-gray-500
"

>

Send us a message and we will contact you shortly.

</p>






<div

className="
mt-8
space-y-5
"

>



<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Your Name"

className="
w-full
rounded-2xl
bg-[#faf4f2]
px-5
py-4
outline-none
"

/>






<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Email"

className="
w-full
rounded-2xl
bg-[#faf4f2]
px-5
py-4
outline-none
"

/>







<textarea


value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Tell us what treatment you are interested in..."

rows={4}

className="
w-full
resize-none
rounded-2xl
bg-[#faf4f2]
px-5
py-4
outline-none
"

/>



</div>








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
items-center
justify-center
gap-3
rounded-full
bg-[#c89595]
px-8
py-4
font-semibold
text-white
shadow-xl
"

>



<MessageCircle size={22}/>


Send WhatsApp


<Send size={18}/>



</motion.a>






</motion.div>








</div>







</div>





</section>



)


}





export default ContactSection;