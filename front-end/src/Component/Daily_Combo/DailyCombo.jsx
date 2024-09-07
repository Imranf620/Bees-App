import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { CiBitcoin } from "react-icons/ci";
import Hamster1 from "../../images/Hamster1.png";



function DailyCombo() {
  return (
    <>
    <div className="h-[88vh] w-full bg-[#0c0c1d] overflow-hidden overflow-y-auto">
    <div className='flex flex-col w-full gap-6 '>
           <div className='flex bg-[#26263a] justify-between items-center w-[95%] mx-auto p-1.5 px-2 rounded-lg'>
               <p className='text-white font-semibold'>Daily combo</p>
               <div className='flex gap-1 text-gray-600'>
               <FaRegCircle size={12} />
               <FaRegCircle size={12} />
               <FaRegCircle size={12} />
               </div>
               <div className='flex items-center gap-1 bg-fuchsia-800 p-1.5 rounded-lg'>
               <CiBitcoin className="text-[20px] text-[#fff] bg-[#e9a830] rounded-full" />
               <p className='text-[#fff] font-semibold text-[14px]'>+5000000</p>
               </div>
           </div>
           <div className='flex gap-1.5 justify-center items-center w-[95%] mx-auto'>
                <div className='flex justify-center items-center bg-[#26263a] h-[80px] w-[33%] text-white border-yellow-600 shadowdiv1 rounded-lg border-[2px] border-b-0'>
                   <p className='text-5xl font-semibold text-yellow-600'>?</p> 
                </div>
                <div className='flex justify-center items-center bg-[#26263a] h-[80px] w-[33%] text-white border-yellow-600 shadowdiv1 rounded-lg border-[2px] border-b-0'>
                <p className='text-5xl font-semibold text-yellow-600'>?</p> 
                </div>
                <div className='flex justify-center items-center bg-[#26263a] h-[80px] w-[33%] text-white border-yellow-600 shadowdiv1 rounded-lg border-[2px] border-b-0'>
                <p className='text-5xl font-semibold text-yellow-600'>?</p> 
                </div>
           </div>
           <div className='flex items-center justify-center gap-2'>
               <CiBitcoin className="text-[40px] text-[#fff] bg-[#e9a830] rounded-full" />
               <p className='text-white text-[26px] font-bold'>+295736</p>
            </div>
            <div className='w-[95%] bg-[#26263a] mx-auto rounded-lg flex text-white items-center justify-center py-2 '>
                <div className='w-[20%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg bg-[#0c0c20]'>
                    PR&Team
                </div>
                <div className='w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg'>
                    Markets
                </div>
                <div className='w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg'>
                    Legal
                </div>
                <div className='w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg'>
                    Web3
                </div>
                <div className='w-[19.5%] text-[13px] font-medium flex justify-center items-center py-2 px-3 rounded-lg'>
                    Specials
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2  w-[95%] mx-auto '>
                    <div className='rounded-3xl flex flex-col bg-[#26263a] w-[100%]'>
                        <div className='flex w-[80%] py-2'>
                               <img src={Hamster1} className='w-[60px] h-[60px]' alt="" />
                               <div className='flex flex-col text-white'>
                                  <p className='text-[14px]'>CEO</p>
                                  <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-500'>Profit per hour</p>
                                    <div className='flex items-center gap-1'>
                                        <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>207</p>
                                    </div>
                                  </div>
                               </div>
                        </div>
                        <div className='w-[100%] border-t-[1px] border-t-slate-600'>
                        <div className='w-[80%] text-white flex  gap-2 items-center justify-start  py-2 px-4 '>
                            <p className='text-[12px] font-medium '>lvl 2</p>
                            <div className='flex gap-1 border-l-[1px] border-l-slate-600 pl-2'>
                                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>1.2k</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className='rounded-3xl flex flex-col bg-[#26263a] w-[100%]'>
                        <div className='flex w-[80%] py-2'>
                               <img src={Hamster1} className='w-[60px] h-[60px]' alt="" />
                               <div className='flex flex-col text-white'>
                                  <p className='text-[14px]'>CEO</p>
                                  <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-500'>Profit per hour</p>
                                    <div className='flex items-center gap-1'>
                                        <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>207</p>
                                    </div>
                                  </div>
                               </div>
                        </div>
                        <div className='w-[100%] border-t-[1px] border-t-slate-600'>
                        <div className='w-[80%] text-white flex  gap-2 items-center justify-start  py-2 px-4 '>
                            <p className='text-[12px] font-medium '>lvl 2</p>
                            <div className='flex gap-1 border-l-[1px] border-l-slate-600 pl-2'>
                                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>1.2k</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className='rounded-3xl flex flex-col bg-[#26263a] w-[100%]'>
                        <div className='flex w-[80%] py-2'>
                               <img src={Hamster1} className='w-[60px] h-[60px]' alt="" />
                               <div className='flex flex-col text-white'>
                                  <p className='text-[14px]'>CEO</p>
                                  <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-500'>Profit per hour</p>
                                    <div className='flex items-center gap-1'>
                                        <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>207</p>
                                    </div>
                                  </div>
                               </div>
                        </div>
                        <div className='w-[100%] border-t-[1px] border-t-slate-600'>
                        <div className='w-[80%] text-white flex  gap-2 items-center justify-start  py-2 px-4 '>
                            <p className='text-[12px] font-medium '>lvl 2</p>
                            <div className='flex gap-1 border-l-[1px] border-l-slate-600 pl-2'>
                                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>1.2k</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className='rounded-3xl flex flex-col bg-[#26263a] w-[100%]'>
                        <div className='flex w-[80%] py-2'>
                               <img src={Hamster1} className='w-[60px] h-[60px]' alt="" />
                               <div className='flex flex-col text-white'>
                                  <p className='text-[14px]'>CEO</p>
                                  <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-500'>Profit per hour</p>
                                    <div className='flex items-center gap-1'>
                                        <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>207</p>
                                    </div>
                                  </div>
                               </div>
                        </div>
                        <div className='w-[100%] border-t-[1px] border-t-slate-600'>
                        <div className='w-[80%] text-white flex  gap-2 items-center justify-start  py-2 px-4 '>
                            <p className='text-[12px] font-medium '>lvl 2</p>
                            <div className='flex gap-1 border-l-[1px] border-l-slate-600 pl-2'>
                                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>1.2k</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className='rounded-3xl flex flex-col bg-[#26263a] w-[100%]'>
                        <div className='flex w-[80%] py-2'>
                               <img src={Hamster1} className='w-[60px] h-[60px]' alt="" />
                               <div className='flex flex-col text-white'>
                                  <p className='text-[14px]'>CEO</p>
                                  <div className='flex flex-col'>
                                    <p className='text-[12px] text-gray-500'>Profit per hour</p>
                                    <div className='flex items-center gap-1'>
                                        <CiBitcoin className="text-[16px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>207</p>
                                    </div>
                                  </div>
                               </div>
                        </div>
                        <div className='w-[100%] border-t-[1px] border-t-slate-600'>
                        <div className='w-[80%] text-white flex  gap-2 items-center justify-start  py-2 px-4 '>
                            <p className='text-[12px] font-medium '>lvl 2</p>
                            <div className='flex gap-1 border-l-[1px] border-l-slate-600 pl-2'>
                                        <CiBitcoin className="text-[22px] bg-[#e9a830] rounded-full"/>
                                        <p className='text-[12px] font-medium'>1.2k</p>
                            </div>
                        </div>
                        </div>

                    </div>

            </div>
    </div>
    </div>
    </>
  )
}

export default DailyCombo
