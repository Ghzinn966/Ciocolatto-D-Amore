document.getElementById('formVenda').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que a página recarregue

    // 1. Pegando os dados digitados pela confeiteira
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const valorTotal = document.getElementById('valorTotal').value;

    // 2. Montando o "pacote" de dados (JSON)
    const dadosVenda = {
        produto: produto,
        quantidade: parseInt(quantidade),
        valorTotal: parseFloat(valorTotal),
        data: new Date().toISOString()
    };

    // 3. O ALVO: A URL do seu Webhook no n8n (AWS)
    // ATENÇÃO: Substituam pelo IP da EC2 e o caminho do Webhook que vocês vão criar no n8n
    const webhookUrl = 'http://SEU-IP-DA-AWS:5678/webhook/registrar-venda';

    const btnSalvar = document.getElementById('btnSalvar');
    const divMensagem = document.getElementById('mensagem');
    
    try {
        btnSalvar.innerText = 'Salvando...';
        btnSalvar.disabled = true;

        // 4. Enviando os dados para o n8n
        const resposta = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosVenda)
        });

        if (resposta.ok) {
            divMensagem.innerText = '✅ Venda registrada e estoque atualizado!';
            divMensagem.className = 'sucesso';
            document.getElementById('formVenda').reset(); // Limpa o form
        } else {
            throw new Error('Erro na comunicação com o servidor.');
        }

    } catch (erro) {
        console.error(erro);
        divMensagem.innerText = '❌ Erro ao registrar venda. Verifique a conexão.';
        divMensagem.className = 'erro';
    } finally {
        btnSalvar.innerText = 'Registrar Venda';
        btnSalvar.disabled = false;
        
        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            divMensagem.className = 'hidden';
        }, 5000);
    }
});
