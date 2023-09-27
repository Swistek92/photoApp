import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main className='main'>
      <p>main section</p>
      <h1>lorem </h1>
      {/* <div className='container'>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <Image
            className='w-full origin-top-left -rotate-12 '
            src='https://lh3.googleusercontent.com/pw/ADCreHctwzPwaayjRJRZze8uDmnQQRL7gFfLeoPHYSvg9vKq7LkktVJ9dqUV3WV8sTz3xpEqHhHt8dco9QQvS_rO80KsF2SWJJVS3WmSKvoEqt1iSrHyFb3oIVAj7BTdaf2yayjXsyWIQ5O4kCKUKXu56MF4=w1165-h777-s-no?authuser=0'
            width={3000}
            height={3000}
            alt='lal'
          />
        </div>
      </div> */}
      {/* <p className='bg-red-100'>lalal</p> */}
    </main>
  );
}

// <h1 className='p-1'>title</h1>
//     <h2 className='p-1'>subitle</h2>
//     <p className='p-1'>lalala</p>
//     <a href='https://lalal.pl'>this is a an anchor</a>
//     <div>
//       <button className='btn btn-primary'>this is a primary button</button>
//     </div>{" "}
//     <div>
//       <button className='btn btn-secoundary'>
//         this is a secoundary button
//       </button>
//     </div>{" "}
//     <div>
//       <button disabled className='btn btn-primary'>
//         this is a disabled button
//       </button>
//     </div>
//     <div>
//       <input type='text' placeholder='lalal2' />
//     </div>
//     <div>
//       <input disabled type='text' placeholder='email lalal' />
//     </div>
//     <div>
//       <input type='date' />
//     </div>
//     <div className='flex items-start'>
//       <input type='checkbox' id='checkbox' />
//       <label htmlFor='checkbox'>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
//         minus dolore reiciendis repellendus, a commodi ut earum nesciunt
//       </label>
//     </div>
//     <div>
//       <select>
//         <option>option1</option>
//         <option>option2</option>
//       </select>
//     </div>
//     <div className='Select'>
//       <div
//         className='flex cursor-pointer select-none'
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         my selected option{" "}
//         <ArrowDownIcon className={`mt-1 ${isOpen && "rotate-180"}`} />
//       </div>
//       {isOpen && (
//         <div>
//           <ul className='flex flex-col divide-y '>
//             <li>option1</li>
//             <li>option1</li>
//             <li>option1</li>
//           </ul>
//         </div>
//       )}
//     </div>
