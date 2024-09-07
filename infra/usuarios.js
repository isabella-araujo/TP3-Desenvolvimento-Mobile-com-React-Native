import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase";
import { signOut } from "firebase/auth";

export async function logarUsuario(email, senha) {
    let retorno = new Object();
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, senha)
        .then((credenciais) => {
            retorno.id = credenciais.user.uid;
            retorno.email = email;
            retorno.senha = senha;
        })
        .catch((error) => {
            console.log(`${error.code} = ${error.messsage}`)
            retorno.error = "Login inválido";
        })
    return retorno;
}

export async function criarConta(email, senha) {
    let retorno = new Object();
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, senha)
        .then((userCredential) => {
        retorno.id = userCredential.user.uid;
        retorno.email = email;
        retorno.senha = senha;
    })
    .catch((error) => {
        console.log(`${error.code} = ${error.messsage}`)
        retorno.erro = "Credenciais Inválidas";
    });

    return retorno;
}

export async function deslogarUsuario() {
    try {
        await signOut(FIREBASE_AUTH); 
        const retorno = { id: null, email: " ", senha: " " };
        return retorno;
    } catch (error) {
        console.log(`${error.code} = ${error.message}`);
        return null;
    }
}

export async function redefinirSenha(email) {
    let mensagem = "";
    try {
        await sendPasswordResetEmail(FIREBASE_AUTH, email);
        mensagem = "E-mail de redefinição de senha enviado. Verifique sua caixa de entrada.";
    } catch (error) {
        console.log(`${error.code} = ${error.message}`);
        mensagem = 'Erro ao tentar recuperar a senha. Verifique o email fornecido.';
    }
    return mensagem;
}

export async function atualizarEmail(usuario, novoEmail) {
    let mensagem = '';
    if(usuario.email) {
        try {
            await updateEmail(usuario, novoEmail);
            mensagem = "Email atualizado com sucesso.";
        } catch (error) {
            console.log(`${error.code} = ${error.message}`);
            mensagem = "Erro ao atualizar o email.";
        }
    } else {
        mensagem = "Usuário inválido.";
    }
    return mensagem;
}

export async function atualizarSenha(usuario, novaSenha) {
    let mensagem = '';
    if(usuario.senha) {
        try {
            await updatePassword(usuario, novaSenha);
            mensagem = "Senha atualizada com sucesso.";
        } catch (error) {
            console.log(`${error.code} = ${error.message}`);
            mensagem = "Erro ao atualizar a senha.";
        }
    } else {
        mensagem = "Usuário inválido.";
    }
    return mensagem;
}