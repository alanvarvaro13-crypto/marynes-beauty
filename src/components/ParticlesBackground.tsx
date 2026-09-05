import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";


export default function ParticlesBackground(){


const options:ISourceOptions = {


fullScreen:{
enable:false,
},


detectRetina:true,



particles:{


number:{


value:90,


density:{
enable:true,

}


},




color:{


value:[

"#ffffff",
"#f8c8dc",
"#ffd6a5",
"#fff4b8"

]


},





shape:{


type:[
"circle"
]


},





opacity:{


value:{
min:.2,
max:.8
}


},





size:{


value:{
min:1,
max:4
}


},






move:{


enable:true,


speed:{
min:.3,
max:1.2
},


direction:"top",


random:true,


straight:false,


outModes:{


default:"out"


}



},






links:{


enable:true,


distance:140,


color:"#ffffff",


opacity:.15,


width:1



}





},






interactivity:{



events:{



onHover:{


enable:true,


mode:"grab"



},



onClick:{


enable:true,


mode:"push"


}



},






modes:{



grab:{


distance:180,


links:{


opacity:.35


}


},




push:{


quantity:4


}



}





},







background:{


color:"transparent"


}




};





return(


<Particles


id="beauty-particles"


options={options}


className="

absolute

inset-0

h-full

w-full

pointer-events-none

z-10

"

/>


)


}