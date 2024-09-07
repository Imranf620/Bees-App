import React,{createContext,useContext, useState} from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { GiBearFace } from "react-icons/gi";
import { AiTwotoneDollar } from "react-icons/ai";
const createdailyrewardcontext=createContext();
export const useDailyRewardHook=()=>{
    const usedailyrewardcontext=useContext(createdailyrewardcontext)
    return usedailyrewardcontext;
}

function DailyRewardContextProvider(props) {
  let dailyrewardarray=[
    {
        title:"Hamster Youtube",
        detail:[
            {
                id:"yt1",
                outer_icone:<FaYoutube className=' text-white bg-red-700 rounded-full p-2' />,
                outer_text:"How to verify your identity on OKX",
                inner_text:"What is KYC?How to verify your identity(KYC) on OKX.Hamster Academy",
                coins:100000,
                button:"Watch video"
            },
            {
                id:"yt2",
                outer_icone:<FaYoutube className=' text-white bg-red-700 rounded-full p-2' />,
                outer_text:"EVERYTHING YOU NEED TO KNOW ABOUT BLOCKCHAIN",
                inner_text:"Hamster Academy:Everthing you need to know about blockchain",
                coins:100000,
                button:"Watch video"
            },
        ]
    },
    {
        title:"Daily tasks",
        detail:[
            {
                id:"dr",
                outer_icone:<FaCalendar />,
                outer_text:"Daily reward",
                // inner_text:"Accrue coins for logging into the game daily without skipping",
                inner_text:"Get coins, keys and skins for logging into the gae daily without skipping",
                coins:6649000,
                rewards:[
                    {
                        day:"Day 1",
                        coins:500,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 2",
                        coins:1000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 3",
                        coins:2500,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 4",
                        coins:5000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 5",
                        coins:15000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 6",
                        coins:25000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 7",
                        coins:100000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 8",
                        coins:500000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 9",
                        coins:1000000,
                        dollar_icon:<AiTwotoneDollar />
                    },
                    {
                        day:"Day 10",
                        coins:5000000,
                        dollar_icon:<AiTwotoneDollar />
                    }
                ]
            },

        ]
    },
    {
        title:"Tasks list",
        title_icone:<FaYoutube />,
        detail:[
            {
                id:"fb",
                outer_icone:<FaFacebookF className=' text-white bg-sky-400 rounded-full p-2'/>,
                outer_text:"Follow us on Facebook",
                coins:100000,
                button:"Join"
            },
            {
                id:"insta",
                outer_icone:<FaSquareInstagram />,
                outer_text:"Follow us on Instagram",
                coins:100000,
                 button:"Join"
            },
            {
                id:"tg",
                outer_icone:<MdOutlineCallMissedOutgoing className=' text-white bg-sky-400 rounded-full p-2' />,
                outer_text:"Join our TG channel",
                coins:5000,
                 button:"Join"
            },
            {
                id:"x",
                outer_icone:<FaXTwitter className=' text-white bg-black rounded-full p-2' />,
                outer_text:"Follow our X account",
                coins:5000,
                 button:"Join"
            },
            {
                id:"bear",
                outer_icone:<GiBearFace />,
                outer_text:"Choose your exchange",
                coins:5000,
                 button:"Join"
            },
            {
                id:"users",
                outer_icone:<FaUsersGear className=' text-teal-400 bg-sky-100 rounded-full p-2'/>,
                outer_text:"Invite 3 friends",
                coins:25000,
                 button:"Join"
            },
        ]
    },
  ]
  const [dailyrewardarraystate,setDailyRewardArrayState]=useState(dailyrewardarray)
  return (
    <div>
        <createdailyrewardcontext.Provider value={{dailyrewardarraystate,setDailyRewardArrayState}}>
            {props.children}
        </createdailyrewardcontext.Provider>
    </div>
  )
}

export default DailyRewardContextProvider
