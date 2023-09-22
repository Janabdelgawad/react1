import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            Error Page Not Found
            <button style={{ marginLeft: "20px "}}
            onClick={() => navigate("/", {replace: true })}>
                Home
            </button>
        </div>
    );
};

export default ErrorPage;