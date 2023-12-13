import { ReactNode } from "react";
import "./AuthLink.css";
import { Link } from "react-router-dom";

interface AuthLinkProps {
    children: ReactNode;
    link: string;
}

export default function AuthLink({link, children}: AuthLinkProps){
    return (
        <div className="auth-link-container">
            <Link to={link}>{children}</Link>
        </div>
    )
}