/*
    Create a class "Document" that extends "Permission". In the Document class,
    
    - there should be a constructor that takes in 3 arguments: 
        1. role (pass to parent constructor using "super")
        2. operation (pass to parent constructor using "super")
        3. content (store in private variable)
    - there should be a function "process()" that calls "check()" function declared in the Permission class.
    
    Instantiate from the Document class to create an object that calls "process()" with the following output:
    Scenario 1:
        const d = new Document(Permission.RolesConst.EDITOR, Permission.OperationsConst.UPDATE, "Hello content")
        d.process(); // "Allowed"
    Scenario 2:
        const d = new Document(Permission.RolesConst.READER, Permission.OperationsConst.UPDATE, "Hello content")
        d.process(); // "Blocked"
    Scenario 3:
        const d = new Document(Permission.RolesConst.OWNER, Permission.OperationsConst.DELETE, "Hello content")
        d.process(); // "Allowed"
*/

class Permission{

    // These are static constants that show what are the possible values when checking permission.
    static OperationsConst = {
        CREATE:"CREATE",
        READ:"READ",
        UPDATE:"UPDATE",
        DELETE:"DELETE"
    }
    static RolesConst = {
        OWNER:"OWNER",
        EDITOR:"EDITOR",
        READER:"READER"
    }

    // private variables
    #role;
    #operation;

    // constructor
    constructor(role, operation){
        if(this.constructor.name === "Permission"){
            throw new Error("This class cannot be instantiated");
        }
        this.#role = role;
        this.#operation = operation
    }

    // function
    check(){
        
        const ops = this.#operation.toUpperCase();

        switch(this.#role.toUpperCase()){
            case Permission.RolesConst.OWNER:
                return true;
            case Permission.RolesConst.EDITOR:
                if(ops === Permission.OperationsConst.READ || ops === Permission.OperationsConst.CREATE || ops === Permission.OperationsConst.UPDATE){
                    return true;
                }
                return false;
            case Permission.RolesConst.READER:
                if(ops === Permission.OperationsConst.READ){
                    return true;
                }
                return false;
            default:
                return false;
                
        }
    }
}

// Add code here

class Document extends Permission{

    // private variables 
    #content = null; 

    constructor(role, operation, content){
        // use permission constructor
        super(role, operation);

        // additional constructor not defined in Super class.
        this.#content = content;  
    }

    process(){
        this.check? console.log("Allowed") : console.log("Blocked");  
        console.log("Process content", this.#content); 
    }
}

const a = new Document(Permission.RolesConst.EDITOR, Permission.OperationsConst.UPDATE, "Hello content")
a.process(); // "Allowed"

const b = new Document(Permission.RolesConst.READER, Permission.OperationsConst.UPDATE, "Hello content")
b.process(); // "Blocked"

const d = new Document(Permission.RolesConst.OWNER, Permission.OperationsConst.DELETE, "Hello content")
d.process(); // "Allowed"