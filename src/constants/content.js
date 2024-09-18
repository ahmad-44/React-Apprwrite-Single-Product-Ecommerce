import HomeImg from "../../public/icons/home.svg";
import CommunityImg from "../../public/icons/user.svg";
import CollectionsImg from "../../public/icons/star.svg";
import AccountImg from "../../public/icons/account.svg";

//************************** Admin SideBar **************************

export const sidebarLinks = [
  {
    imgURL: HomeImg,
    route: "/orders",
    label: "Orders",
  },
  {
    imgURL: CommunityImg,
    route: "/analytics",
    label: "Analytics",
  },
  {
    imgURL: CollectionsImg,
    route: "/print-slips",
    label: "Print Slips",
  },
  {
    imgURL: AccountImg,
    route: "/account",
    label: "Account",
  },
];

//************************** Topbar **************************
export const topbarText = "Free Shipping";

//************************** Navbar **************************

export const logoText = "Airmoto";
export const brandName = "Airmoto";
export const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

//************************** ProductDetails **************************
//******************************* Carousel **************************

//******************************* Purchase **************************
export const numberOfBuyers = "20,0000";
export const productTitle = "Smart Air Pump";
export const subHeading =
  "Inflate Anything In Minutes with The Push of a Button";
export const saleTime = "24 Hours";
export const shortDescription =
  "Best-selling cordless portable air pump for every situation. Avoid being stranded and dependence on others in a time of need.";
export const keyFeatures = [
  "Quick and Accurate",
  "Works With Most Inflatables",
  "Guaranteed To Last And Perform",
  "All-In-One Solution With 3 Attachments",
  "Includes LED Light And USB-C Cable",
  "Auto Shut-Off For Precision Pressure",
];

//******************************* Buy Card + Guarantee **************************

export const numberOfPeopleWatching = 45;
export const currencySymbol = "Rs";
export const delPrice = 6000;
export const sellingPrice = 5000;

export const cartButtonText = "BUY NOW";
export const wattantyPeriod = "3 Months";
export const deliveryDays = "3 - 7";

//******************************** Single Review **************************
export const singleReview = {
  title: "I was so surprised",
  author: "Charles Lecrec",
  desc: "I was initially very skeptical about using a new product like Airmoto with my 2018 Ford Explorer. But after experiencing a flat tire due to a nail, it got me inflated quickly and allowed me to go have the tire repaired. Definitely a two thumbs up from me",
};

//******************************** Footer **************************
export const whatsappNumber = "03331234567";
export const copyrightText = `All rights reserved by ${brandName}`;
