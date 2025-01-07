import { User } from "../types/DeviceMangement";

export const users: User[] = [
    { name: "Floyd Miles", status: "online" },
    { name: "Ronald Richards", status: "online" },
    { name: "Guy Hawkins", status: "offline" },
    { name: "Jane Cooper", status: "online" },
    { name: "Leslie Alexander", status: "offline" },
    { name: "Annette Black", status: "online" },
    { name: "Cody Fisher", status: "online" },
    { name: "Dianne Russell", status: "offline" },
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