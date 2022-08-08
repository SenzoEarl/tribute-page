import React from "react";


export default function Navbar(props) {
    return(
        <header className = "bg-amber-600">
            <div className = "container mx-auto">
                <nav className="flex sm:justify-center space-x-4">
                    <img className = "inline h-12 w-12" src = {props.logo} alt= "logo"/>
                    {[
                        ['Home', '/dashboard'],
                        ['Links', '/links'],
                        ['About', '/about'],
                        ['YT', '/#reports'],
                    ].map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                    ))}
                </nav>
                
            </div>
        </header>
    );
}
