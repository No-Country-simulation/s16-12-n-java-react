// data.js
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

import Glory from '../assets/equipo/Glory.jpg';
import Noe from '../assets/equipo/Noe.jpg';
import Yohan from '../assets/equipo/Yohan.jpg';
import Brian from '../assets/equipo/Brian.png';
import Fabrizio from '../assets/equipo/Fabrizio.jpg';
import Mikel from '../assets/equipo/Mikel.jpg';
import Lucio from '../assets/equipo/Lucio.jpg';
import Adan from '../assets/equipo/Adan.png';
import Teresa from '../assets/equipo/Teresa.jpg';
import Fernando from '../assets/equipo/Fernando.jpg';
import VenezuelaFlag from '../assets/banderas/venezuela.png';
import EcuadorFlag from '../assets/banderas/ecuador.png';
import ArgentinaFlag from '../assets/banderas/argentina.png';
import BoliviaFlag from '../assets/banderas/bolivia.png';
import PeruFlag from '../assets/banderas/peru.png';

const cards = [
  {
    imagen: Glory,
    nombre: 'Glory Tovar',
    bandera: VenezuelaFlag,
    rol: 'QA',
    pais: 'Venezuela',
    hobbies: 'Correr',
    herramienta: 'Postman, Cypress, Playwright',
    links: {
      facebook: { url: 'https://facebook.com/glory', icon: FaFacebook },
      github: { url: 'https://github.com/Maky-GloryQA', icon: FaGithub },
      instagram: { url: 'https://instagram.com/glory', icon: FaInstagram },
      linkedin: {
        url: 'http://www.linkedin.com/in/mcglorytovar-t3st3rqa',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Yohan,
    nombre: 'Yohan Rodriguez',
    bandera: VenezuelaFlag,
    rol: 'QA',
    pais: 'Venezuela',
    hobbies: 'Fútbol',
    herramienta: 'Postman, Jira, QMetry, Excel',
    links: {
      facebook: { url: 'https://facebook.com/yohan', icon: FaFacebook },
      github: { url: 'https://github.com/Rhanyojs', icon: FaGithub },
      instagram: { url: 'https://instagram.com/yohan', icon: FaInstagram },
      linkedin: {
        url: 'https://www.linkedin.com/in/yohanrodri/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Brian,
    nombre: 'Brian Diaz',
    bandera: EcuadorFlag,
    rol: 'Back-End',
    pais: 'Ecuador',
    hobbies: 'Jugar videojuegos, programar, ver películas y series',
    herramienta: ' Intellij, VS Code , Postman',
    links: {
      facebook: { url: 'https://facebook.com/brian', icon: FaFacebook },
      github: { url: 'https://github.com/TeslaXZ', icon: FaGithub },
      instagram: { url: 'https://instagram.com/brian', icon: FaInstagram },
      linkedin: {
        url: 'https://www.linkedin.com/in/brianodz/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Mikel,
    nombre: 'Mikel Cedeño',
    bandera: VenezuelaFlag,
    rol: 'Back-End',
    pais: 'Venezuela',
    hobbies: 'Leer, Fútbol, Correr',
    herramienta: 'Java, Spring, Postgrest, Postman, IntelliJ',
    links: {
      facebook: { url: 'https://facebook.com/mikel', icon: FaFacebook },
      github: { url: 'https://github.com/mikeljcp', icon: FaGithub },
      instagram: { url: 'https://instagram.com/mikel', icon: FaInstagram },
      linkedin: {
        url: 'https://www.linkedin.com/in/mikeljcp/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Lucio,
    nombre: 'Luciano Pardo',
    bandera: ArgentinaFlag,
    rol: 'Front-End',
    pais: 'Argentina',
    hobbies: 'Juegos (PC/Board)',
    herramienta: 'NextJS, HTML, CSS, React, Tailwind, JS',
    links: {
      facebook: { url: 'https://facebook.com/luciano', icon: FaFacebook },
      github: { url: 'https://github.com/Luciobio', icon: FaGithub },
      web: { url: 'https://pardo-resume.vercel.app/', icon: TbWorldWww },
      linkedin: {
        url: 'https://www.linkedin.com/in/luciobio/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Adan,
    nombre: 'Adan Jimenez',
    bandera: BoliviaFlag,
    rol: 'Front-End',
    pais: 'Bolivia',
    hobbies: 'Astronomía',
    herramienta: 'Tailwind, Typescript, Javascript, React',
    links: {
      facebook: { url: 'https://facebook.com/adan', icon: FaFacebook },
      github: { url: 'https://github.com/adanj27', icon: FaGithub },
      web: { url: 'https://adanjimenez.vercel.app/', icon: TbWorldWww },
      linkedin: {
        url: 'https://www.linkedin.com/in/adan-jimenez-dev/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Teresa,
    nombre: 'Maria Maisterra',
    bandera: ArgentinaFlag,
    rol: 'Front-End',
    pais: 'Argentina',
    hobbies: 'Bordar, Coser',
    herramienta: 'React Vite, CSS, HTML5, Javascript, Tailwind',
    links: {
      facebook: { url: 'https://facebook.com/maria', icon: FaFacebook },
      github: { url: 'https://github.com/mtmaisterra', icon: FaGithub },
      instagram: { url: 'https://instagram.com/maria', icon: FaInstagram },
      linkedin: {
        url: 'http://www.linkedin.com/in/mariateresamaisterra',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Noe,
    nombre: 'Noé Machaca',
    bandera: PeruFlag,
    rol: 'Front-End',
    pais: 'Peru',
    hobbies: 'Ajedrez, Programacion competitiva',
    herramienta: 'Tailwind, Javascript, React, Java, Spring',
    links: {
      facebook: { url: 'https://facebook.com/noe', icon: FaFacebook },
      github: { url: 'https://github.com/newneo4', icon: FaGithub },
      instagram: { url: 'https://instagram.com/noe', icon: FaInstagram },
      linkedin: {
        url: 'https://www.linkedin.com/in/noe-u-machaca/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Fernando,
    nombre: 'Fernando Vergel',
    bandera: PeruFlag,
    rol: 'UI / UX',
    pais: 'Peru',
    hobbies: 'Leer, Ciclismo, DJ',
    herramienta: 'Figma, Photoshop, KDEnLive',
    links: {
      instagram: { url: 'https://www.instagram.com/nemgf/', icon: FaInstagram },
      github: { url: 'https://github.com/nemgf', icon: FaGithub },
      web: {
        url: 'https://nemgf.notion.site/Fernando-Vergel-47d3f9dee2ab419aba7d9d1a186f686d',
        icon: TbWorldWww,
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/fernandovergel/',
        icon: FaLinkedin,
      },
    },
  },
  {
    imagen: Fabrizio,
    nombre: 'Fabrizio Flamini',
    bandera: ArgentinaFlag,
    rol: 'Team Leader',
    pais: 'Argentina',
    hobbies: 'Estudir abogacia',
    herramienta: 'Python, Power Bi',
    links: {
      instagram: { url: 'https://www.instagram.com/nemgf/', icon: FaInstagram },
      github: { url: 'https://github.com/nemgf', icon: FaGithub },
      web: {
        url: 'https://nemgf.notion.site/Fernando-Vergel-47d3f9dee2ab419aba7d9d1a186f686d',
        icon: TbWorldWww,
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/fabrizioflamini/',
        icon: FaLinkedin,
      },
    },
  },
];

export default cards;
