import { ReactNode } from "react";
import "./AuthCard.css";

interface AuthCardProps {
    children: ReactNode;
}

export default function AuthCard({children}: AuthCardProps){
    return (
        <div className="auth-card-container">
            <div className="auth-card-content">
                {children}
            </div>
        </div>
    )
}