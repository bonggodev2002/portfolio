import AboutComponent from "../components/AboutComponent";
export default function AboutMe() {
    return (
        <>
            <span className="text-2xl md:text-5xl font-black tracking-widest text-blue-900">ABOUT ME</span>
            <hr className="border-blue-900 m-3 lg:m-5"></hr>
            <AboutComponent />
        </>
    )
}