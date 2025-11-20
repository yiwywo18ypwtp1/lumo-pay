const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between w-full px-12 min-h-28">
            <div className="flex flex-row items-center gap-3 drop-shadow-wht">
                <img src="svg/lumo-lg.png" className="h-10" />
                <h1 className="text-4xl">LumoPay</h1>
            </div>

            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2">
                    <a className="underline cursor-pointer">Log out</a>
                    <p className="opacity-50">|</p>
                    <div className="flex flex-row items-center gap-2 p-1 hover:bg-white/15 cursor-pointer rounded-full transition-all duration-300">
                        <p className="text-lg pl-2">Alexander Ivanitskiy</p>

                        <img src="svg2/user.svg" className="h-8" />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;