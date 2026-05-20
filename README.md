# 💸 Convert - Money

![Badge em Desenvolvimento](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

O **Convert - Money** é uma aplicação web moderna e responsiva voltada para a conversão de moedas em tempo real. O projeto foi desenvolvido focando em uma interface limpa (estilo web banking), alta performance e manipulação precisa de dados monetários.

---

## 🚀 Funcionalidades

- **Conversão Multi-Moedas:** Permite selecionar dinamicamente a moeda de origem e a moeda de destino.
- **Suporte Amplo:** Conversões entre Real (BRL), Dólar Americano (USD), Euro (EUR), Libra Esterlina (GBP) e Bitcoin (BTC).
- **Internacionalização (i18n):** Formatação automática de símbolos monetários, pontos e vírgulas usando a API nativa `Intl.NumberFormat` do JavaScript.
- **Design Resiliente:** Interface moderna construída puramente com CSS (Gradients e Flexbox), eliminando a dependência de imagens locais pesadas e evitando quebras de layout.

---

## 🎨 Layout

A interface conta com um design escuro e imersivo ao fundo, com um card centralizado e intuitivo para o usuário realizar suas operações de forma rápida e agradável.

> 💡 **Nota de Design:** O projeto utiliza emojis nativos de bandeiras no lugar de imagens estáticas, o que garante um carregamento muito mais veloz e zero requisições quebradas de assets.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais (Vanilla JS):

- **HTML5:** Estrutura semântica dos elementos e formulários.
- **CSS3:** Estilização moderna, variáveis de transição, efeitos de `hover`/`active` em botões e layout responsivo com Flexbox.
- **JavaScript (ES6):** Lógica de triangulação de conversão cambial, manipulação do DOM e eventos.

---

## 🧠 Desafios Técnicos Superados

1. **Lógica de Conversão Bidirecional:** Em vez de apenas converter de Real para outras moedas, a lógica foi estruturada usando uma moeda-base matemática interna. Isso permitiu que o usuário converta, por exemplo, de Dólar diretamente para Euro de maneira correta.
2. **Formatação de Moedas:** Configuração personalizada do `Intl.NumberFormat` para tratar especificidades como as 8 casas decimais exigidas na exibição do **Bitcoin (BTC)**.

3. <img width="720" height="1600" alt="Screenshot_20260520-120827" src="https://github.com/user-attachments/assets/14acbcdd-146f-4c41-ab02-e4c29834a492" />
