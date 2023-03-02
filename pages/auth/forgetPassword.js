import Navbar from "@/components/landing-page/header/navbar";
import Footer from "@/components/landing-page/footer/footer";
import Link from "next/link";

const ForgetPassword = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="mt-32 flex flex-col justify-center items-center">
                <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">Lupa Password Anda ?</h2>
                <p className="text-[14px] mb-5">ikuti Langkah berikut untuk memulihkan akun anda !</p>
                <form className="flex flex-col justify-center align-center border border-[#dbdbdb] border-solid rounded-lg shadow-xl p-8">
                    <label htmlFor="email" className="font-semibold text-[16px] mb-2">Alamat Email</label>
                    <input 
                        className="border-[#dbdbdb] border-solid border rounded-md block py-2 px-5 w-72 md:w-80 mb-5"
                        type="email" 
                        id="email" 
                        name="email" 
                    />
                    <button className="w-full py-2 px-3 bg-[#264653] text-[#fff] rounded-lg">
                        <Link href="/auth/newPassword">Link Pemulihan</Link>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ForgetPassword;