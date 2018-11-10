$(document).ready(() => {
    $('#btn_inserir').click(() => {
        valorLote = $('#input_inserir_lote').val();
        valorConteudo = $('#input_inserir_conteudo').val();
        valorValidade = $('#input_inserir_validade').val();
        $.ajax({
            url: 'http://localhost:5000/toddy/inserir',
            type: 'POST',
            crossDomain: true,
            data: {
                lote: valorLote,
                conteudo: valorConteudo,
                validade: valorValidade,
            },
            success: (result, status, xhr) => alert(status),
            error: () => alert('error'),
        });
    });

    $('#btn_listar').click(() => {
        $.ajax({
            url: 'http://localhost:5000/toddy/listar',
            type: 'GET',
            crossDomain: true,
            success: (result, status, xhr) => {
                table = '<table border="1">';
                table += `
                    <tr>
                        <th>id</th>
                        <th>lote</th>
                        <th>conteudo</th>
                        <th>validade</th>
                    </tr>`;
                $.each(result, (indice, obj) => {
                    table += `
                        <tr>
                            <td>${obj.id}</td>
                            <td>${obj.lote}</td>
                            <td>${obj.conteudo}</td>
                            <td>${obj.validade}</td>
                        </tr>`;
                });
                table += '</table>';
                $('#div_listar').html(table);
            },
            error: () => alert('error'),
        });
    });

    $('#btn_atualizar').click(() => {
        valorId = $('#input_atualizar_id').val();
        valorLote = $('#input_atualizar_lote').val();
        valorConteudo = $('#input_atualizar_conteudo').val();
        valorValidade = $('#input_atualizar_validade').val();
        $.ajax({
            url: 'http://localhost:5000/toddy/atualizar',
            type: 'POST',
            crossDomain: true,
            data: {
                id: valorId,
                lote: valorLote,
                conteudo: valorConteudo,
                validade: valorValidade,
            },
            success: (result, status, xhr) => alert(status),
            error: () => alert('error'),
        });
    });

    // $('#btn_excluirPorId').click(() => {
    //     valorId = $('#input_excluirPorId_id').val();
    //     $.ajax({
    //         url: `http://localhost:5000/toddy/excluirPorId/?id=${valorId}`,
    //         type: 'POST',
    //         crossDomain: true,
    //         success: (result, status, xhr) => alert(status),
    //         error: () => alert('error'),
    //     });
    // });
})