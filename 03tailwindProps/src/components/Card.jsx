import react from "react"

function Card({username, btntext="Visit me", role, age}) {
    return (
        <>
            {/* Card */}
            <div className="max-w-xs p-6 rounded-md m-1.5 shadow-md bg-black">
                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-over object-center w-full rounded-md h-72 bg-gray-500"/>
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">Title</span>
                    <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
                    <p>{role}</p>
                    <p>{age}</p>
                </div>
                    <button>{btntext}</button>
                </div>
        </>
    )
}
export default Card