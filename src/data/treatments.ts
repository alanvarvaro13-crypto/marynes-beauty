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

image:"/src/assets/images/services/lashes-classic.jpg"

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

image:"/src/assets/images/services/lashes-hybrid.jpg"

},



{
id:3,

name:"Volume Lashes",

category:"Lashes",

categoryKey:"lashes",

price:"$120",

duration:"3 hours",

description:
"Luxury volume extensions that create a dramatic and glamorous appearance.",

image:"/src/assets/images/services/lashes-volume.jpg"

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

image:"/src/assets/images/services/lashes-brazilian.jpg"

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

image:"/src/assets/images/services/brows-microblading.jpg"

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

image:"/src/assets/images/services/brows-microshading.jpg"

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

image:"/src/assets/images/services/brows-lamination.jpg"

},





{
id:8,

name:"BB Glow Facial",

category:"Skin",

categoryKey:"skin",

price:"$125",

duration:"1 - 2 hours",

description:
"Advanced skin treatment to improve brightness and hydration.",

image:"/src/assets/images/services/facial-bbglow.jpg"

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

image:"/src/assets/images/services/facial-dermapen.jpg"

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

image:"/src/assets/images/services/lips-nanolips.jpg"

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

image:"/src/assets/images/services/lips-pigmentation.jpg"

}


];