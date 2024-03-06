import picIcon from "@/assets/homepage/block2/img1.png";
import picIcon2 from "@/assets/homepage/block2/img2.png";
import picIcon3 from "@/assets/homepage/block2/img3.jpg";
import picIcon4 from "@/assets/homepage/block2/img4.jpg";
import picIco5 from "@/assets/homepage/block2/img5.jpg";

export type StrokeItem = {
  time: string;
  infoTopText: string;
  infoCenterText: string;
  infoBottomLText: string;
  infoBottomRText?: string;
  infoClass: string;
  infoTopClass: string;
  infoCenterClass: string;
};
export const strokeList1: StrokeItem[] = [
  {
    time: "1:00 pm",
    infoTopText: "",
    infoCenterText: "Reception Coffee & Networking",
    infoBottomLText: "",
    infoClass: "bgBlack",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "1:55 pm",
    infoTopText: "",
    infoCenterText: "Welcome Note",
    infoBottomLText: "",
    infoClass: "adorn1 bgBlue",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "2:00 pm",
    infoTopText: "Panel",
    infoCenterText: "L3 Solutions - are they the future?",
    infoBottomLText: "zk.Link, Kakarot, Taiko, zkSync",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "2:45 pm",
    infoTopText: "David Weisiger",
    infoCenterText: "Just don’t do it: writing EVM on a zkVM",
    infoBottomLText: "Taiko",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "3:10 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Scaling Ethereum with L2s - when will L2s be ready for L3s?",
    infoBottomLText: "Manta, Linea, Scroll, Polygon",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "3:55 pm",
    infoTopText: "Vince Yang",
    infoCenterText: "Nexus: The First ZKP based, multi-rollup Layer 3",
    infoBottomLText: "zk.Link",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "4:20 pm",
    infoTopText: "Greg Edison",
    infoCenterText: "Deploying L3s with Taiko’s open source stack",
    infoBottomLText: "kakarot",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "4:45 pm",
    infoTopText: "Kalman Lajko",
    infoCenterText:
      "Hyperchains and Hyperbridges: How the ZK stack will power the internet of Value",
    infoBottomLText: "zkSync",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "5:10 pm",
    infoTopText: "Panel",
    infoCenterText: "Modular Solutions for L2/L3 Rollups",
    infoBottomLText: "BNB CHain, Eigen Layer, Mantle, Celestia",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "5:55 pm",
    infoTopText: "",
    infoCenterText: "Networking",
    infoBottomLText: "",
    infoClass: "bgOrange",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
];

export const strokeList2: StrokeItem[] = [
  {
    time: "12:00 pm",
    infoTopText: "",
    infoCenterText: "Reception & Networking",
    infoBottomLText: "",
    infoClass: "bgBlack",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "12:55 pm",
    infoTopText: "",
    infoCenterText: "Welcome Note",
    infoBottomLText: "",
    infoClass: "adorn1 bgBlue",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "13:00 pm",
    infoTopText: "Panel",
    infoCenterText:
      "What are the different approaches and purposes for building Layer 3 solutions?",
    infoBottomLText: "zkSync, Offchain Labs, Polygon Miden",
    infoBottomRText: "Moderated by: L2 Beat",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "13:45 pm",
    infoTopText: "Panel",
    infoCenterText:
      "DeFi on Layer 3: Overcoming Challenges and Seizing Opportunities",
    infoBottomLText: "Pyth, Metis, Izumi Finance",
    infoBottomRText: "Moderated by: The Rollup",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "14:30 pm",
    infoTopText: "DZ",
    infoCenterText:
      "The difference between General Purpose and App Specific Rollups in Layer 3 Protocol Architecture",
    infoBottomLText: "zkLink",
    infoClass: "",
    infoTopClass: "",
    infoCenterClass: "",
  },
  {
    time: "14:55 pm",
    infoTopText: "",
    infoCenterText: "Break",
    infoBottomLText: "",
    infoClass: "bgGrey",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "15:15 pm",
    infoTopText: "Panel",
    infoCenterText: "L2O Consortium",
    infoBottomLText: "zkLink, QED Protocol, Starkware",
    infoBottomRText: "Moderated by: Arrington Capital",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "16:00 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Beyond Interoperability: The Next Frontiers in Layer 3 Evolution",
    infoBottomLText: "Polyhedra, Kakarot, Layer0, Mantle",
    infoBottomRText: "Moderated by: BSCNews",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "16:45 pm",
    infoTopText: "Panel",
    infoCenterText: "zkEVM vs zkVM - Use-cases, challenges and the future",
    infoBottomLText: "Manta, Linea, Scroll, Taiko",
    infoBottomRText: "Moderated by: Kroma Network",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "17:30 pm",
    infoTopText: "",
    infoCenterText: "Break",
    infoBottomLText: "",
    infoClass: "bgGrey",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
  {
    time: "17:50 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Data Availability and Modular Blockchain in Layer 3 Networks",
    infoBottomLText: "Avail, Gelato, EigenLayer",
    infoBottomRText: "Moderated by: ARPA Network",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "18:35 pm",
    infoTopText: "Panel",
    infoCenterText:
      "Developing Decentralized Applications on Layer 3: A Developer's Perspective",
    infoBottomLText: "zkcandy, LogX",
    infoBottomRText: "Moderated by: OKX",
    infoClass: "adorn2",
    infoTopClass: "panel",
    infoCenterClass: "",
  },
  {
    time: "19:00 pm",
    infoTopText: "",
    infoCenterText: "Networking",
    infoBottomLText: "",
    infoClass: "bgOrange",
    infoTopClass: "",
    infoCenterClass: "colorWhite",
  },
];

const istanbulUrl =
  "https://www.google.com/maps/place/Nippon+Hotel/@41.0403927,28.9850207,17z/data=!3m1!4b1!4m9!3m8!1s0x14cab78c9ef8546b:0x90adf79b5bd868a9!5m2!4m1!1i2!8m2!3d41.0403927!4d28.9850207!16s%2Fg%2F1twzz0l_?hl=en&entry=ttu";
const denverUrl =
  "https://www.google.com/maps/place/Le+M%C3%A9ridien+Denver+Downtown/@39.7442615,-104.996413,17z/data=!3m1!4b1!4m9!3m8!1s0x876c78d1105dd85b:0x6758a27ced3b948b!5m2!4m1!1i2!8m2!3d39.7442615!4d-104.9938381!16s%2Fg%2F11cs9lrm8f?entry=ttu";

export const locationData = [
  {
    type: "Istanbul",
    left: [
      {
        title: "Nippon",
        text: `Inspired by Japanese Minimalist design, Nippon is a modern hotel
              located a short walk from Taksim Square and İstiklal Street in
              Istanbul - the most central and active areas of Istanbul.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: "",
        urlName: "Nippon Hotel - Istanbul",
        url: istanbulUrl,
      },
    ],
    right: [picIcon, picIcon2],
  },
  {
    type: "EthDenver",
    left: [
      {
        title: "Le Méridien Denver Downtown",
        text: `Le Meridian is a modern, 
        cosmopolitan hotel in the heart of the Mile High City. 
        Chic and sophisticated, Le Meridian combines traditional 
        European influences with modern features to create one
         of the top hotels in Denver.`,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: `With its prime location near the Colorado Convention Center,
           Ball Arena, and the Arts District,
          Le Meridian is perfect for both business and leisure travelers. `,
        urlName: "",
        url: "",
      },
      {
        title: "",
        text: "",
        urlName: "Le Méridien - Denver Downtown",
        url: denverUrl,
      },
    ],
    right: [picIcon3, picIcon4, picIco5],
  },
];
