const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const btnvoltar = document.querySelector("#btn_voltar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
     const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
     cursoSelecionados.map((el)=>{
        caixa2.appendChild(el)
     })
})

btnvoltar.addEventListener("click", ()=>{
    const cursoscaixa2 = [...caixa2.querySelectorAll(".curso")]
    cursoscaixa2.map((el)=>{
        if (!el.classList.contains("selecionado")){
            caixa1.appendChild(el)
        }
    })
})