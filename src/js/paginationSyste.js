class PaginationSystem{
    constructor(){
        this.page = 1;
        this.countOfPages = 0;
        this.refs = {
            arrowLeft: document.querySelector('[data-pag-system="arow-left"]'),
            btn1: document.querySelector('[data-pag-system="1"]'),
            btn2: document.querySelector('[data-pag-system="2"]'),
            btn3: document.querySelector('[data-pag-system="3"]'),
            btn4: document.querySelector('[data-pag-system="4"]'),
            btn5: document.querySelector('[data-pag-system="5"]'),
            btn6: document.querySelector('[data-pag-system="6"]'),
            btn7: document.querySelector('[data-pag-system="7"]'),
            btn8: document.querySelector('[data-pag-system="8"]'),
            btn9: document.querySelector('[data-pag-system="9"]'),
            arrowRight: document.querySelector('[data-pag-system="arow-right"]'),
        }
        this.renderButtons();
    }
    setTotalItems(number){
        this.countOfPages = Math.ceil(number / 20);console.log();
        this.renderButtons();
    }
    setPage(page){
        this.page = page;
        this.renderButtons();
    }
    renderButtons(){
        this.hideSystem();
        if(this.countOfPages > 1){
            const buttonArr = Object.values(this.refs);

            this.refs.arrowLeft.style.display = "inline-block"
            this.refs.arrowRight.style.display = "inline-block"
            
            if(this.countOfPages < 10){
                for(let i = 1; i <= this.countOfPages - 1; i++){
                    buttonArr[i].textContent = i;
                    buttonArr[i].style.display = "inline-block";
                }
            }
            else{
                if(this.page <= 7){
                    for(let i = 1; i <= buttonArr.length - 2; i++){
                        buttonArr[i].style.display = "inline-block";
                        if(i === buttonArr.length - 3){
                            buttonArr[i].textContent = "...";
                            continue;
                        }
                        else if(i === buttonArr.length - 2){
                            buttonArr[i].textContent = this.countOfPages;
                            continue;
                        }
                        buttonArr[i].textContent = i;
                    }
                }
                else if(this.page > 7 && this.page < this.countOfPages - 6){
                    for(let i = 1; i <= buttonArr.length - 1; i++){
                        buttonArr[i].style.display = "inline-block";
                    }
                    this.refs.btn1.textContent = "1";
                    this.refs.btn2.textContent = "...";
                    this.refs.btn3.textContent = this.page - 2;
                    this.refs.btn4.textContent = this.page - 1;
                    this.refs.btn5.textContent = this.page;
                    this.refs.btn6.textContent = this.page + 1;
                    this.refs.btn7.textContent = this.page + 2;
                    this.refs.btn8.textContent = "...";
                    this.refs.btn9.textContent = this.countOfPages;
                }
                else if(this.page >= this.countOfPages - 6){
                    for(let i = 1; i <= buttonArr.length - 1; i++){
                        buttonArr[i].style.display = "inline-block";
                    }
                    this.refs.btn1.textContent = "1";
                    this.refs.btn2.textContent = "...";
                    this.refs.btn3.textContent = this.countOfPages - 6;
                    this.refs.btn4.textContent = this.countOfPages - 5;
                    this.refs.btn5.textContent = this.countOfPages - 4;
                    this.refs.btn6.textContent = this.countOfPages - 3;
                    this.refs.btn7.textContent = this.countOfPages - 2;
                    this.refs.btn8.textContent = this.countOfPages - 1;
                    this.refs.btn9.textContent = this.countOfPages;
                }
            }
        }  
    }
    hideSystem(){
        const buttonArr = Object.values(this.refs);
        buttonArr.forEach(item => {
            item.style.display = "none";
        })
    }
}

export default PaginationSystem