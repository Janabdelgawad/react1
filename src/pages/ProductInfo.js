import { useParams, useNavigate } from "react-router-dom";
const ProductInfo = () => {
const { id } = useParams();
const navigate = useNavigate();

return (
    <div>
        Product info: {id}
        <div>
            <button onClick={() => navigate("/")}>Home</button>
            <button style={{ marginLeft: "10px"}} onClick={() => navigate(-1)}>
                Back
            </button>
            <button
                style={{ marginLeft: "10px"}}
                onClick={() => navigate(-1, { replace: true })}
            >
                Back With Replacement
            </button>
        </div>
    </div>
);
};
export default ProductInfo;