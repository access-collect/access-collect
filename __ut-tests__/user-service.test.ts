
import { checkPasswordValidity, hashPassword } from "@/lib/userQuery";



describe('hashPassword', () => {
  it('Doit retourner un password Hasher', async () => {
    const password = 'monmotdepasse69';
    const hashed = await hashPassword(password);

    expect(hashed).toBeDefined();

    expect(hashed).not.toBe(password);



    const isValid = await checkPasswordValidity(password,hashed!)
    expect(isValid).toBe(true);

  });

// it('Doit lever une exception en cas d\'erreur', async () => {


//     jest.spyOn(Bcrypt, 'genSalt').mockImplementationOnce(() => {
//       throw new Error('Erreur simulée');
//     });
    
//     await expect(hashPassword('test')).rejects.toThrow('Échec du hashage du mot de passe');
//   });
 });