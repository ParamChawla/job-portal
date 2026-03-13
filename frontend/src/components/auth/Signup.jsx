import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '../../utils/constant'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice"; // adjust path if needed
import { Loader2 } from 'lucide-react'




const Signup = () => {
   const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {loading,user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
     const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally{
            dispatch(setLoading(false));
        }
    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
  return (
    <div>
      <Navbar/>
  <div className='flex items-center justify-center max-w-7xl mx-auto my-7'>
    <form onSubmit={submitHandler} className='w-1/2 border border-grey-200 rounded-md p-4 my-8'>
      <h1 className="text-2xl font-bold text-center">Sign Up</h1 >
      <div className='my-4'>
        <Label className='my-2'>Full Name</Label>
        <Input
        type="text"
        value={input.fullname}
        onChange={changeEventHandler}
        name="fullname"
        placeholder="Enter your full name"
        />
      </div>
      <div className='my-4'>
        <Label className='my-2'>Email</Label>
        <Input
        type="email"
        placeholder="Enter your email"
        value={input.email}
        onChange={changeEventHandler}
        name="email"
        />
      </div>
      <div className='my-4'>
        <Label className='my-2'>Phone Number</Label>
        <Input
        type="text"
        placeholder="Enter your phone number"
        value={input.phoneNumber}
        onChange={changeEventHandler}
        name="phoneNumber"
        />
      </div>
      <div className='my-4'>
        <Label className='my-2'>Password</Label>
        <Input 
        type="password"
        placeholder="Enter your password"
        value={input.password}
        onChange={changeEventHandler}
        name="password"
        />
      </div>
      <div className='flex items-center justify-between '>
      <RadioGroup className='flex items-center gap-4 my-5'>
      <div className="flex items-center gap-3">
        <Input
        type="radio"
        value="student"
        name="role"
        className="cursor-pointer"
        checked={input.role === "student"}
        onChange={changeEventHandler}
         />
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center gap-3">
         <Input
        type="radio"
        value="recruiter"
        name="role"
        className="cursor-pointer"
        checked={input.role === "recruiter"}
        onChange={changeEventHandler}
         />
        <Label htmlFor="r2">Recruiter</Label>
      </div>
    </RadioGroup>
    <div className='flex items-center gap-2'>
      <Label>Profile</Label>
      <Input
      accept='image/*'
      type="file"
      className="cursor-pointer"
      onChange={changeFileHandler}
       />
    </div>
      </div>
      {
        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4 bg-[#413E59] hover:bg-[#31303B]">SignUp</Button>
                    
      }
      <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
    </form>
  </div>
    </div>
  )
}

export default Signup