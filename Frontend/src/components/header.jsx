import { Link } from "react-router-dom";

export default function Header() {
    return (

    <header className="w-full h-25 bg-accent flex items-center justify-between px-4">

    <img src="/logo_.png" alt="Logo" className="h-37.5 w-37.5 flex-shrink-0"/>

    <div className="w-full h-full bg-accent text-primary flex items-center justify-center gap-8">

        <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-cyan-400 transition-colors">Products</Link>
        <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
    </div>

    <div className="text-primary .flex-shrink-0 h-full flex items-center justify-end gap-4">
        <Link to="/login" className="hover:text-cyan-400 transition-colors">Login</Link>
        <Link to="/register" className="hover:text-cyan-400 transition-colors">Register</Link>
    </div>

    </header>
    );
}
