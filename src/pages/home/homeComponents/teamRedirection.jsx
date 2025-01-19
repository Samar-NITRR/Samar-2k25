import { NavLink } from "react-router-dom";

const TeamButton = () => {
    return(
        <button className="relative group select-none active:scale-95 transition-all ease-in-out">
            <div className="absolute inset-0 bg-amber-700 rounded-lg translate-y-2">
                <div className="absolute inset-0 opacity-20 rounded-lg" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`, }} />
            </div>
            
            <div className="relative px-12 py-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transform transition-all duration-150 hover:translate-y-2 shadow-lg overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`, }} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="relative text-white text-3xl font-crossFly italic uppercase tracking-wider drop-shadow-[2px_2px_0px_#000]">
                    TEAM
                </span>
            </div>
        </button>
    )
}

function TeamRedirection() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mb-36' data-aos="fade-up">
				<div className='w-full flex flex-col justify-center items-center backdrop-blur-md rounded-[25px] p-14 '>
					<h1 className='font-crossFly uppercase text-3xl drop-shadow-[3px_3px_0px_#000]'>Meet the Team of Samar</h1>
					<NavLink to="/team">
						<TeamButton/>
					</NavLink>
				</div>
			</div>
        </>
    )
}

export default TeamRedirection;