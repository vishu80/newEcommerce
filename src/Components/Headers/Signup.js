import React, { useState } from "react";

export const Signup = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const AUTH_URL = 'https://myfakeapi.com/api/login';
  const handleRegister = async (name,email,password) => {

    const user=await fetch(AUTH_URL,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userName":name,
        "password":password,
        // userEmail:email

      })
    })
    const userData = await user.json();
    console.log(userData,'userData')
  

  }

  return (
    <>
    {isClicked==false&&
      <div className="bg-white flex justify-center w-[100%] h-screen  shadow-lg ">
        <div className="m-20 rounded-2xl  w-[50%] bg-red-200   shadow-[#fafafa] flex origin-left transition-transform duration-600 ease-in">
          <div className="rounded-l-[16px] w-[40%] h-[100%] bg-[#666666] shadow-2xl flex justify-between flex-col">
            <div className="p-10  flex justify-center">
              <h1 className="font-bold text-white text-[20px]">
                If you already has an account, just sign in.
              </h1>
            </div>
            <div className="pb-36 flex justify-center">
              <button className="bg-[#666666] w-32 h-[40px] rounded-full border-2 border-white-950 text-white"
              onClick={()=>setIsClicked(true)}
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div className="rounded-r-[16px] w-[60%] h-[100%] bg-white shadow-2xl flex justify-between flex-col ">
            <div className="p-10  flex justify-center flex-col">
              <h1 className="font-bold  text-black text-[20px] text-center">
                Create Your Account
              </h1>
              <div className="text-center p-5 ">
                <span className="text-[#d6d6d6]">Name</span>
                <div>
                  <div className="p-3">
                    <input
                      className=" border-b-[2px] w-[300px] text-center focus:outline-none"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-center p-3 ">
                  <span className="text-[#d6d6d6]">Email</span>
                  <div>
                    <div className="p-3">
                      <input
                        className=" border-b-[2px] w-[300px] text-center focus:outline-none"
                        type="email"
                        placeholder="John Doe"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[#d6d6d6]">Password</span>
                  <div>
                    <div className="p-3">
                      <input
                        className=" border-b-[2px] w-[300px] text-center focus:outline-none"
                        type="password"
                        value={password}
                        // placeholder="John Doe"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="bg-[#d4af7a] w-[300PX] h-[40px] rounded-full border-2 border-white-950 text-white"
                  onClick={()=>handleRegister(name,email,password)}
               >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
}
      {isClicked && (
        <div className="bg-white flex justify-center w-[100%] h-screen">
          <div className="m-20 rounded-2xl  w-[50%]   shadow-[#fafafa] flex ">
            <div className="rounded-l-[16px] w-[60%] h-[100%] bg-white shadow-2xl flex justify-between flex-col ">
              <div className="p-10  flex justify-center flex-col">
                <h1 className="font-bold  text-black text-[20px] text-center">
                  Welcome
                </h1>
                <div className="text-center p-5 ">
                 
                  <div className="text-center p-3 ">
                    <span className="text-[#d6d6d6]">Email</span>
                    <div>
                      <div className="p-3">
                        <input
                          className=" border-b-[2px] w-[300px] text-center focus:outline-none"
                          type="email"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-[#d6d6d6]">Password</span>
                    <div>
                      <div className="p-3">
                        <input
                          className=" border-b-[2px] w-[300px] text-center focus:outline-none"
                          type="password"
                          // placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-[#d4af7a] w-[300PX] h-[40px] rounded-full border-2 border-white-950 text-white"
                  >
                    SIGN IN
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-r-[16px] w-[40%] h-[100%] bg-[#666666] shadow-[#fafafa] flex justify-between flex-col">
              <div className="p-10  flex justify-center">
                <h1 className="font-bold text-white text-[20px]">
                  Don't have an account? Please Sign up!
                </h1>
              </div>
              <div className="pb-36 flex justify-center">
                <button className="bg-[#666666] w-32 h-[40px] rounded-full border-2 border-white-950 text-white"
                                    onClick={() => setIsClicked(false)}

                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
