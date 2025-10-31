import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/ai.png";
import Tools2 from "/assets/tools/photoshop.png";
import Tools3 from "/assets/tools/clipstudiopaint.png";
import Tools4 from "/assets/tools/CapCut.jpg";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Adobe Illustrator",
    ket: "Design",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Adobe PhotoShop",
    ket: "Design",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Clip Studio Paint",
    ket: "Illustration",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Cap Cut",
    ket: "Video Editing",
    dad: "400",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design",
    dad: "500",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design",
    dad: "600",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
