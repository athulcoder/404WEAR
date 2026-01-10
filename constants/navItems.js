import { CgHomeAlt } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { LiaUserCircleSolid } from "react-icons/lia";

export const centerNav = [
    {
        label:"Home",
        icon:CgHomeAlt,
        url:"/"

    }
    ,
    {
        label:"Shop",
        icon:TbShoppingBag,
        url:"/shop"
    },
    {
        label:"Product",
        icon:CiShoppingTag,
        url:"/product"
    }   ,
    {
        label:"Contact Us",
        icon:PiPhoneCallLight,
        url:"/contact"
    }
]


export const endNav = [
    {
        label:"Search",
        icon:CiSearch,
        url:"/search"
    },
    {
        label:"Cart",
        icon:CiShoppingCart,
        url:"/account/cart"
    },
    {
        label:"User",
        icon:LiaUserCircleSolid,
        url:"/account"
    }
]