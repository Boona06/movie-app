export default function Footer() {
    return (
      <div className="bg-[#4338CA] w-full h-80 pl-5 pt-10 lg:h-72 lg:flex md:flex md:justify-around ">
        <div>
        <div className="flex gap-2 text-white"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
        <p className="font-inter italic text-white font-bold text-md">Movie Z</p></div>
       <p className="text-white pt-3">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        
       <div className="flex gap-11 pt-6">
         <div>
            <p className="text-white">Contact Information</p>
              <div className="flex gap-2 items-center pt-3 text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <div className="text-white">
                <p className="-mb-1">Email: </p>
                 <h3>support@movieZ.com</h3>
               </div>
              </div>
              <div className="flex gap-2 items-center pt-3 text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div className="text-white">
              <p className="-mb-1">Phone: </p>
               <h3>+976 (11) 123-4567</h3>
                </div>
              </div>
         </div>
         <div className="flex flex-col gap-3 text-white">
          <a className="" href="">Follow us </a>
          <div className="flex flex-col gap-3 text-white lg:flex-none ">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
          </div>
         </div>
       </div>
      </div>
    )
  }