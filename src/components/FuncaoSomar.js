export const somarValores = (api, res) => {
    let soma = 0
    for (var i = 0; i < api.length; i++) {
        soma += api[i].valor
        res(soma)
    }
}