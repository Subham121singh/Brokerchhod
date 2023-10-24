import { useState } from "react";
export default function Login() {
  const [isOtpGenerated, setOtpGenerated] = useState(false);
  const [mobile,setMobile] = useState('')
  const [otp,setOtp] = useState('')
  const handleGenerateOtp = (e) => {
    e.preventDefault()
    console.log('clicked')
    setTimeout(()=>{
      setOtpGenerated(true)
    },1000)
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           We share a great bond, but still we need to verify its you..
          </h2>
        </div>
        <div className="bg-green-200 mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2 py-2 font-light text-sm ">
          <p>You seems to be a new memeber to the app. Please fill the mandatory details page to continue using the app when presented to you.</p>
        </div>

        <div className="bg-red-200 mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2 py-2 font-light text-sm">
          <p>Looks like we broke something. Could not generate OTP. Please try again.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile number
              </label>
              <div className="mt-2">
                <input
                onChange={e=>setMobile(e.target.value)}
                  id="mobile"
                  name="mobile"
                  type="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          {isOtpGenerated ? <div >
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                One Time Password (OTP)
              </label>
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                 
                  onChange={e=>setOtp(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>: null}

          

            <div>
            { isOtpGenerated ? <button
                onClick={(e)=>handleGenerateOtp(e)}
                disabled={!otp}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Submit
              </button>
            
             :
              <button
                onClick={(e)=>handleGenerateOtp(e)}
                disabled={!mobile}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Generate OTP
              </button>
} 
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
