interface FormHeaderProps {
    title: string;
}

export default function FormHeader({title}: FormHeaderProps){
    return (
        <div className="form-header">
            <div className="form-header-logo__container">
                <img
                    src="https://tiko.energy/wp-content/uploads/2020/07/logo_tiko.svg"
                    width={70}
                    height={34}
                    alt="Tiko Logo"
                />
                <span>, Todos</span>
            </div>
            <div className="form-header-title__container">
                <h2 className="form-header-title">{title}</h2>
            </div>
        </div>
    )
}