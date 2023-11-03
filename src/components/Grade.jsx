import Itens from "./Itens";
import placeholder from "../assets/project_placeholder.png";

export default function Grade() {
	return (
		<div className="grade">
			<Itens
				image={placeholder}
				titulo={"Flask RESTful"}
				descricao={
					"Sistema de gerenciamento e cadastro para concessionária"
				}
                path={'/projetos/flask-rest'}
				url={"https://github.com/SantosPereira/Flask-RESTful-DIO"}
				tags={["Flask Rest", "SQLite", "Auth JWT"]}
			/>
			<Itens
				image={placeholder}
				titulo={"Outdoor"}
				descricao={
					"Meu app SaaS com 0 clientes (projeto real em produção)"
				}
				url={"#"}
				tags={["React", "FastAPI", "MySQL"]}
			/>
			<Itens
				image={placeholder}
				titulo={"Título do projeto"}
				descricao={
					"Descrição interessante ressaltando e demonstrando minha habilidades"
				}
				url={"#"}
				tags={["Kubernetes", "FastAPI", "RabbitMQ", "Spring"]}
			/>
			<Itens
				image={placeholder}
				titulo={"Título do projeto"}
				descricao={
					"Descrição interessante ressaltando e demonstrando minha habilidades"
				}
				url={"#"}
				tags={["Kubernetes", "FastAPI", "RabbitMQ", "Spring"]}
			/>
			<Itens
				image={placeholder}
				titulo={"Título do projeto"}
				descricao={
					"Descrição interessante ressaltando e demonstrando minha habilidades"
				}
				url={"#"}
				tags={["Kubernetes", "FastAPI", "RabbitMQ", "Spring"]}
			/>
			<Itens
				image={placeholder}
				titulo={"Título do projeto"}
				descricao={
					"Descrição interessante ressaltando e demonstrando minha habilidades"
				}
				url={"#"}
				tags={["Kubernetes", "FastAPI", "RabbitMQ", "Spring"]}
			/>
		</div>
	);
}
