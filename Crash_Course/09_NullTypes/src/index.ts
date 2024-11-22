function greet(name: string|null): string {
    if(name){
        return `Hello, ${name}!`;
    }
    return `Hello, Guest!`;
    
}


greet(null)