import { CropRotate, PieChart, Settings, ViewInAr, Code, BarChart, CloudOutlined, FacoritBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { MdEmail, MdLocalPhone, } from 'react-icons/md';


export const nav = [

  {
    text: "Home",
    path: "/",
  },
  
  {
    text: "Services",
    path: "/services",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Blog",
    path: "/blog",
  },
 
  {
    text: "Contact",
    path: "/contact",
  },
  {
    text: "Admin",
    path: "/admin/dashboard",
  },

]

export const home =[
  {
    text:<i>Lada Vesta</i>,
    title: "Bazra Motors",
    cover:process.env.PUBLIC_URL +"../hero/vesta3.jpg",
  },
 
  // {
  //   text:<i>Lada-x-cross-5</i>,
  //   title: "Bazra Motors",
  //   cover:"../hero/lada-x-cross-5-1.jpg",
  // },


{
  text:<i>max-vygoda-up</i>,
  title: "Bazra Motors",
  cover:process.env.PUBLIC_URL +"../hero/LastNews.jpg",
},
{
  text:<i>Lada Niva car</i>,
  title: "Bazra Motors",
  cover:"../hero/GosProg_112023.webp",
},
{
  text:<i> Lada pres-releas</i>,
  title: "Bazra Motors",
  cover:process.env.PUBLIC_URL +"../hero/pres-releas.jpg",
},
{
  text:<i>Lada Niva car</i>,
  title: "Bazra Motors",
  cover:process.env.PUBLIC_URL +"../hero/main_desktop.webp",
},

{
  text:<i>lada raven supercar</i>,
  title: "Bazra Motors",
  cover:process.env.PUBLIC_URL +"../hero/2015_lada_raven_supercar_concept-HD.jpg",
},

{
  text:<i>Lada-Crossover-Models</i>,
  title: "Bazra Motors",
  cover:process.env.PUBLIC_URL +"../hero/Lada-Crossover-Models.jpg",
},
{
  text:"Lada-Niva-Bronto Car",
  title: "Bazra Motors",
  cover:"../hero/Lada-Niva-Bronto-Video-main.jpg",
},
{
  text:<i>Lada-x-cross-5</i>,
  title: "Bazra Motors",
  cover:"../hero/lada-x-cross-5-1.jpg",
},
]

export const about =[
  {
  text:"About us Bazra",
  Desc: <p>A company vision, usually expressed in a company vision statement, describes an organization's aspirational long-term goal. Clearly defining your company vision helps guide decision-making, build your brand, and increase employee engagement.</p>,
  cover:"../IMGlogo1.jpg",
}
]


export const overview =[
  {
  id:1,
  title:"Exprience",
  Desc: "Ethiopian-owned company with 30+ years of experience in car manufacturing service-oriented company",
  cover:"../icon1.png",
},
{
id:2,
icon: <Settings/>,
title: "Founder",
Desc: "Founded by__ Bazra Motors, based in Addis Ababa, Ethiopia",
cover:"../icon2.png",
},
{id:3,
  icon: <Settings/>,
  title: "Service",
  Desc: "Provide End to End Services to Meet Customer Requirements",
  cover:"../icon3.png",
},
  
  {id:4,
    icon: <Settings/>,
    title: "Employee",
    Desc: "100+ Employees, Certified and Committed to Best Practices",
    cover:"../icon4.png",
  },
  {
    id:5,
    icon: <Settings/>,
    title: "Revenu",
    Desc: "Annual Revenue of 'number+' many ETB OR DOLAR",
    cover:"../icon5.png",
  },
  {
    id:6,
    icon: <CropRotate/>,
    title: "Leading Player",
    Desc: "A Leading Player Manifacturing,IT Market with Many project completed",
    cover:"../icon6.png",
  },
]

export const service =[
  {
  id:1,
  icon: <Settings/>,
  title: "Manifucturing",
  Desc: "Bazra moters Manifucturing",
  cover:"../bz1.png",
},
{
  id:2,
  icon: <CropRotate/>,
  title: "Transport",
  Desc: "Bazra Motors Transport",
  cover:"../bz1.png",
},
{
  id:3,
  icon: <ViewInAr />,
  title: "Motor Vihecle Part",
  Desc: "Bazra Motors  Vihecle Part",
  cover:"../bz1.png",
},
{
  id:4,
  icon: <PieChart/>,
  title: "Import-Export",
  Desc: "Bazra Motors  Import-Export",
  cover:"../bz1.png",
},
{
  id:5,
  icon: <Code />,
  title: "Motor Engineering",
  Desc: "Bazra Motors  Motor Engineering",
  cover:"../bz1.png",
},
{
  id:5,
  icon: <BarChart />,
  title: "Agriculture",
  Desc: "Bazra Motors Agriculture",
  cover:"../bz1.png",
},
]

export const Banservice =[
  {
  id:1,
  icon: <Settings/>,
  title: "",
  Desc: "Bazra Motors description in this About us bazra moters plc",
  cover:"../service12.png",
},

]





export const counter =[
  {
  id:0,
  icon: <CloudOutlined/>,
  num:900,
  title: "Happy Client",
  Desc: "Bazra Motors description in this About us bazra moters plc",
  cover:"../bz1.png",
},
{
  id:1,
  icon: <CropRotate/>,
  num:900,
  title: "Lada Cars",
  Desc: "Bazra Motors description in this About us bazra moters plc",
  cover:"../bz1.png",
},
{
  id:2,
  icon: <ViewInAr />,
  num:900,
  title: "Employee",
  Desc: "Bazra Motors description in this About us bazra moters plc",
  cover:"../bz1.png",
},
{
  id:3,
  icon: <PieChart/>,
  num:100,
  title: "Sister Company",
  Desc: "Bazra Motors description in this About us bazra moters plc",
  cover:"../bz1.png",
},

]


export const hero =[
  "../images/list/p-1.png",
  "../images/list/p-2.png",
  {
    Image:"../images/list/p-2.png",
  }
  
]


export const portfolio = [
  {
    category: "Vesta",
    items: [
      { name: "Lada vasta", title: "Car Model 2", cover: "../portfolio/vesta/techno_672.webp" },
      // { name: "Lada-Niva-Bronto-8", title: "Car Mode3 ", cover: "../portfolio/vesta/spec.PNG" },
      { name: "Vasta Lada", title: "Car Model 4", cover: "../portfolio/vesta/techno_221.webp" },
      { name: "pres-releas", title: "Car Model 5", cover: "../portfolio/vesta/profile_2.webp" },

      // { name: "LADA 4x4", title: "Car Model 1", cover: "../portfolio/vesta/vs_main_header_d.webp" },
      { name: "Lada vasta", title: "Car Model 2", cover: "../portfolio/vesta/techno_691.webp" },
      // { name: "Lada-Niva-Bronto-8", title: "Car Mode3 ", cover: "../hero/Lada-Niva-Bronto-8.jpg" },
      { name: "Vasta Lada", title: "Car Model 4", cover: "../portfolio/vesta/techno_221.webp" },
      { name: "pres-releas", title: "Car Model 5", cover: "../portfolio/vesta/profile_1.webp" },
      // { name: "vaz-black-lada-car", title: "Car Model 6", cover: "../hero/HD-wallpaper-vaz-black-lada-car.jpg" },
    ],
  },
  {
    category: "Granta",
    items: [
      { name: "LADA Granta classic", title: "Manifa Model", cover: "../portfolio/Granta/classic_22_221.webp" },
      { name: "Granta-lada-car", title: "Car Model 6", cover: "../portfolio/Granta/club_195.png" },
      { name: "LADA Granta classic", title: "Manifa Model", cover: "../portfolio/Granta/classic_22_672.webp" },
      { name: "LADA Granta classic", title: "Manifa Model", cover: "../portfolio/Granta/luxe_691.png" },
      { name: "LADA Granta classic", title: "Manifa Model", cover: "../portfolio/Granta/luxe_691.png" },

    ],
  },
  {
    category: "Lada4X4",
    items: [
      { name: "LADA 4x4", title: "Car Model 1", cover: "../portfolio/4x4.png" },
    ],
  },
  // Add more portfolio items as needed
];







export const contact = [
  {
    icon: <i><AddLocationAltOutlined /><a href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis" target="_blank" rel="noopener noreferrer"></a></i>,
    text: <i><a href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis" target="_blank" rel="noopener noreferrer">Friendship Business Center, Airport Rd, Addis</a></i>
  },
  {
    icon: <a><MdLocalPhone /><a href="https://wa.me/251985187059?" target="_blank" rel="noopener noreferrer"></a></a>,
    text: <a><a href="https://wa.me/251985187059?" target="_blank" rel="noopener noreferrer">+251 985187059</a></a>,
  },
  {
    icon: <a><MdEmail /><a href="mailto:amaredagmawi1@gmail.com" target="_blank" rel="noopener noreferrer"></a></a>,
    text: <a><a href="mailto:amaredagmawi1@gmail.com" target="_blank" rel="noopener noreferrer">amaredagmawi1@gmail.com</a></a>,
  },
];








export const bancontact =[
  
  {
   icon:<AddLocationAltOutlined/>,
   text: " addis ababa frindship buliding ",
   cover:"../contactBACK.png",

  },
  
  
]


const defaultDescription = "Navigating the Business Landscape Strategies for Success Explore the dynamic world of business with Bazra's latest blog post. Gain insights into effective strategies, industry trends, and success stories that inspire and empower entrepreneurs Innovation Unleashed: The Heartbeat of Bazra At the core of Bazra's identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra's Success Meet the exceptional individuals contributing to Bazra's success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it's a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.";

export const postData = [
  { 
    id: 1,
    img: "../../../lada.jpeg",
    ttl: "TITLE 1",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 2,
    img: "../../../lada0.jpeg",
    ttl: "TITLE 2",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 3,
    ttl: "TITLE 3",
    mln: 13,
    dsc: defaultDescription,
  },
  {
    id: 4,
    img: "../../../lada1.jpeg",
    ttl: "TITLE 4",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 5,
    img: "../../../lada2.jpeg",
    ttl: "TITLE 5",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 6,
    img: "../../../lada3.jpeg",
    ttl: "TITLE 6",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 7,
    img: "../../../lada.jpeg",
    ttl: "TITLE 7",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 8,
    ttl: "TITLE",
    mln: 13,
    dsc: defaultDescription,
  },
  {
    id: 9,
    img: "../../../lada.jpeg",
    ttl: "TITLE 8",
    dsc: defaultDescription,
    mln: 3,

  },
  {
    id: 10,
    img: "../../../lada.jpeg",
    ttl: "TITLE 9",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    mln: 13,
    dsc: defaultDescription,
  },
];






export const list = [
  {
    id: 1,
    cover: "../lada.JPEG",
    name: "LADA 4x4",
    location: "Adiss Ababa",
    category: "For Rent",
    price: "Birr 3,700",
    type: "",
  },
  {
    id: 2,
    cover: "../lada.JPEG",
     name: "Lada Vesta",
    location: "Addiss ababa",
    category: "For Sale",
    price: "Birr 9,750",
    type: "",
  },
  {
    id: 3,
    cover: "../lada.JPEG",
    name: "car",
    location: "Addis Ababa",
    category: "For Rent",
    price: "Birr 5,860",
    type: "logistics",
  },
  {
    id: 4,
    cover: "../lada.JPEG",
     name: "Lada Vesta",
    location: "Addiss ababa",
    category: "For Sale",
    price: "Birr 9,750",
    type: "",
  },

]


export const footer = [
  { 
  
   text: [
    { list: <Link to="/"><a href="/"><b>Home</b></a></Link> }, 
    { list:<Link to="/services" > <a href="/services"><b>Service</b></a></Link>}, 
    { list: <Link to="/about" > <a href="/about"><b>About Us</b></a></Link>}, 
    { list: <Link to="/blog" ><a href="/blog"><b>Blogs</b></a></Link>  },
    { list: <Link to="/contactpage" ><a href="/contactpage"><b>Contacts</b></a></Link> },
  ],
 },
  {
   
    text: [
      { list: <a><i><EmailOutlined/></i> <a href="mailto:amaredagmawi1@gmail.com/"  target="_blank"> Email</a>  </a>},
      { list: <a><i><Facebook/></i> <a href="https://www.facebook.com"  target="_blank">Facebook</a>  </a> },
      { list: <a><i><FontAwesomeIcon icon={faXTwitter} /></i> <a href="https://www.twitter.com"  target="_blank"> Twitter</a>  </a> }, 
      { list: <a><i><Instagram/></i> <a href="https://www.instagram.com"  target="_blank">Instagram</a>  </a> },
      { list: <a><i><FontAwesomeIcon icon={faLinkedin} /></i> <a href="https://www.linkedin.com/in/dagmawi-ama-b79405210"  target="_blank">Linkdin</a>  </a> }, 
    ],
  },
  {
    
    text: [ 
      { list:<a><a href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis" target="_blank" rel="noopener noreferrer"><b><i><AddLocationAltOutlined/> </i>Location</b> Friendship Business Center, Airport Rd, Ethiopia</a></a>}, 
      { list:  <a><b><i><Public/></i>Office no: </b> 105</a>}, 
      { list:  <a><b><i><Public/></i>floor no: </b> 5 </a>}],
  },
  {
    
    text:[ 
      { list:  <a> <i><PhoneIphone/></i><b>Receprion </b> 0985187059</a>}, 
      { list: <a><b><i><PhoneIphone/></i>Pepole</b> 09090909</a> },
      { list: <a><b><i><PhoneIphone/></i>Sales</b> 09090909</a> }
    ],
  },
 

]

export const footers = [
  { 
  
   text: [
    { list: <Link to="/"><a href="/"><b>Home</b></a></Link> }, 
    { list:<Link to="/services" > <a href="/services"><b>Service</b></a></Link>}, 
    { list: <Link to="/about" > <a href="/about"><b>About Us</b></a></Link>}, 
    { list: <Link to="/blog" ><a href="/blog"><b>Blogs</b></a></Link>  },
    { list: <Link to="/contactpage" ><a href="/contactpage"><b>Contacts</b></a></Link> },
  ],
 },
  {
   
    social: [
      { list: <a><i><EmailOutlined/></i> <a href="mailto:amaredagmawi1@gmail.com/"  target="_blank"> Email</a>  </a>},
      { list: <a><i><Facebook/></i> <a href="https://www.facebook.com"  target="_blank">Facebook</a>  </a> },
      { list: <a><i><FontAwesomeIcon icon={faXTwitter} /></i> <a href="https://www.twitter.com"  target="_blank"> Twitter</a>  </a> }, 
      { list: <a><i><Instagram/></i> <a href="https://www.instagram.com"  target="_blank">Instagram</a>  </a> },
      { list: <a><i><FontAwesomeIcon icon={faLinkedin} /></i> <a href="https://www.linkedin.com/in/dagmawi-ama-b79405210"  target="_blank">Linkdin</a>  </a> }, 
    ],
  },
  {
    
    location: [ 
      { list:<a><a href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis" target="_blank" rel="noopener noreferrer"><b><i><AddLocationAltOutlined/> </i>Location</b> Friendship Business Center, Airport Rd, Ethiopia</a></a>}, 
      { list:  <a><b><i><Public/></i>Office no: </b> 105</a>}, 
      { list:  <a><b><i><Public/></i>floor no: </b> 5 </a>}
    ],
  },
  {
    
    phoneNO:[ 
      { list:  <a> <i><PhoneIphone/></i><b>Receprion </b> 0985187059</a>}, 
      { list: <a><b><i><PhoneIphone/></i>Pepole</b> 09090909</a> },
      { list: <a><b><i><PhoneIphone/></i>Sales</b> 09090909</a> }
    ],
  },
 

]
export const testimonials = [
  {
    prof: "Founder",
    cover:  "../testimoni.png",
    text: "good for all in bazra",
    // address: "Addis Ababa",
    name: "Dr. Yayerad A",
    icon: [<a href="mailto:amaredagmawi1@gmail.com" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-google"></i>
  </a>,<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    prof: "Finance Manager",
    cover:  "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr. Brhanu ",
    // address: "amaredagmawi1@gmail.com",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    prof: "Client",
    cover:  "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr/DR/Ms",
    // address: "amaredagmawi1@gmail.com",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    prof: "Softwar Engineer",
    text: "contact bazra and good for all in bazra",
    cover:  "../IMG_7525A.JPG",
    // address: "Addis Ababa",
    name: "dagmawi",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    prof: "Founder",
    cover:  "../testimoni.png",
    text: "good for all in bazra",
    // address: "amaredagmawi1@gmail.com",
    name: "Dr. Yayerad A",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    prof: "Manager",
    cover:  "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr. Lealem. S",
    // address: "amaredagmawi1@gmail.com",

    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
]



export const blog = [
  {
    title: "For New Car",
    cover:  "../lada.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "DAGMAWI",
    date: <i> Date :2016:03:03</i>,
    icon: [<a href="mailto:amaredagmawi1@gmail.com" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-google"></i>
  </a>,<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    title: "For New Car",
    cover:  "../lada0.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "lealem",
    date: "10",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    title: "For New Car",
    cover:  "../lada1.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailersAddis Ababa, Ethiopia",
    author: "Dagmawi A",
    date: "10",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    title: "For New Car",
    cover:  "../lada2.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "Dagmawi Amare",
    date: "10",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    title: "For New Car",
    cover:  "../lada2.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "Dagmawi Amare",
    date: "10",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    title: "For New Car",
    cover:  "../lada1.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailersAddis Ababa, Ethiopia",
    author: "Fuad",
    date: "10",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
]


export const serviceData = [
  {
    id:1,
    title: "Manifucturing",
    imageUrl: '../../../manif.jpg',
    description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
    websiteLink: '/contactpage',
  },
  {
      id:2,
      title: 'Transport',
      imageUrl: '../../../serviceD/transprt.webp',
      description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
      websiteLink: '/contactpage',
    },{ id:3,
        title: 'Motor vihecle Part ',
        imageUrl: '../../../serviceD/vichle part.jpg',
 
        description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
        websiteLink: '/contactpage',
    },{ id:4,
        title: 'Import-Export',
        imageUrl: '../../../serviceD/import-and-export.jpg',
 
        description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
        websiteLink: '/contactpage',
    },{ id:5,
      title: 'Motor Engineering',
      imageUrl: '../../../serviceD/Motor Engineering.jpg',
 
      description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
      websiteLink: '/contactpage',
    },
    {
      id:6,
      
      title: 'Agriculture',
      imageUrl: '../../../serviceD/Agriculture.jpg',
 
      description: 'Description for Service Bazra s identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra s Success Meet the exceptional individuals contributing to Bazra s success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it s a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.',
      websiteLink: '/contactpage',
    },
    
 
];


export const Map=[

]

export const products = [
    
  {
    title: 'AGGREGATES',
    link: '/products/aggregates',
    image: '../../../IT.png',
    description:
      'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
  },
  {
      title: 'AGGREGATES',
      link: '/products/aggregates',
       image: '../../../manif.jpg',
       description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    {
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../lada3.jpeg',
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    {
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../lada.jpeg',
      
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    {
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../lada0.jpeg',
  
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    
    {
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../lada1.jpeg',
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    {
      title: 'AGGREGATES',
      link: '/products/aggregates',
      image: '../../../lada2.jpeg',
      description:
        'Aggregates are an engineered granular material consisting of crushed stone, gravel, and sand of varying minerologies.',
    },
    
    
  // Add more product objects similarly
];