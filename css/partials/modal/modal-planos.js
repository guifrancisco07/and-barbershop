const btn_modal_1 = document.getElementById("abre-modal-plano1")
const btn_modal_2 = document.getElementById("abre-modal-plano2")
const btn_modal_3 = document.getElementById("abre-modal-plano3")

const modal_plano_1 = document.getElementById("modal_plano_1")
const modal_plano_2 = document.getElementById("modal_plano_2")
const modal_plano_3 = document.getElementById("modal_plano_3")

const btn_fechar_1 = document.getElementById("btn-fecha-1")
const btn_fechar_2 = document.getElementById("btn-fecha-2")
const btn_fechar_3 = document.getElementById("btn-fecha-3")

btn_modal_1.onclick = function (){
    modal_plano_1.showModal()
}

btn_fechar_1.onclick = function () {
    modal_plano_1.close()
}

btn_modal_2.onclick = function (){
    modal_plano_2.showModal()
}

btn_fechar_2.onclick = function () {
    modal_plano_2.close()
}

btn_modal_3.onclick = function (){
    modal_plano_3.showModal()
}

btn_fechar_3.onclick = function () {
    modal_plano_3.close()
}