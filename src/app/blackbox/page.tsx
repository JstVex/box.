import Link from "next/link";

const BlackBox = () => {
    return (
        <div className="h-screen">
            <Link href="/" className="ml-2 text-lg">
                box.
            </Link>
            <div className="w-screen h-[95vh] flex items-center justify-center">
                <div className="w-40 h-40 bg-black"></div>
            </div>
        </div>
    );
}

export default BlackBox;