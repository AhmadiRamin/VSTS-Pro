const add = (a:number,b:number)=>a+b;

// tslint:disable-next-line:no-empty
test('this should add two numbers',()=>{
    const result = add(4,3);
    expect(result).toBe(7);
});