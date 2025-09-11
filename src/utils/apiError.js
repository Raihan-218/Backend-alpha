class apiError extends Error {
    constructor(
        statusCode,
        messsage = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(messsage)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.sucess = false;
        this.errors = errors



        if(statck){
             this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export { apiError }