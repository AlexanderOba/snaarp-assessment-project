import { User } from "../types/DeviceMangement";
import floyed from "../assets/floyed.png"
import ronald from "../assets/ronald.png"
import guy from "../assets/guy.png"
import jane from "../assets/jane.png"
import leslie from "../assets/leslie.png"
import black from "../assets/black.png"
import miles from "../assets/miles.png"
import cody from "../assets/cody.png"
import dianne from "../assets/dianne.png"



export const users: User[] = [
    { name: "Floyd Miles", status: "online", image: floyed},
    { name: "Ronald Richards", status: "online", image: ronald },
    { name: "Guy Hawkins", status: "offline", image: guy},
    { name: "Jane Cooper", status: "online", image: jane },
    { name: "Leslie Alexander", status: "offline", image: leslie },
    { name: "Annette Black", status: "online", image: black },
    { name: "Floyed Miles", status: "online", image: miles },
    { name: "Cody Fisher", status: "online", image: cody },
    { name: "Dianne Russell", status: "offline", image: dianne },
  ];

  export const columns: string[] = [
    "USB Ports",
    "SD Ports",
    "CD/DVDs",
    "Lock Device",
    "Bluetooth",
    "Printers",
    "Shutdown Device",
    "Reboot Device",
  ];