import { sum } from "../sum"

test('Sum Function should calculate sum of two numbers',()=>{
    const result=sum(1,5);

    expect(result).toBe(6);
})