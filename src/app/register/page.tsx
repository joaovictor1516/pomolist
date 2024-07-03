"use client";
import { UserSignIn } from "../components/user/userSignIn";
import {Slide, ToastContainer} from "react-toastify";

export default function Register(){
    return (
        <div className="">
            <UserSignIn/>

            <ToastContainer
                hideProgressBar={true}
                position="top-right"
                transition={Slide}
                autoClose={500}
                closeOnClick
                pauseOnHover
            />
        </div>
    )
}