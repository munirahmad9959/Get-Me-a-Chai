import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      {/* {params.username} */}
      <div className='cover w-full relative'>
        <img className='w-full object-cover h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=zQveauUqcI98L9tF0j3FauGI6WNfKcQT93CAZFZZ1Ec%3D" alt="Show Cover Picture" />
        <div className='absolute -bottom-10 right-[47%] '>
          <img className='h-[100px] w-[100px] rounded-full object-cover' src="https://avatars.mds.yandex.net/i?id=1c00a7c2cbe154b03ee08c635fdbe004_l-8970800-images-thumbs&n=13"
            alt=""
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-16 ">
        <div className='font-bold gap-2 text-lg '>
          @{params.username}</div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          9,719 members. 82 posts. $15,450/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as the leaderboard */}
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5'>
            <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatarGifFlat.gif" className='border-2 border-black rounded-full' alt="" />
                <span>
                  Ali donated <span className="font-bold">30$</span> with the message "I support you bro lots of ♥"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatarGifFlat.gif" className='border-2 border-black rounded-full' alt="" />
                <span>
                  Ali donated <span className="font-bold">30$</span> with the message "I support you bro lots of ♥"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatarGifFlat.gif" className='border-2 border-black rounded-full' alt="" />
                <span>
                  Ali donated <span className="font-bold">30$</span> with the message "I support you bro lots of ♥"
                </span>
              </li>


            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5 '>Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button type="button" class="text-white bg-gradient-to-br from-purple-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>

            <div className="flex gap-2 mt-5">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Username
