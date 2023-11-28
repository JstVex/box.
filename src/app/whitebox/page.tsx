import Link from "next/link";

const WhiteBox = () => {
    return (
        <div className="h-screen bg-black text-white">
            <Link href="/" className="ml-2 text-lg">
                box.
            </Link>
            <div className="w-screen h-[95vh] flex items-center justify-center">
                <div className="w-40 h-40 bg-white"></div>
            </div>
        </div>
    );
}

export default WhiteBox;