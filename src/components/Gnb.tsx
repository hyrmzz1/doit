'use client'
import { useRouter } from 'next/navigation'
import LogoLg from "../../public/logoLg.svg"
import LogoSm from "../../public/logoSm.svg"
// TODO) 네비게이션 바 상단에 고정

export default function Gnb() {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    };
    
    return (
        <nav className="bg-white top-0 w-full py-3 border-b-2 border-slate-200">
            {/* desktop */}
            <div className="ml-96 block phone:hidden tablet:hidden">
                <LogoLg onClick={handleLogoClick} />
            </div>

            {/* tablet */}
            <div className="hidden phone:hidden tablet:block tablet:pl-4">
                <LogoLg onClick={handleLogoClick}/>
            </div>

            {/* phone */}
            <div className="hidden phone:block phone:pl-4">
                <LogoSm onClick={handleLogoClick}/>
            </div>
        </nav>
    );
}