import lashesClassic from "../assets/images/services/lashes-classic.jpg";

import lashesHybrid from "../assets/images/services/lashes-hybrid.jpg";

import lashesVolume from "../assets/images/services/lashes-volume.jpg";

import lashesBrazilian from "../assets/images/services/lashes-brazilian.jpg";

import browsMicroblading from "../assets/images/services/brows-microblading.jpg";

import browsMicroshading from "../assets/images/services/brows-microshading.jpg";

import browsLamination from "../assets/images/services/brows-lamination.jpg";

import facialBbGlow from "../assets/images/services/facial-bbglow.jpg";

import facialDermapen from "../assets/images/services/facial-dermapen.jpg";

import lipsNano from "..//assets/images/services/lips-nanolips.jpg";

import lipsPigmentation from "../assets/images/services/lips-pigmentation.png";



export interface Treatment {

id:number;

name:string;

category:string;

categoryKey:string;

price:string;

duration:string;

description:string;

image:string;

}



export const treatments:Treatment[]=[


{
id:1,

name:"Classic Lashes",

category:"Lashes",

categoryKey:"lashes",

price:"$85",

duration:"2 - 3 hours",

description:
"Natural eyelash extensions designed to enhance your eyes with an elegant and soft look.",

image:lashesClassic

},



{
id:2,

name:"Hybrid Lashes",

category:"Lashes",

categoryKey:"lashes",

price:"$100",

duration:"2 - 3 hours",

description:
"A perfect combination between classic and volume lashes for a fuller but natural style.",

image:lashesHybrid

},



{
id:3,

name:"Volume Lashes",

category:"Lashes",

categoryKey:"lashes",

price:"$120",

duration:"3 hours",

description:
"Volume extensions that create a dramatic and glamorous appearance.",

image:lashesVolume

},



{
id:4,

name:"Brazilian Style",

category:"Lashes",

categoryKey:"lashes",

price:"$95",

duration:"2 - 3 hours",

description:
"Special Brazilian lash technique with a beautiful textured effect.",

image:lashesBrazilian

},



{
id:5,

name:"Microblading",

category:"Brows",

categoryKey:"brows",

price:"$350",

duration:"2 hours",

description:
"Semi-permanent eyebrow technique creating realistic hair strokes.",

image:browsMicroblading

},



{
id:6,

name:"Microshading",

category:"Brows",

categoryKey:"brows",

price:"$450",

duration:"2 hours",

description:
"Soft powder eyebrow effect for a defined and elegant look.",

image:browsMicroshading

},



{
id:7,

name:"Brow Lamination",

category:"Brows",

categoryKey:"brows",

price:"$85",

duration:"1 hour",

description:
"Creates lifted and styled brows with a natural finish.",

image:browsLamination

},



{
id:8,

name:"BB Glow",

category:"Skin",

categoryKey:"skin",

price:"$125",

duration:"1 - 2 hours",

description:
`Skin treatment designed to improve brightness and hydration.

Package        Value        Discount

1 Session      $125.00      Regular price

2 Sessions     $225.00      10% Discount

3 Sessions     $318.00      15% Discount`,

image:facialBbGlow

},



{
id:9,

name:"Dermapen",

category:"Skin",

categoryKey:"skin",

price:"$600",

duration:"Multiple sessions",

description:
"Microneedling treatment to improve skin texture and appearance.",

image:facialDermapen

},



{
id:10,

name:"Nano Lips",

category:"Lips",

categoryKey:"lips",

price:"$150",

duration:"2 hours",

description:
"Natural lip enhancement technique with beautiful color definition.",

image:lipsNano

},



{
id:11,

name:"Lip Pigmentation",

category:"Lips",

categoryKey:"lips",

price:"$350",

duration:"2 hours",

description:
"Semi-permanent lip pigmentation for a more balanced appearance.",

image:lipsPigmentation

}


];