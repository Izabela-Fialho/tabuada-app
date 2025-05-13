# 📱 Tabuada App – Reforço Escolar em Matemática

Aplicativo desenvolvido com **React Native** e **Expo**, voltado para alunos do Ensino Fundamental que necessitam reforçar o aprendizado da tabuada de forma interativa e gamificada.

---

## 🚀 Como rodar o projeto

Siga os passos abaixo para executar o projeto localmente:

### ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

Instale o Expo CLI globalmente (se ainda não tiver):
```bash
npm install -g expo-cli
```

---

### 📦 Instalando as dependências

Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/tabuada-app.git
```

Acesse a pasta do projeto:
```bash
cd tabuada-app
```

Instale as dependências:
```bash
npm install
```

---

### ▶️ Executando o projeto

Inicie o servidor de desenvolvimento Expo:
```bash
npx expo start
```

O Expo abrirá um painel no navegador com um QR Code. Você pode:

- Escanear o QR code com o app **Expo Go** no seu celular (disponível na Play Store/App Store), ou
- Pressionar `a` para rodar no Android Studio (emulador), ou
- Pressionar `w` para abrir no navegador

---

### 🔐 Informações de login

Para acessar o aplicativo, utilize as credenciais abaixo na tela de login:

📧 E-mail: aluno@exemplo.com
🔒 Senha: 123456

---

### 📁 Estrutura do projeto

```
src/
├── navigation/
│   └── StackNavigator.js
├── screens/
│   ├── LoginScreen.js
│   ├── MenuScreen.js
│   ├── PracticeScreen.js
│   ├── RandomPracticeScreen.js
│   └── TabuadaScreen.js
App.js
```

---

### 🛠️ Tecnologias utilizadas

- React Native
- Expo
- JavaScript (ES6)
- React Navigation
