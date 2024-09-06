import HomeImg from "../../public/icons/home.svg";
import CommunityImg from "../../public/icons/user.svg";
import CollectionsImg from "../../public/icons/star.svg";
import FindJobsImg from "../../public/icons/suitcase.svg";
import TagsImg from "../../public/icons/tag.svg";
import AccountImg from "../../public/icons/account.svg";
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
