export class WinnersView {
    nameHeader;
    pageNumber;
    winnersTotal;
    constructor(nameHeader:string, pageNumber:number, winnersTotal: number){
        this.nameHeader = nameHeader;
        this.pageNumber = pageNumber;
        this.winnersTotal = winnersTotal;
    }
    
}