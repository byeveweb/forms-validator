export class UI {


    showAlert(msn, nodo, type) {
        const divAlertForm = document.createElement('small')
        divAlertForm.classList.add('text-danger', 'form-text', type)
        divAlertForm.innerHTML = `${msn} - ${nodo} - ${type}`
        this.insertAfter(document.querySelector(`#${nodo}`), divAlertForm)
    }



    insertAfter(parentNode, insertNode) {
        //   console.log(parentNode)
        if (parentNode.nextSibling) {
            parentNode.parentNode.insertBefore(insertNode, parentNode.nextSibling);
        } else {
            parentNode.parentNode.appendChild(insertNode);
        }
    }

}