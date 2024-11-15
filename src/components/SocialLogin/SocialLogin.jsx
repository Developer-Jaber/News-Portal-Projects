import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";

const SocialLogin = () => {
    return (
        <section className="space-y-3">
            <h1 className="font-bold text-2xl text-center">Login With</h1>
            <button className="flex items-center border-2 bg-slate-100 w-full text-md btn">
                <GrGoogle></GrGoogle>
                <span>Login With Google</span>
            </button>
            <button className="flex items-center border-2 bg-slate-100 w-full text-md btn">
                <BsGithub></BsGithub>
                <span>Login With Github</span>
            </button>
        </section>
    );
};

export default SocialLogin;