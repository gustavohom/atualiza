const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Porta do servidor

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, JS, Imagens) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados de formulário (para o contato)
app.use(express.urlencoded({ extended: true }));

// --- Dados de Exemplo (Substitua pelos seus dados reais) ---
const portfolioItems = [
    { id: 1, title: 'Projeto Fachada XYZ', image: '/images/projeto1.jpg', category: 'Fachadas', description: 'Descrição detalhada do incrível projeto de fachada XYZ...' },
    { id: 2, title: 'Sinalização Interna Empresa ABC', image: '/images/projeto2.jpg', category: 'Sinalização', description: 'Descrição detalhada da sinalização interna ABC...' },
    { id: 3, title: 'Projeto Fachada XYZ', image: '/images/projeto3.jpg', category: 'Fachadas', description: 'Descrição detalhada do incrível projeto de fachada XYZ...' },
    { id: 4, title: 'Projeto Fachada XYZ', image: '/images/projeto4.jpg', category: 'Fachadas', description: 'Descrição detalhada do incrível projeto de fachada XYZ...' },
    // Adicione mais projetos aqui
];

const contactInfo = {
    phone: '(XX) XXXX-XXXX',
    whatsapp: '55XX9XXXXXXXX', // Formato internacional sem +, () ou -
    email: 'contato@atualizacv.com.br',
    instagram: 'atualizacomunicacaovisual', // Só o nome de usuário
    address: 'Rua Exemplo, 123 - Cidade - Estado' // Opcional
};
// --- Fim dos Dados de Exemplo ---

// --- Rotas ---
app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Atualiza Comunicação Visual - Início',
        contactInfo,
        portfolioHighlights: portfolioItems.slice(0, 3), // Pegar os 3 primeiros para a home
        activePage: 'home'
     });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', {
        pageTitle: 'Portfólio - Atualiza Comunicação Visual',
        contactInfo,
        portfolioItems,
        activePage: 'portfolio'
    });
});

app.get('/contato', (req, res) => {
    res.render('contato', {
        pageTitle: 'Contato - Atualiza Comunicação Visual',
        contactInfo,
        activePage: 'contato',
        successMessage: null // Para mensagens de sucesso do formulário
    });
});

// Rota para receber o formulário de contato
app.post('/enviar-contato', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    console.log('--- Formulário de Contato Recebido ---');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Mensagem:', mensagem);
    console.log('--------------------------------------');

    // **AQUI:** Implementar o envio de e-mail real usando Nodemailer ou outro serviço
    // Exemplo: sendEmail(nome, email, telefone, mensagem);

    // Por agora, apenas redirecionamos de volta para a página de contato com uma mensagem
    // (Em uma implementação real, você poderia usar flash messages ou outra técnica)
     res.render('contato', {
        pageTitle: 'Contato - Atualiza Comunicação Visual',
        contactInfo,
        activePage: 'contato',
        successMessage: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'
    });
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});