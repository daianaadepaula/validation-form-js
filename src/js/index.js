const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
// const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


form.addEventListener("submit", (event) => {
	event.preventDefault();
	
	checkInputs();
});

function checkInputs(){
	const nomevalue = nome.value.trim();
	const emailvalue = email.value.trim();
	const telefonevalue = telefone.value.trim();
	const mensagemvalue = mensagem.value.trim();

	if(nomevalue === ''){
		setError(nome, "campo obrigatório");
		
	} else if(nomevalue.length < 5){
		setError(nome, "nome inválido");
		
	} else{
		setSuccess(nome);
	}

	if(emailvalue === ''){
		setError(email, "campo obrigatório");

	} else if(!validademail(emailvalue)){
		setError(email, "email inválido");

	}else{
		setSuccess(email);
		
	}

	if(telefonevalue === ''){
		setError(telefone, "campo obrigatório");
	
	} else if(telefonevalue.length < 8){
		setError(telefone, "telefone inválido");

	}else{
		setSuccess(telefone);

	}

	if(mensagemvalue === ''){
		setError(mensagem, "campo obrigatório");
		
	}else{
		setSuccess(mensagem);
	}
}

function setError (input, msg){
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");

	small.innerText = msg;

	formControl.className="field error";
}

function setSuccess(input){
	const formControl = input.parentElement;	

	formControl.className="field sucesso";
}

function validademail(email){
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}