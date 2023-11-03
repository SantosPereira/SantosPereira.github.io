import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Itens({ image, titulo, descricao, tags, path, url }) {
	const [aaa, setAaa] = useState("none");
	const [bbb, setBbb] = useState(10);
	const navigate = useNavigate();

	let buttonVar = [
		"outline-primary",
		"outline-secondary",
		"outline-success",
		"outline-warning",
		"outline-danger",
		"outline-info",
		"outline-light",
		"outline-dark",
		"primary",
		"secondary",
		"success",
		"warning",
		"danger",
		"info",
		"light",
		"dark",
	];

	function openOrCode(a) {
		a ? setAaa("flex") : setAaa("none");
		a ? setBbb(0) : setBbb(10);
	}

	function open() {
		navigate(path, { state: { detalhes: "aaa" } });
	}

	return (
		<div className="itens">
			<div
				onMouseOver={() => openOrCode(true)}
				onMouseOut={() => openOrCode(false)}
				style={{ position: "relative" }}
			>
				<div
					className="overlay"
					style={{ display: aaa, zIndex: bbb, position: "absolute" }}
				>
					<div
						onClick={() => {
							open();
						}}
					>
						Abrir portfólio
					</div>
					<div
						onClick={() => {
							window.open(url, "_blank");
						}}
					>
						Ver o código
					</div>
				</div>
				<img src={image} alt="" className="img" />
			</div>
			<div>
				<h3>{titulo}</h3>
				<span>{descricao}</span>
				{/* Tags (tecnologias e habilidades usadas no projeto) */}
				<ul>
					{tags.map((item) => {
						return (
							<li>
								<Button variant={'success'}>
									{item}
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
