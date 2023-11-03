import { useLocation } from "react-router-dom";

export default function Projeto() {
	const location = useLocation();
	return <h1>{location.state.detalhes}</h1>;
}
