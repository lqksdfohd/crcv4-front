
/**
 * 
 */
export class ErreurModel{
    error:string;
    status:number;

    constructor(erreur:any){
        const model:ErreurModel = erreur as ErreurModel;
        this.error = model.error;
        this.status = model.status;
    }
}