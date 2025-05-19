
import { hashPassword } from "@/lib/userQuery";
import Bcrypt from "bcryptjs";


describe('hashPassword', () => {
  it('Doit retourner un password Hasher', async () => {
    const password = 'monmotdepasse69';
    const hashed = await hashPassword(password);

    expect(hashed).toBeDefined(); 
    expect(hashed).not.toBe(password); 
    
    const isValid = await Bcrypt.compare(password, hashed!); 
    // if(!isValid){
    // return (
    // expect(!isValid).toThrow())}
    
    expect(isValid).toBe(true); 

  });
});
