import { useState } from "react";

function Footer() {
    return (
        <div>
            {/* Header */}
            <div className="flex bg-blue-600 items-center justify-between px-8 py-3">

                {/* Logo */}
                <img 
                    className="w-[150px] h-[60px] object-contain" 
                    src="/hirecareerlogo.png" 
                    alt="HireCareer logo"
                />

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                    <img 
                        className="w-8 h-8 object-contain" 
                        src="/in.png"
                        alt="LinkedIn"
                    />
                    <img 
                        className="w-8 h-8 object-contain" 
                        src="/fb.png"
                        alt="Facebook"
                    />
                    <img 
                        className="w-8 h-8 object-contain" 
                        src="/ig.png"
                        alt="Instagram"
                    />
                    <img 
                        className="w-8 h-8 object-contain" 
                        src="/tele.png"
                        alt="Telegram"
                    />
                </div>

            </div>
        </div>
    );
}

export default Footer;
