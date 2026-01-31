export function Button({label, onClick}){
    return <div onClick={onClick} className="bg-black text-white p-3 m-3 text-center rounded-md">{label}</div>
}