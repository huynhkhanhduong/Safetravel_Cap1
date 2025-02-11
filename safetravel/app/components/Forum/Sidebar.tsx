import React from 'react';


interface SidebarProps {
    className?: string; 
}
const Sidebar: React.FC = () => {
    return (
        <aside className="max-w-72 w-full p-4 scroll pl-8 bg-[#D2FBFD] rounded-r h-screen flex flex-col items-center justify-start -ml-6">
            {/* <div className="flex items-center  mb-6 mt-3">
                <img 
                    src="/pictures/ava.png" 
                    alt="User profile" 
                    className="rounded-full w-12 h-12 mr-3" 
                />
                <span className="font-bold">Ashley Tran</span>
            </div>
            <nav>
                <ul>
                    <li className="mb-4 text-[#326D7B] font-bold"># Popular Topics</li>
                    <li className="mb-4 ml-5 text-gray-700">Destination</li>
                    <li className="mb-4 ml-5 text-gray-700">Travel tips</li>
                    <li className="mb-4 ml-5 text-gray-700">Experiences</li>
                </ul>
            </nav>
            <div className="mt-6 flex items-center">
            <img 
                    src="/pictures/FireTrends.png" 
                    alt="Trends" 
                    className="w-5 h-5 mr-2" 
                />
                <span className="text-[#326D7B] font-bold">Trends for you</span>
            </div> */}
        </aside>
        
    );
};

export default Sidebar;
