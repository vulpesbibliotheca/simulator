//Limita o número de casas após a vírgula
Number.prototype.toFixedDown = function (digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function simularScore() {
    //Array com o escore de todos os anos listados em data.js
    var scores = [];

    var questions_num = {
        "portugues": 14,
        "ling_estrangeira": 7,
        "fisica": 7,
        "matematica": 7,
        "historia": 7,
        "biologia": 7,
        "geografia": 7,
        "quimica": 7,
        "redacao": 10
    }

    //Texto final, que demonstrará os resultados
    var result_text = ""
   
    //Notas
    var forms = document.getElementsByClassName("score");

    //Iteração entre anos
    for (i = 0; i < DM.length; i++) {

        //Somatório de escores de apenas uma edição
        var exam_score = 0

        //Iteração entre matérias
        for (var subject in DM[i]["subjects"]) {
            const Adisc = forms[subject].value;
            const Mdisc = DM[i]["subjects"][subject]["Mdisc"];
            const DPisc = DM[i]["subjects"][subject]["DPdisc"];
            const P = questions_num[subject] / 73;

            //Escore transformado da disciplina
            const ETdisc = 500 + 100 * ((Adisc - Mdisc) / DPisc) * P;
            exam_score += ETdisc;
        }

        scores.push(exam_score)
        //Nome da edição do vestibular, ex: "Vestibular de Verão 2020"
        const exam_name = DM[i]["name"];

        //Adiciona texto à resposta final que aparecerá ao usuário.
        result_text += `<br>Escore Vestibular de ${exam_name}: ${exam_score.toFixedDown(4)}`;
    }

    let average = (array) => array.reduce((a, b) => a + b) / array.length;

    //Pula linha
    result_text = `<br>` + result_text

    //Médias
    //Adiciona a média dos 3 últimos escores ao texto de resposta
    var score_triplo = []
    for (i = 0; i < 3; i++){
        score_triplo.push(scores[i])
        console.log(score_triplo)
    }
    result_text = `<br>Escore Médio Triplo: ${average(score_triplo).toFixed(4)}` + result_text
    //Adiciona a média de todos os escores ao texto de resposta
    result_text = `<br>Escore Médio: ${average(scores).toFixed(4)}` + result_text

    //Pula linha
    result_text = `<br>` + result_text

    //Acertos e Chance
    //Adiciona número de acertos
    var nAcertos = []
    for (var subject in DM[i]["subjects"]){
        var teste = 0
        if(Number.isNaN(parseInt(forms[subject].value))){
            nAcertos.push(0);
        } else {
            nAcertos.push(parseInt(forms[subject].value));
        }  
    }
    console.log(nAcertos)
    //Calcula número de acertos
    var totalAcertos = 0
    for (i = 0; i < nAcertos.length - 1; i++){
        totalAcertos += parseInt(nAcertos[i], 10);
    }
    console.log(totalAcertos)
    result_text = `<br>Seu número de acertos: ${totalAcertos}` + result_text

    //Adiciona Média de classificados
    var medias = []
    for (i = 0; i < MC.length; i++) {
        const media = MC[i]["media"];
        medias.push(media);
    }
    console.log(medias)    
    //Calcula média de classificados
    var media_classificados = 0
    for (i = 0; i < medias.length; i++){
        media_classificados += parseInt(medias[i], 10);
    }
    media_classificados = media_classificados / MC.length
    media_classificados = Math.round(media_classificados);
    console.log(media_classificados)
    result_text = `<br>Média de acertos classificáveis: ${media_classificados}` + result_text

    //Calcula chance de aprovação
    var chance_aprovacao
    //Acertos acima da média
    if(totalAcertos <= (media_classificados - 6)){
        chance_aprovacao = 'Pouco provável';
    } else {
        if(totalAcertos == (media_classificados - 5)){
            chance_aprovacao = 'Possível';
        } else {
            if(totalAcertos == (media_classificados - 4)){
                chance_aprovacao = 'Possível';
            } else { 
                if(totalAcertos == (media_classificados - 3)){
                    chance_aprovacao = 'Possível';
                } else {
                    if(totalAcertos == (media_classificados - 2)){
                        chance_aprovacao = 'Provável';
                    } else {
                        if(totalAcertos == (media_classificados - 1)){
                            chance_aprovacao = 'Provável';
                        } else {
                            if (totalAcertos == media_classificados){
                            chance_aprovacao = 'Provável';
                        } else {
                            if(totalAcertos == (media_classificados + 1)){
                                chance_aprovacao = 'Muito provável';
                            } else {
                                chance_aprovacao = 'Muito provável';
                                }
                            }
                        } 
                    }
                }
            }
        }
    }

    result_text = `<br>Chance de Aprovação: ${chance_aprovacao}` + result_text

    var result_display = document.getElementById("result_div");
    result_display.style.display = "inline-block";
    result_display.innerHTML = result_text;

}